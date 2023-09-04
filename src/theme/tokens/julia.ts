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
      name: "Julia constants (true, false)",
      scope: "constant.language.julia",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
