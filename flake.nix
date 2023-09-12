{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = {nixpkgs, ...} @ inputs: let
    systems = ["aarch64-darwin" "aarch64-linux" "x86_64-darwin" "x86_64-linux"];
    forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f system);
  in {
    packages = forAllSystems (system: let
      pkgs = nixpkgs.legacyPackages.${system};
    in rec {
      default = catppuccin-vsc;
      catppuccin-vsc = pkgs.callPackage ./. {};
    });

    overlays.default = final: prev: let
      pkg = inputs.self.packages.${prev.stdenv.hostPlatform.system}.default;
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

    devShells = forAllSystems (system: let
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      default = import ./shell.nix {inherit pkgs;};
    });
  };
}
