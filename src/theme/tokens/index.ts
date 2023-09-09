import type { ThemeContext } from "../../types";

import cpp from "./cpp";
import css from "./css";
import data from "./data";
import dotenv from "./dotenv";
import golang from "./golang";
import graphql from "./graphql";
import html from "./html";
import java from "./java";
import javascript from "./javascript";
import julia from "./julia";
import latex from "./latex";
import markdown from "./markdown";
import php from "./php";
import python from "./python";
import ruby from "./ruby";
import rust from "./rust";
import shell from "./shell";

export default (context: ThemeContext) => {
  const { options, palette } = context;

  return [
    {
      name: "Basic text & variable names (incl. leading punctuation)",
      scope: [
        "source",
        "variable.other.readwrite",
        "punctuation.definition.variable",
      ],
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "Parentheses, Brackets, Braces",
      scope: "punctuation",
      settings: {
        foreground: palette.overlay2,
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
        "keyword.operator.new",
        "variable.language.super",
        "support.type.primitive",
        "storage.type",
        "storage.modifier",
        // include punctuation like $ and @ if they're part of the keyword
        "punctuation.definition.keyword",
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
        "entity.name.function",
        "support.function.misc",
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
      scope: ["variable.parameter", "meta.function.parameters"],
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
    {
      name: "Property names (left hand assignments in json/yaml/css)",
      scope: "support.type.property-name.css",
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "This/Self keyword",
      scope: [
        "variable.language.this",
        // leading punctuation like $this in PHP
        "variable.language.this punctuation.definition.variable",
      ],
      settings: {
        foreground: palette.red,
        fontStyle: "",
      },
    },
    {
      name: "Object properties",
      scope: "variable.object.property",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },

    // per-language tokens
    ...[
      cpp,
      css,
      data,
      dotenv,
      golang,
      graphql,
      html,
      java,
      javascript,
      julia,
      latex,
      markdown,
      php,
      python,
      ruby,
      rust,
      shell,
    ].flatMap((el) => el(context)),
  ];
};
