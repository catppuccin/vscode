import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  /*
  should preferrably appear visually distinct:
  - data constructors -> use blue
  - type constructors -> use yellow+italic
  - typeclasses       -> use yellow
  */

  return [
    {
      name: "data constructors",
      scope: ["meta.declaration.data constant.other", "constant.other"],
      settings: { foreground: palette.blue },
      // like functions (capitalized -> still visually distinct)
    },
    {
      name: "type constructors",
      scope: ["storage.type.haskell"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "typeclasses",
      scope: ["entity.name.type.class"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "module name",
      scope: "meta.declaration.module.haskell entity.name.namespace.haskell",
      settings: {
        foreground: palette.peach, // as in Rust
      },
    },
    {
      name: "type parameters",
      scope: ["entity.name.type.parameter", "variable.other.generic-type"],
      settings: { foreground: palette.maroon },
    },
    {
      name: "pragma keywords",
      scope: ["	keyword.other.preprocessor"],
      settings: { foreground: palette.red },
    },
    {
      name: "pragma arguments",
      scope: ["	keyword.other.preprocessor.extension"],
      settings: { foreground: palette.peach },
    },
    {
      name: "preprocessor directives",
      scope: ["meta.preprocessor"],
      settings: { foreground: palette.rosewater },
    },

    {
      name: "type families",
      scope: ["entity.name.type.interface"],
      settings: { foreground: palette.pink },
      // we need something distinct from typeclasses
      // -> pick pink which is used for meta-variables in Rust
    },
    {
      name: "getters in data constructors/records",
      scope: ["variable.other.property", "variable.other.member"],
      settings: { foreground: palette.blue },
    },
    {
      name: "fix else keyword",
      scope: ["keyword.control.else.haskell"],
      settings: { foreground: palette.mauve },
      // catppuccin default sets to yellow considering it preprocessor-like, which it is not for Haskell
    },
  ];
};

export default tokens;
