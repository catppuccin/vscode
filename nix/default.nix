{
  pkgs ? import <nixpkgs> {},
  accentColor ? null,
  accent ? "mauve",
  boldKeywords ? true,
  italicComments ? true,
  italicKeywords ? true,
  extraBordersEnabled ? false,
  workbenchMode ? "default",
  bracketMode ? "rainbow",
  colorOverrides ? {},
  customUIColors ? {},
} @ inputs: let
  inherit (pkgs) lib;

  packageJSON = builtins.fromJSON (builtins.readFile ../packages/catppuccin-vsc/package.json);
  properties = packageJSON.contributes.configuration.properties;
  validAccents = properties."catppuccin.accentColor".enum;
  validWorkbenchModes = properties."catppuccin.workbenchMode".enum;
  validBracketModes = properties."catppuccin.bracketMode".enum;

  inherit (packageJSON) version;
  pname = packageJSON.name;

  options = builtins.removeAttrs inputs ["pkgs"];
  src = pkgs.nix-gitignore.gitignoreSource [] (builtins.path {
    name = "${pname}-${version}";
    path = ../.;
  });

  nodejs = pkgs.nodejs_20;

  builder = pkgs.callPackage ./yarn-project.nix {inherit nodejs;} {
    inherit src;
    overrideAttrs = {
      name = "${pname}-builder";
      pname = "${pname}-builder";

      buildPhase = ''
        runHook preBuild
        yarn core:build
        runHook postBuild
      '';

      installPhase = ''
        runHook preInstall
        mkdir -p $out
        cd packages/catppuccin-vsc
        cp -rL LICENSE README.md package.json icon.png dist/ themes/ $out/
        runHook postInstall
      '';
    };
  };
  vscodeExtPublisher = "catppuccin";
  vscodeExtName = pname;
  vscodeExtUniqueId = "${vscodeExtPublisher}.${vscodeExtName}";
in
  (lib.throwIfNot (accentColor == null) "${pname}: deprecated option 'accentColor' is no longer supported, please use 'accent' instead.")
  (lib.checkListOfEnum "${pname}: accent" validAccents [accent])
  (lib.checkListOfEnum "${pname}: workbenchMode" validWorkbenchModes [workbenchMode])
  (lib.checkListOfEnum "${pname}: bracketMode" validBracketModes [bracketMode])
  (pkgs.vscode-utils.buildVscodeExtension {
    inherit pname version vscodeExtPublisher vscodeExtName vscodeExtUniqueId;
    src = builder.outPath;

    buildInputs = [pkgs.nodejs];

    env.CATPPUCCIN_OPTIONS = builtins.toJSON options;

    # we're checking in the ./themes/.flag file so it doesn't prompt for initial rebuilds
    buildPhase = ''
      runHook preBuild
      node dist/hooks/generateThemes.cjs
      touch ./themes/.flag
      runHook postBuild
    '';
  })
  .overrideAttrs (_: {sourceRoot = null;})
