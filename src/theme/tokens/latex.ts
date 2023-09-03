import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "LaTeX preamble",
      scope: "text.tex keyword.control.preamble",
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "LaTeX functions",
      scope: "text.tex support.function",
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "LaTeX be functions",
      scope: "text.tex support.function.be",
      settings: {
        foreground: palette.sky,
        fontStyle: "",
      },
    },
    {
      name: "LaTeX math",
      scope: "constant.other.general.math.tex",
      settings: {
        foreground: palette.flamingo,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
