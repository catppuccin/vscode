import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "C# Interpolated Strings",
      scope: "meta.interpolation.cs",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "C# xml-style docs",
      scope: "comment.block.documentation.cs",
      settings: {
        foreground: palette.text,
      },
    },
  ];
};

export default tokens;
