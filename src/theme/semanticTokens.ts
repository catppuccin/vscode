import type { SemanticTokens, ThemeContext } from "../types";

export const getSemanticTokens = (context: ThemeContext): SemanticTokens => {
  const { palette } = context;

  return {
    enumMember: { foreground: palette.teal },
    selfKeyword: { foreground: palette.red },
    "variable.defaultLibrary": { foreground: palette.maroon },

    // Python types
    "class:python": { foreground: palette.yellow },
    "class.builtin:python": { foreground: palette.mauve },

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

    // TOML syntax
    tomlArrayKey: { foreground: palette.blue, fontStyle: "" },
    tomlTableKey: { foreground: palette.blue, fontStyle: "" },

    // Rust attributes
    "builtinAttribute.attribute.library:rust": { foreground: palette.blue },
    "generic.attribute:rust": { foreground: palette.text },

    // Typst
    heading: { foreground: palette.red },
    "text.emph": { foreground: palette.red, fontStyle: "italic" },
    "text.strong": { foreground: palette.red, fontStyle: "bold" },
    "text.math": { foreground: palette.flamingo },
    pol: { foreground: palette.flamingo },
  };
};
