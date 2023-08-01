{
  outputs = {nixpkgs, ...} @ inputs: let
    systems = [
      "aarch64-darwin"
      "aarch64-linux"
      "x86_64-darwin"
      "x86_64-linux"
    ];
    forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f system);
  in {
    devShells = forAllSystems (system: let
      pkgs = import nixpkgs {inherit system;};
      nodejs = pkgs.nodejs_18;
    in {
      default = pkgs.mkShell {
        buildInputs = [nodejs (pkgs.yarn.override {inherit nodejs;})];
      };
    });
  };
}
