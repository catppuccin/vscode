{pkgs ? import <nixpkgs> {}}: let
  nodejs = pkgs.nodejs_18;
in
  pkgs.mkShell {
    buildInputs = with pkgs; [
      alejandra
      nil

      nodejs
      corepack
      (yarn.override {inherit nodejs;})
    ];
  }
