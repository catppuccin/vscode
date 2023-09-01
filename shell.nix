{pkgs ? import <nixpkgs> {}}: let
  nodejs = pkgs.nodejs_18;
in
  pkgs.mkShell {
    buildInputs = [
      nodejs
      (pkgs.yarn.override {inherit nodejs;})
    ];
  }
