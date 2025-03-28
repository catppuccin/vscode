import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      scope: ["markup.heading.typst"],
      settings: {
        foreground: palette.red,
      },
    },
  ];
};

export default tokens;
