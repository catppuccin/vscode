import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Exported Variable",
      scope: "meta.export variable.other.readwrite.js",
      settings: {
        foreground: palette.maroon,
        fontStyle: "",
      },
    },
    {
      name: "JS/TS constants",
      scope: [
        "source.js variable.other.constant",
        "source.ts variable.other.constant",
      ],
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      scope: "support.type.object.console.js",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "Node constants as keywords (module, etc.)",
      scope: ["support.constant.node", "support.type.object.module.js"],
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "implements as keyword",
      scope: "storage.modifier.implements",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "Builtin types",
      scope: [
        "constant.language.null.js",
        "constant.language.null.ts",
        "constant.language.undefined.js",
        "constant.language.undefined.ts",
        "support.type.builtin.ts",
      ],
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      scope: "variable.parameter.generic",
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "Arrow functions",
      scope: [
        "keyword.declaration.function.arrow.js",
        "storage.type.function.arrow.ts",
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "Decorator punctuations (decorators inherit from blue functions, instead of styleguide peach)",
      scope: "punctuation.decorator.ts",
      settings: {
        foreground: palette.blue,
        fontStyle: "italic",
      },
    },
    {
      name: "of/ keyof / typeof as keywords",
      scope: [
        "keyword.operator.expression.keyof.ts",
        "keyword.operator.expression.typeof.js",
        "keyword.operator.expression.typeof.ts",
        "keyword.operator.expression.of.ts",
        "keyword.operator.expression.of.js",
      ],
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
