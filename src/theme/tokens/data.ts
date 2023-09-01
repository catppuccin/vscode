import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "JSON/YAML keys",
      scope: [
        "entity.name.tag.yaml",
        "punctuation.support.type.property-name",
        "support.type.property-name.json",
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
  ];
};

export default tokens;
