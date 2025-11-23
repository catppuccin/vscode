import type { TextmateColors, ThemeContext } from "@/types";

import cpp from "./cpp";
import cs from "./cs";
import css from "./css";
import data from "./data";
import diff from "./diff";
import dotenv from "./dotenv";
import gdscript from "./gdscript";
import golang from "./golang";
import graphql from "./graphql";
import haskell from "./haskell";
import html from "./html";
import java from "./java";
import javascript from "./javascript";
import julia from "./julia";
import latex from "./latex";
import liquid from "./liquid";
import lua from "./lua";
import markdown from "./markdown";
import nix from "./nix";
import php from "./php";
import python from "./python";
import r from "./r";
import regex from "./regex";
import rust from "./rust";
import shell from "./shell";
import typst from "./typst";

export default function tokens(context: ThemeContext): TextmateColors {
  const { options, palette } = context;

  return [
    {
      name: "Basic text & variable names (incl. leading punctuation)",
      scope: [
        "text",
        "source",
        "variable.other.readwrite",
        "punctuation.definition.variable",
      ],
      settings: {
        foreground: palette.text,
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
        foreground: palette.overlay2,
        fontStyle: options.italicComments ? "italic" : "",
      },
    },
    {
      scope: ["string", "punctuation.definition.string"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: palette.pink,
      },
    },
    {
      name: "Booleans, constants, numbers",
      scope: [
        "constant.numeric",
        "variable.other.constant",
        "entity.name.constant",
        "constant.language.boolean",
        "constant.language.false",
        "constant.language.true",
        "keyword.other.unit.user-defined",
        "keyword.other.unit.suffix.floating-point",
      ],
      settings: {
        foreground: palette.peach,
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
      },
    },
    {
      scope: [
        "entity.name.function",
        "meta.function-call.method",
        "support.function",
        "support.function.misc",
        "variable.function",
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
      },
    },
    {
      name: "Object properties",
      scope: "meta.property.object",
      settings: {
        foreground: palette.teal,
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
      },
    },
    {
      scope: "entity.other.attribute-name.documentation",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Preprocessor directives",
      scope: ["keyword.control.directive", "punctuation.definition.directive"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Type parameters",
      scope: "punctuation.definition.typeparameters",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Property names (left hand assignments in json/yaml/css/less)",
      scope: [
        "support.type.property-name.css",
        "support.type.property-name.less",
      ],
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
      },
    },
    {
      name: "Struct/Instance fields",
      scope: ["variable.other.property"],
      settings: {
        foreground: palette.lavender,
      },
    },
    {
      name: "Object properties",
      scope: "variable.object.property",
      settings: {
        foreground: palette.lavender,
      },
    },
    {
      name: "String template interpolation",
      scope: ["string.template variable", "string variable"],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "`new` as bold",
      scope: "keyword.operator.new",
      settings: {
        fontStyle: "bold",
      },
    },

    // per-language tokens
    ...[
      cpp,
      cs,
      css,
      data,
      diff,
      dotenv,
      gdscript,
      golang,
      graphql,
      haskell,
      html,
      java,
      javascript,
      julia,
      latex,
      liquid,
      lua,
      markdown,
      nix,
      php,
      python,
      r,
      regex,
      rust,
      shell,
      typst,
    ].flatMap((element) => element(context)),
  ];
}
