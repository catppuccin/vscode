import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "LaTeX preamble",
      scope: "text.tex keyword.control.preamble",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "LaTeX be functions",
      scope: "text.tex support.function.be",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "LaTeX math",
      scope: "constant.other.general.math.tex",
      settings: {
        foreground: palette.flamingo,
      },
    },
  ];
};

export default tokens;
