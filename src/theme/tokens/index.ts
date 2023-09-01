import type { ThemeContext } from "../../types";

import cpp from "./cpp";
import data from "./data";
import golang from "./golang";
import html from "./html";
import javascript from "./javascript";
import python from "./python";
import rust from "./rust";
import shell from "./shell";

export default (context: ThemeContext) => {
  const { options, palette } = context;

  return [
    {
      scope: ["source", "variable.other.readwrite"],
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "Parentheses, Brackets, Braces",
      scope: "punctuation",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: palette.overlay0,
        fontStyle: options.italicComments ? "italic" : "",
      },
    },
    {
      scope: ["string", "punctuation.definition.string"],
      settings: {
        foreground: palette.green,
        fontStyle: "",
      },
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      scope: "constant.numeric",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      scope: ["variable.other.constant", "entity.name.constant"],
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      scope: "constant.language.boolean",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.operator.word",
        "variable.language.this",
        "support.type.primitive",
        "storage.type",
        "storage.modifier",
      ],
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      scope: "entity.name.tag.documentation",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "Punctuation",
      scope: [
        "keyword.operator",
        "punctuation.accessor",
        "punctuation.definition.generic",
        "meta.function.closure punctuation.section.parameters",
        "punctuation.definition.tag",
        "punctuation.separator.key-value",
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      scope: [
        "variable.function",
        "meta.function-call.method",
        "entity.name.function.definition",
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: "italic",
      },
    },
    {
      name: "Classes",
      scope: [
        "entity.name.class",
        "entity.other.inherited-class",
        "support.class",
        "meta.function-call.constructor",
        "entity.name.struct",
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "Enum",
      scope: "entity.name.enum",
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "Enum member",
      scope: [
        "meta.enum variable.other.readwrite",
        "variable.other.enummember",
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "Object properties",
      scope: "meta.property.object",
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "Types",
      scope: [
        "meta.type",
        "meta.type-alias",
        "support.type",
        "entity.name.type",
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "Decorators",
      scope: [
        "meta.annotation variable.function",
        "meta.annotation variable.annotation.function",
        "meta.annotation punctuation.definition.annotation",
        "meta.decorator",
        "punctuation.decorator",
      ],
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      scope: "variable.parameter",
      settings: {
        foreground: palette.maroon,
        fontStyle: "italic",
      },
    },
    {
      name: "Built-ins",
      scope: ["constant.language", "support.function.builtin"],
      settings: {
        foreground: palette.red,
        fontStyle: "",
      },
    },
    {
      scope: "entity.other.attribute-name.documentation",
      settings: {
        foreground: palette.red,
        fontStyle: "",
      },
    },
    {
      name: "Illegal / Invalid",
      scope: ["invalid.illegal", "invalid.deprecated"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Preprocessor directives",
      scope: ["keyword.control.directive", "punctuation.definition.directive"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "Type parameters",
      scope: "punctuation.definition.typeparameters",
      settings: {
        foreground: palette.sky,
        fontStyle: "",
      },
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },

    // per-language tokens
    ...[cpp, data, golang, html, javascript, python, rust, shell].flatMap(
      (el) => el(context),
    ),
  ];
};
