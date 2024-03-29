{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = {nixpkgs, ...} @ inputs: let
    systems = ["aarch64-darwin" "aarch64-linux" "x86_64-darwin" "x86_64-linux"];
    forAllSystems = fn: nixpkgs.lib.genAttrs systems (system: fn nixpkgs.legacyPackages.${system});
  in {
    packages = forAllSystems (pkgs: rec {
      default = catppuccin-vsc;
      catppuccin-vsc = pkgs.callPackage ./nix {};
    });

    overlays.default = final: prev: let
      pkg = inputs.self.packages.${prev.stdenv.system}.default;
    in {
      # create a new package
      catppuccin-vsc = pkg;
      # overwrite the vscode-extensions package
      vscode-extensions =
        prev.vscode-extensions
        // {
          catppuccin =
            (prev.vscode-extensions.catppuccin or {})
            // {
              catppuccin-vsc = pkg;
            };
        };
    };

    devShells = forAllSystems (pkgs: {default = import ./nix/shell.nix {inherit pkgs;};});

    formatter = forAllSystems (pkgs: pkgs.alejandra);
  };
}
