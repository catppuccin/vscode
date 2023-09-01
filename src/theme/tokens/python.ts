import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Python magic (double underline prefix/suffix)",
      scope: ["support.function.magic.python", "support.variable.magic.python"],
      settings: {
        foreground: palette.teal,
        fontStyle: "italic",
      },
    },
    {
      name: "Python type annotations",
      scope: [
        "meta.function.parameters.annotation.python",
        "meta.variable.annotation.python",
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "Python f-string",
      scope: "storage.type.string.python",
      settings: {
        foreground: palette.green,
        fontStyle: "",
      },
    },
    {
      name: "Python f-string braces",
      scope:
        "meta.string.interpolated.python punctuation.section.interpolation",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      name: "Python f-string format specifier",
      scope:
        "meta.string.interpolated.python storage.modifier.conversion.python",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      scope: "support.function",
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
