{
  pkgs ? import <nixpkgs> {},
  accentColor ? null,
  accent ? "mauve",
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

  packageJSON = builtins.fromJSON (builtins.readFile ../packages/catppuccin-vsc/package.json);
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
      name = "${pname}-builder";
      pname = "${pname}-builder";

      buildPhase = ''
        runHook preBuild
        yarn core:build
        runHook postBuild
      '';

      installPhase = ''
        runHook preInstall
        mkdir -p $out
        cd packages/catppuccin-vsc
        cp -rL LICENSE README.md package.json dist/ themes/ $out/
        runHook postInstall
      '';
    };
  };
in
  (lib.throwIfNot (accentColor == null) "${pname}: deprecated option 'accentColor' is no longer supported, please use 'accent' instead.")
  (lib.checkListOfEnum "${pname}: accent" validAccents [accent])
  (lib.checkListOfEnum "${pname}: workbenchMode" validWorkbenchModes [workbenchMode])
  (lib.checkListOfEnum "${pname}: bracketMode" validBracketModes [bracketMode])
  pkgs.vscode-utils.buildVscodeExtension rec {
    inherit name version;
    src = builder.outPath;
    vscodeExtPublisher = "catppuccin";
    vscodeExtName = name;
    vscodeExtUniqueId = "${vscodeExtPublisher}.${vscodeExtName}";

    buildInputs = [pkgs.nodejs];

    env.CATPPUCCIN_OPTIONS = builtins.toJSON options;

    # we're checking in the ./themes/.flag file so it doesn't prompt for initial rebuilds
    buildPhase = ''
      runHook preBuild
      node dist/hooks/generateThemes.js
      touch ./themes/.flag
      runHook postBuild
    '';
  }
