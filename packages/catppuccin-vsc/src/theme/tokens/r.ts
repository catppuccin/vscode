import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "R function calls",
      scope: "meta.function-call.r",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "R function call arguments",
      scope: "meta.function-call.arguments.r",
      settings: {
        foreground: palette.text,
      },
    },
  ];
};

export default tokens;
