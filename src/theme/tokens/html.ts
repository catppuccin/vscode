import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      scope: "text.html",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      scope: "text.html entity.name.tag",
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      scope: [
        "text.html constant.character.entity",
        "text.html constant.character.entity punctuation",
      ],
      settings: {
        foreground: palette.red,
        fontStyle: "",
      },
    },
    {
      scope: "text.html entity.other.attribute-name",
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
