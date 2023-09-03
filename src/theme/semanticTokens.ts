import type { SemanticTokens, ThemeContext } from "../types";

export const getSemanticTokens = (context: ThemeContext): SemanticTokens => {
  const { palette } = context;

  return {
    "class:python": { foreground: palette.yellow },
    "class.builtin:python": { foreground: palette.mauve },
    enumMember: { foreground: palette.teal },
    selfKeyword: { foreground: palette.red },
    "variable.defaultLibrary": { foreground: palette.maroon },
    // ignore `consts` being peach in JS & TS
    "variable.readonly:javascript": { foreground: palette.text },
    "variable.readonly:typescript": { foreground: palette.text },
    "property.readonly:javascript": { foreground: palette.text },
    "property.readonly:typescript": { foreground: palette.text },
    tomlArrayKey: { foreground: palette.blue, fontStyle: "" },
    tomlTableKey: { foreground: palette.blue, fontStyle: "" },
    "builtinAttribute.attribute.library:rust": { foreground: palette.blue },
    "generic.attribute:rust": { foreground: palette.text },
    heading: { foreground: palette.teal },
  };
};
