import type { SemanticTokens, ThemeContext } from "@/types";

export const getSemanticTokens = (context: ThemeContext): SemanticTokens => {
  const { palette } = context;

  return {
    enumMember: { foreground: palette.teal },
    selfKeyword: { foreground: palette.red },
    boolean: { foreground: palette.peach },
    number: { foreground: palette.peach },
    "variable.defaultLibrary": { foreground: palette.maroon },

    // Python types
    "class:python": { foreground: palette.yellow },
    "class.builtin:python": { foreground: palette.mauve },
    "variable.typeHint:python": { foreground: palette.yellow },
    "function.decorator:python": { foreground: palette.peach },

    // ignore `const`s being peach in JS & TS
    "variable.readonly:javascript": { foreground: palette.text },
    "variable.readonly:typescript": { foreground: palette.text },
    "property.readonly:javascript": { foreground: palette.text },
    "property.readonly:typescript": { foreground: palette.text },
    // ditto for React
    "variable.readonly:javascriptreact": { foreground: palette.text },
    "variable.readonly:typescriptreact": { foreground: palette.text },
    "property.readonly:javascriptreact": { foreground: palette.text },
    "property.readonly:typescriptreact": { foreground: palette.text },

    // Scala, also dealing with constants
    "variable.readonly:scala": { foreground: palette.text },

    // Golang builtin readonly defaultLibrary (nil)
    "type.defaultLibrary:go": { foreground: palette.mauve },
    "variable.readonly.defaultLibrary:go": { foreground: palette.mauve },

    // Haskell:
    "enumMember:haskell": /* data constructors */ {
      foreground: palette.blue,
    },
    "enum:haskell": /* types */ {
      foreground: palette.yellow,
    },
    "class:haskell": /* typeclasses */ {
      foreground: palette.yellow,
      fontStyle: "",
    },
    "interface:haskell": /* type families */ {
      foreground: palette.pink,
      // needs something distinct from typeclasses -> pick pink which is used for meta-variables in Rust
    },
    "property:haskell": /* getters in data constructors/records */ {
      foreground: palette.blue,
    },

    // TOML syntax
    tomlArrayKey: { foreground: palette.blue, fontStyle: "" },
    tomlTableKey: { foreground: palette.blue, fontStyle: "" },

    // Rust attributes
    "builtinAttribute.attribute.library:rust": { foreground: palette.blue },
    "generic.attribute:rust": { foreground: palette.text },

    // Nix
    "constant.builtin.readonly:nix": { foreground: palette.mauve },

    // Typst
    heading: { foreground: palette.red },
    "text.emph": { foreground: palette.red, fontStyle: "italic" },
    "text.strong": { foreground: palette.red, fontStyle: "bold" },
    "text.math": { foreground: palette.flamingo },
    pol: { foreground: palette.flamingo },
  };
};
