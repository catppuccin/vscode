import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Julia functions",
      scope: "support.function.julia",
      settings: {
        foreground: palette.blue,
        fontStyle: "italic",
      },
    },
    {
      name: "Julia macros",
      scope: "support.function.macro.julia",
      settings: {
        foreground: palette.teal,
        fontStyle: "italic",
      },
    },
    {
      name: "Julia language constants (true, false)",
      scope: "constant.language.julia",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "Julia other constants (these seem to be arguments inside arrays)",
      scope: "constant.other.symbol.julia",
      settings: {
        foreground: palette.maroon,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
