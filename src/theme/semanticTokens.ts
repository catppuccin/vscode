import type { SemanticTokens, ThemeContext } from "../types";

export const getSemanticTokens = (context: ThemeContext): SemanticTokens => {
  const { palette } = context;

  return {
    "*.deprecated": {
      fontStyle: "underline",
    },
    "*.static": {
      foreground: palette.peach,
    },
    class: {
      foreground: palette.yellow,
    },
    decorators: {
      foreground: palette.peach,
    },
    enumMember: {
      foreground: palette.teal,
    },
    macro: {
      foreground: palette.teal,
    },
    namespace: {
      foreground: palette.yellow,
    },
    parameter: {
      foreground: palette.maroon,
    },
    regexp: {
      foreground: palette.pink,
    },
    string: {
      foreground: palette.green,
    },
  };
};
