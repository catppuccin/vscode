import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Lua docstring keywords",
      scope:
        "comment.line.double-dash.documentation.lua storage.type.annotation.lua",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "Lua docstring variables",
      scope: [
        "comment.line.double-dash.documentation.lua entity.name.variable.lua",
        "comment.line.double-dash.documentation.lua variable.lua",
      ],
      settings: {
        foreground: palette.text,
      },
    },
  ];
};

export default tokens;
