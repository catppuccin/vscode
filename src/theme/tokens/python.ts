import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "support.variable.magic.python",
      scope: "support.variable.magic.python",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "punctuation.separator.parameters.python",
      scope: [
        "punctuation.separator.period.python",
        "punctuation.separator.element.python",
        "punctuation.parenthesis.begin.python",
        "punctuation.parenthesis.end.python",
      ],
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "variable.parameter.function.language.special.self.python",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "python keyword flow",
      scope: "keyword.control.flow.python",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "python storage type",
      scope: "storage.type.function.python",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "python function support",
      scope: [
        "support.token.decorator.python",
        "meta.function.decorator.identifier.python",
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: "",
      },
    },
    {
      name: "python function decorator @",
      scope: "meta.function.decorator.python",
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "Python multi string",
      scope: [
        "source.python string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
        "source.python string.quoted.docstring.multi.python punctuation.definition.string.end.python",
        "source.python string.quoted.multi.python punctuation.definition.string.begin.python",
        "source.python string.quoted.multi.python punctuation.definition.string.end.python",
      ],
      settings: {
        foreground: palette.green,
        fontStyle: "italic",
      },
    },
    {
      name: "python type",
      scope: "support.type.python",
      settings: {
        foreground: palette.sky,
        fontStyle: "",
      },
    },
    {
      name: "python block",
      scope: [
        "punctuation.definition.arguments.begin.python",
        "punctuation.definition.arguments.end.python",
        "punctuation.separator.arguments.python",
        "punctuation.definition.list.begin.python",
        "punctuation.definition.list.end.python",
      ],
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      name: "python exception",
      scope: "support.type.exception.python",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "entity.name.type",
      scope: ["entity.name.type", "support.type.python"],
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
