import type { SemanticTokens, ThemeContext } from "../types";

export const getSemanticTokens = (context: ThemeContext): SemanticTokens => {
  const { palette } = context;

  return {
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
      foreground: palette.red,
    },
    "variable.constant": {
      foreground: palette.peach,
    },
  };
};
