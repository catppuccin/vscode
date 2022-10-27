import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "Reset JavaScript string interpolation expression",
      scope: ["meta.template.expression"],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Import module JS",
      scope: ["keyword.operator.module"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "js Flowtype",
      scope: ["support.type.type.flowtype"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "js Flow",
      scope: ["support.type.primitive"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "js class prop",
      scope: ["meta.property.object"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "js func parameter",
      scope: ["variable.parameter.function.js"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "js template literals begin",
      scope: ["keyword.other.template.begin"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "js template literals end",
      scope: ["keyword.other.template.end"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "js template literals variable braces begin",
      scope: ["keyword.other.substitution.begin"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "js template literals variable braces end",
      scope: ["keyword.other.substitution.end"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "js/ts punctuation separator key-value",
      scope: "punctuation.separator.key-value",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "js/ts import keyword",
      scope: "keyword.operator.expression.import",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "math js/ts",
      scope: "support.constant.math",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "math property js/ts",
      scope: "support.constant.property.math",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "js/ts variable.other.constant",
      scope: "variable.other.constant",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "js/ts module",
      scope: [
        "support.module.node",
        "support.type.object.module",
        "support.module.node",
      ],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "js variable readwrite",
      scope: [
        "variable.other.readwrite",
        "meta.object-literal.key",
        "support.variable.property",
        "support.variable.object.process",
        "support.variable.object.node",
      ],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "js/ts json",
      scope: "support.constant.json",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "js/ts Keyword",
      scope: [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "js/ts console",
      scope: "support.type.object.console",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "js/ts support.variable.property.process",
      scope: "support.variable.property.process",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "js console function",
      scope: "entity.name.function,support.function.console",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "js dom",
      scope: "support.type.object.dom",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "js dom variable",
      scope: ["support.variable.dom", "support.variable.property.dom"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "js/ts italic",
      scope: [
        "entity.other.attribute-name.js",
        "entity.other.attribute-name.ts",
        "entity.other.attribute-name.jsx",
        "entity.other.attribute-name.tsx",
        "variable.parameter",
        "variable.language.super",
      ],
      settings: {
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "Source Js Keyword Operator Delete, In, Of, Instanceof, New, Typeof, Void",
      scope: [
        "keyword.operator.expression.delete",
        "keyword.operator.expression.in",
        "keyword.operator.expression.of",
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.expression.typeof",
        "keyword.operator.expression.void",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "parameter function js/ts",
      scope: "function.parameter",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Storage JS TS",
      scope: "token.storage",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "ts primitive/builtin types",
      scope: [
        "support.type.primitive.ts",
        "support.type.builtin.ts",
        "support.type.primitive.tsx",
        "support.type.builtin.tsx",
      ],
      settings: {
        foreground: palette.peach,
      },
    },
  ];
}
