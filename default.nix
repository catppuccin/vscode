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

  packageJSON = builtins.fromJSON (builtins.readFile ./package.json);
  properties = (builtins.head packageJSON.contributes.configuration).properties;
  validAccents = properties."catppuccin.accentColor".enum;
  validWorkbenchModes = properties."catppuccin.workbenchMode".enum;
  validBracketModes = properties."catppuccin.bracketMode".enum;

  inherit (packageJSON) name version;
  pname = "${name}-${version}";

  options = builtins.removeAttrs inputs ["pkgs"];
  project =
    (pkgs.callPackage ./yarn-project.nix {} {
      src = pkgs.nix-gitignore.gitignoreSource [] ./.;
    })
    .overrideAttrs (old: {
      # check in the ./themes/.flag so it doesn't prompt for initial rebuilds
      patchPhase = ''
        printf "\n!themes/.flag\n" >> .vscodeignore
      '';
      buildPhase = ''
        yarn compile
        yarn compile:theme '${builtins.toJSON options}'
        touch ./themes/.flag
        yarn package
      '';
      installPhase = ''
        mkdir -p $out
        # rename the file extension to zip for the buildVSCodeMarketplaceExtension builder
        mv catppuccin-vsc-*.vsix $out/catppuccin-vsc.zip
      '';
    });
in
  (lib.checkListOfEnum "${pname}: accent" validAccents [accentColor])
  (lib.checkListOfEnum "${pname}: workbenchMode" validWorkbenchModes [workbenchMode])
  (lib.checkListOfEnum "${pname}: bracketMode" validBracketModes [bracketMode])
  pkgs.vscode-utils.buildVscodeMarketplaceExtension {
    vsix = "${project.outPath}/catppuccin-vsc.zip";
    mktplcRef = {
      # lowercase since it is used in the pname
      publisher = "catppuccin";
      inherit name version;
    };
  }
