import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Annotations",
      scope: ["punctuation.definition.annotation", "storage.type.annotation"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Java enums",
      scope: "constant.other.enum.java",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Java imports",
      scope: "storage.modifier.import.java",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Javadoc",
      scope:
        "comment.block.javadoc.java keyword.other.documentation.javadoc.java",
      settings: { fontStyle: "" },
    },
  ];
};

export default tokens;
