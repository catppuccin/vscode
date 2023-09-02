import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "JSON/YAML keys, other left-hand assignments",
      scope: [
        "source.ini keyword.other.definition",
        "source.json punctuation.support.type.property-name",
        "source.json support.type.property-name.json",
        "source.toml punctuation.support.type.property-name",
        "source.toml support.type.property-name",
        "source.yaml entity.name.tag",
        "source.yaml punctuation.support.type.property-name",
        "source.yaml support.type.property-name",
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
        fontStyle: "",
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
        fontStyle: "",
      },
    },
    {
      name: "YAML triple dashes",
      scope: "entity.other.document.begin.yaml",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
