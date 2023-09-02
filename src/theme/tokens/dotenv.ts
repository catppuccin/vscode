import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "dotenv left-hand side assignments",
      scope: ["source.env variable.other.env"],
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "dotenv reference to existing env variable",
      scope: ["source.env string.quoted variable.other.env"],
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
