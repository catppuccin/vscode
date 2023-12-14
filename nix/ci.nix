{pkgs ? import <nixpkgs> {}}: let
  catppuccin-vsc = pkgs.callPackage ./. {};
in {
  default = catppuccin-vsc;

  customized = catppuccin-vsc.override {
    accent = "pink";
    boldKeywords = false;
    italicComments = false;
    italicKeywords = false;
    colorOverrides = {
      mocha = rec {
        base = "#000000";
        mantle = base;
        crust = base;
      };
    };
    customUIColors = {
      all = {
        "statusBar.foreground" = "accent";
        "statusBar.noFolderForeground" = "accent";
      };
    };
    workbenchMode = "minimal";
    bracketMode = "monochromatic";
    extraBordersEnabled = true;
  };
}
