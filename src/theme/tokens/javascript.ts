import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Exported Variable",
      scope: "meta.export variable.other.readwrite.js",
      settings: {
        foreground: palette.maroon,
      },
    },
    {
      name: "JS/TS constants & properties",
      scope: [
        "variable.other.constant.js",
        "variable.other.constant.ts",
        "variable.other.property.js",
        "variable.other.property.ts",
      ],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "JSDoc",
      scope: [
        "variable.other.jsdoc",
        "comment.block.documentation variable.other",
      ],
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "JSDoc keywords",
      scope: "storage.type.class.jsdoc",
      settings: {
        fontStyle: "",
      },
    },
    {
      scope: "support.type.object.console.js",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Node constants as keywords (module, etc.)",
      scope: ["support.constant.node", "support.type.object.module.js"],
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "implements as keyword",
      scope: "storage.modifier.implements",
      settings: {
        foreground: palette.mauve,
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
      },
    },
    {
      name: "Try/Catch as bold",
      scope: [
        "keyword.control.trycatch.js",
        "keyword.control.trycatch.jsx",
        "keyword.control.trycatch.ts",
        "keyword.control.trycatch.tsx",
      ],
      settings: {
        fontStyle: "bold",
      },
    },
  ];
};

export default tokens;
