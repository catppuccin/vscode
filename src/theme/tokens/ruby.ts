import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Ruby built-in functions",
      scope: ["support.function.kernel.ruby"],
      settings: {
        foreground: palette.blue,
        fontStyle: "italic",
      },
    },
  ];
};

export default tokens;
