import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "JSON/YAML keys",
      scope: [
        "entity.name.tag.yaml",
        "punctuation.support.type.property-name",
        "support.type.property-name",
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "JSON/YAML constants",
      scope: ["constant.language.json", "constant.language.yaml"],
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "YAML anchors",
      scope: ["entity.name.type.anchor.yaml", "variable.other.alias.yaml"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "YAML anchor puctuation",
      scope: [
        "punctuation.definition.anchor.yaml",
        "punctuation.definition.alias.yaml",
      ],
      settings: {
        foreground: palette.pink,
      },
    },
    {
      name: "YAML triple dashes",
      scope: "entity.other.document.begin.yaml",
      settings: {
        foreground: palette.pink,
      },
    },
  ];
};

export default tokens;
