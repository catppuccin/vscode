{
  pkgs ? import <nixpkgs> {},
  accentColor ? "mauve",
  boldKeywords ? true,
  italicComments ? true,
  italicKeywords ? true,
  extraBordersEnabled ? false,
  workbenchMode ? "default",
  bracketMode ? "rainbow",
  colorOverrides ? {},
  customUIColors ? {},
} @ inputs: let
  inherit (pkgs) lib;

  packageJSON = builtins.fromJSON (builtins.readFile ../package.json);
  properties = packageJSON.contributes.configuration.properties;
  validAccents = properties."catppuccin.accentColor".enum;
  validWorkbenchModes = properties."catppuccin.workbenchMode".enum;
  validBracketModes = properties."catppuccin.bracketMode".enum;

  inherit (packageJSON) name version;
  pname = "${name}-${version}";

  options = builtins.removeAttrs inputs ["pkgs"];
  src = pkgs.nix-gitignore.gitignoreSource [] ../.;

  builder = pkgs.callPackage ./yarn-project.nix {} {
    inherit src;
    overrideAttrs = {
      pname = "${pname}-builder";

      buildPhase = ''
        runHook preBuild
        yarn compile
        runHook postBuild
      '';

      installPhase = ''
        runHook preInstall
        mkdir -p $out
        cp -r dist/* $out
        runHook postInstall
      '';
    };
  };

  extension = pkgs.stdenvNoCC.mkDerivation {
    inherit name version pname src;
    buildInputs = [pkgs.nodejs pkgs.vsce];

    # check in the ./themes/.flag so it doesn't prompt for initial rebuilds
    patchPhase = ''
      runHook prePatch
      printf "\n!themes/.flag\n" >> .vscodeignore
      runHook postPatch
    '';

    env.CATPPUCCIN_OPTIONS = builtins.toJSON options;

    buildPhase = ''
      runHook preBuild
      mkdir -p themes dist
      cp -r ${builder}/* dist/
      touch ./themes/.flag
      node dist/hooks/generateThemes.js
      vsce package --yarn
      runHook postBuild
    '';

    installPhase = ''
      runHook preInstall
      mkdir -p $out
      # rename the file extension to zip for the buildVSCodeMarketplaceExtension builder
      mv catppuccin-vsc-*.vsix $out/catppuccin-vsc.zip
      runHook postInstall
    '';
  };
in
  (lib.checkListOfEnum "${pname}: accent" validAccents [accentColor])
  (lib.checkListOfEnum "${pname}: workbenchMode" validWorkbenchModes [workbenchMode])
  (lib.checkListOfEnum "${pname}: bracketMode" validBracketModes [bracketMode])
  pkgs.vscode-utils.buildVscodeMarketplaceExtension {
    vsix = "${extension.outPath}/catppuccin-vsc.zip";
    mktplcRef = {
      # lowercase since it is used in the pname
      publisher = "catppuccin";
      inherit name version;
    };
  }
