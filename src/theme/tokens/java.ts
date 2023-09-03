import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Annotations",
      scope: ["punctuation.definition.annotation", "storage.type.annotation"],
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "Java enums",
      scope: "constant.other.enum.java",
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "Java imports",
      scope: "storage.modifier.import.java",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
