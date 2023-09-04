{
  pkgs ? import <nixpkgs> {},
  accent ? "mauve",
  boldKeywords ? true,
  italicComments ? true,
  italicKeywords ? true,
  colorOverrides ? {},
  workbenchMode ? "default",
  bracketMode ? "rainbow",
  extraBordersEnabled ? false,
  customUIColors ? {},
}: let
  options = {
    inherit accent boldKeywords italicComments italicKeywords colorOverrides workbenchMode bracketMode extraBordersEnabled customUIColors;
  };
  project = (pkgs.callPackage ./yarn-project.nix {} {src = ./.;}).overrideAttrs (old: {
    src = pkgs.nix-gitignore.gitignoreSource [] ./.;
    buildPhase = ''
      yarn compile
      yarn compile:theme '${builtins.toJSON options}'
      yarn package
    '';
    installPhase = ''
      mkdir -p $out
      # rename the file extension to zip for the buildVSCodeMarketplaceExtension builder
      mv catppuccin-vsc-*.vsix $out/catppuccin-vsc.zip
    '';
  });
  packageJSON = builtins.fromJSON (builtins.readFile ./package.json);
  inherit (packageJSON) name version;
  inherit (packageJSON.__metadata) publisherDisplayName;
in
  pkgs.vscode-utils.buildVscodeMarketplaceExtension {
    vsix = "${project.outPath}/catppuccin-vsc.zip";
    mktplcRef = {
      publisher = publisherDisplayName;
      inherit name version;
    };
  }
