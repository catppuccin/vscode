import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "C# Interpolated Strings",
      scope: "meta.interpolation.cs",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
