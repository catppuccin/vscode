import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Python argument functions reset to text, otherwise they inherit blue from function-call",
      scope: [
        "support.variable.magic.python",
        "meta.function-call.arguments.python",
      ],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Python double underscore functions",
      scope: ["support.function.magic.python"],
      settings: {
        foreground: palette.sky,
        fontStyle: "italic",
      },
    },
    {
      name: "Python `self` keyword",
      scope: [
        "variable.parameter.function.language.special.self.python",
        "variable.language.special.self.python",
      ],
      settings: {
        foreground: palette.red,
        fontStyle: "italic",
      },
    },
    {
      name: "python keyword flow/logical (for ... in)",
      scope: ["keyword.control.flow.python", "keyword.operator.logical.python"],
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "python storage type",
      scope: "storage.type.function.python",
      settings: {
        foreground: palette.mauve,
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
      name: "python function calls",
      scope: ["meta.function-call.python"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "python function decorators",
      scope: [
        "entity.name.function.decorator.python",
        "punctuation.definition.decorator.python",
      ],
      settings: {
        foreground: palette.peach,
        fontStyle: "italic",
      },
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: palette.pink,
      },
    },
    {
      name: "Python exception & builtins such as exit()",
      scope: [
        "support.type.exception.python",
        "support.function.builtin.python",
      ],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "entity.name.type",
      scope: ["support.type.python"],
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "python constants (True/False)",
      scope: "constant.language.python",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Arguments accessed later in the function body",
      scope: ["meta.indexed-name.python", "meta.item-access.python"],
      settings: {
        foreground: palette.maroon,
        fontStyle: "italic",
      },
    },
    {
      name: "Python f-strings/binary/unicode storage types",
      scope: "storage.type.string.python",
      settings: {
        foreground: palette.green,
        fontStyle: "italic",
      },
    },
    {
      name: "Python type hints",
      scope: "meta.function.parameters.python",
      settings: {
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
