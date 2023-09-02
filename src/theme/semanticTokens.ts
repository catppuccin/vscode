import type { SemanticTokens, ThemeContext } from "../types";

export const getSemanticTokens = (context: ThemeContext): SemanticTokens => {
  const { palette } = context;

  return {
    "class:python": {
      foreground: palette.yellow,
    },
    "class.builtin:python": {
      foreground: palette.mauve,
    },
    enumMember: {
      foreground: palette.teal,
    },
    selfKeyword: {
      foreground: palette.red,
    },
  };
};
