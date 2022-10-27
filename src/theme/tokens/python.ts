import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "support.variable.magic.python",
      scope: "support.variable.magic.python",
      settings: {
        foreground: palette.text,
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
      },
    },
    {
      name: "variable.parameter.function.language.special.self.python",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "python keyword import",
      scope: "keyword.control.import.python",
      settings: {
        foreground: palette.teal,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "python keyword flow",
      scope: "keyword.control.flow.python",
      settings: {
        foreground: palette.mauve,
        fontStyle: "bold",
      },
    },
    {
      name: "python storage type",
      scope: "storage.type.function.python",
      settings: {
        foreground: palette.maroon,
        fontStyle: options.italicKeywords ? "italic" : "",
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
      },
    },
    {
      name: "python function decorator @",
      scope: "meta.function.decorator.python",
      settings: {
        foreground: palette.blue,
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
        fontStyle: options.italicComments ? "italic" : "",
      },
    },
    {
      name: "python type",
      scope: "support.type.python",
      settings: {
        foreground: palette.sky,
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
      },
    },
    {
      name: "python function-call.generic",
      scope: "meta.function-call.generic.python",
      settings: {
        foreground: palette.blue,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: palette.yellow,
      },
    },
  ];
}
