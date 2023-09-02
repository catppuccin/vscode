import type { SemanticTokens, ThemeContext } from "../types";

export const getSemanticTokens = (context: ThemeContext): SemanticTokens => {
  const { palette } = context;

  return {
    decorators: {
      foreground: palette.peach,
    },
    enumMember: {
      foreground: palette.teal,
    },
    macro: {
      foreground: palette.teal,
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
