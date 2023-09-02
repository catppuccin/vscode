import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      scope: [
        "text.html entity.name.tag",
        "source.jsx entity.name.tag",
        "source.tsx entity.name.tag",
        "source.astro entity.name.tag",
      ],
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
      scope: [
        "text.html entity.other.attribute-name",
        "source.astro entity.other.attribute-name",
        "source.tsx entity.other.attribute-name",
        "source.jsx entity.other.attribute-name",
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
