{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  buildInputs = with pkgs; [alejandra nil nodejs_20 corepack_20];
}
