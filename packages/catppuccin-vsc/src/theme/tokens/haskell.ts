import type { TextmateColors, ThemeContext } from "@/types";

/*

STYLING CHOICES
---------------

  should preferrably appear visually distinct:
  - data constructors -> use blue
  - types             -> use yellow+italic
  - typeclasses [1]   -> use yellow

[1]: typeclasses are not distinguishable from types with only textMate scopes; requires semantic tokens

*/

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "data constructors",
      scope: ["meta.declaration.data constant.other", "constant.other"],
      settings: {
        foreground: palette.blue,
      },
      // like functions (capitalized -> still visually distinct)
    },
    {
      name: "types",
      scope: ["storage.type.haskell"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "type parameters",
      scope: ["variable.other.generic-type"],
      settings: {
        foreground: palette.maroon,
      },
    },
    {
      name: "special words (builtin constants-like)",
      scope: ["keyword.other.preprocessor"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "pragma arguments",
      scope: ["keyword.other.preprocessor.extension"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "preprocessor directives",
      scope: ["meta.preprocessor"],
      settings: {
        foreground: palette.rosewater,
      },
    },
    {
      name: "getters in data constructors/records",
      scope: ["variable.other.member"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "fix else keyword",
      scope: ["keyword.control.else.haskell"],
      settings: {
        foreground: palette.mauve,
      },
      // catppuccin default sets to yellow considering it preprocessor-like, which it is not for Haskell
    },
  ];
};

export default tokens;
