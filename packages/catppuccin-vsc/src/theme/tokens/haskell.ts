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
      scope: [
        "meta.declaration.data constant.other.haskell",
        "constant.other.haskell", // to hit data constr. if no semantic tokens
      ],
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
      scope: ["variable.other.generic-type.haskell"],
      settings: {
        foreground: palette.maroon,
      },
    },
    {
      name: "special words (builtin constants-like)",
      scope: [
        "keyword.other.preprocessor.haskell",
        "keyword.other.preprocessor.pragma.haskell",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "pragma arguments",
      scope: ["keyword.other.preprocessor.extension.haskell"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "preprocessor directives",
      scope: [
        "source.haskell meta.preprocessor.c",
        "source.haskell meta.preprocessor.c punctuation.definition.preprocessor.c",
        "meta.preprocessor.haskell",
      ],
      settings: {
        foreground: palette.rosewater,
      },
    },
    {
      name: "getters in data constructors/records",
      scope: [
        "variable.other.member.haskell",
        "variable.other.member.definition.haskell",
      ],
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
