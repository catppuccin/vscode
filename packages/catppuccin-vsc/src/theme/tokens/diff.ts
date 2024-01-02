import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Markup Diff",
      scope: "markup.changed.diff",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Diff",
      scope: [
        "meta.diff.header.from-file",
        "meta.diff.header.to-file",
        "punctuation.definition.from-file.diff",
        "punctuation.definition.to-file.diff",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Diff Inserted",
      scope: "markup.inserted.diff",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Diff Deleted",
      scope: "markup.deleted.diff",
      settings: {
        foreground: palette.red,
      },
    },
  ];
};

export default tokens;
