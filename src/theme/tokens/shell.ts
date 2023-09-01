import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Shell shebang",
      scope: [
        "comment.line.shebang",
        "comment.line.shebang punctuation.definition.comment",
        "comment.line.shebang",
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: "italic",
      },
    },
    {
      name: "Shell shebang command",
      scope: "comment.line.shebang constant.language",
      settings: {
        foreground: palette.teal,
        fontStyle: "italic",
      },
    },
    {
      name: "Shell interpolated command",
      scope: [
        "meta.function-call.arguments.shell punctuation.definition.variable.shell",
        "meta.function-call.arguments.shell punctuation.section.interpolation",
        "meta.function-call.arguments.shell punctuation.definition.variable.shell",
        "meta.function-call.arguments.shell punctuation.section.interpolation",
      ],
      settings: {
        foreground: palette.red,
        fontStyle: "",
      },
    },
    {
      name: "Shell interpolated command variable",
      scope:
        "meta.string meta.interpolation.parameter.shell variable.other.readwrite",
      settings: {
        foreground: palette.peach,
        fontStyle: "italic",
      },
    },
    {
      scope: "source.shell punctuation.section.interpolation",
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "Shell EOF",
      scope: "entity.name.tag.heredoc.shell",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
