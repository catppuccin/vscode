# If incremental builds work, this derivation should be the base for the
# customized derivation. To check that incremental builds work, run:
# > nix-build ./incremental-check.nix -A default
# > nix-build ./incremental-check.nix -A customized
# The rebuild should take less than 5 seconds for the customized derivation.
{pkgs ? import <nixpkgs> {}}: let
  default = pkgs.callPackage ./. {};
in {
  inherit default;

  customized = default.override {
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
