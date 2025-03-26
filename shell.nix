{
  pkgs ? import <nixpkgs> {
    config = { };
    overlays = [ ];
  },
}:
pkgs.mkShell {
  packages = with pkgs; [
    nodejs_22
    (pnpm.override { nodejs = nodejs_22; })
  ];
}