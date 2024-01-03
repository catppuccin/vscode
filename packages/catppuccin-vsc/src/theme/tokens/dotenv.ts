import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "dotenv left-hand side assignments",
      scope: ["variable.other.env"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "dotenv reference to existing env variable",
      scope: ["string.quoted variable.other.env"],
      settings: {
        foreground: palette.text,
      },
    },
  ];
};

export default tokens;
