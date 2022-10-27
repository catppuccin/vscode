import { ThemeContext } from "../types";
import tokens from "./tokens";

export const getTokenColors = (context: ThemeContext) => {
  const { palette, options } = context;

  return [
    {
      name: "All variable",
      scope: ["variable.language", "variable.other"],
      settings: {
        foreground: palette.flamingo,
      },
    },
    {
      name: "All function",
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: palette.blue,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "All parameter",
      scope: [
        "variable.parameter.function",
        "variable.parameter.function-call",
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "All numeric",
      scope: ["constant.numeric.decimal", "constant.numeric.integer"],
      settings: {
        foreground: palette.peach,
        fontStyle: options.boldKeywords ? "bold" : "",
      },
    },
    {
      name: "All types",
      scope: "entity.name.type",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "All conditionals",
      scope: [
        "keyword.control",
        "keyword.control.for",
        "keyword.control.while",
        "keyword.control.if",
        "keyword.control.else",
        "keyword.control.switch",
        "keyword.control.case",
      ],
      settings: {
        foreground: palette.red,
        fontStyle: options.boldKeywords ? "bold" : "",
      },
    },
    {
      name: "All punctuation brackets",
      scope: [
        "punctuation.brackets",
        "punctuation.section",
        "punctuation.definition",
      ],
      settings: {
        foreground: palette.overlay1,
      },
    },
    {
      name: "All punctuation delimiters",
      scope: "punctuation.semi",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "All namespace",
      scope: "entity.name.namespace",
      settings: {
        foreground: palette.rosewater,
      },
    },
    {
      name: "All operators",
      scope: [
        "keyword.operator.comparison",
        "keyword.operator.assignment",
        "keyword.operator.arrow.skinny",
        "keyword.operator.math",
        "keyword.operator.key-value",
        "keyword.operator.misc",
        "keyword.operator.namespace",
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : "",
      },
    },
    {
      name: "All built-in constants",
      scope: "constant.language",
      settings: {
        foreground: palette.lavender,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "All constants",
      scope: "constant.other",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "unison punctuation",
      scope: [
        "punctuation.definition.delayed.unison",
        "punctuation.definition.list.begin.unison",
        "punctuation.definition.list.end.unison",
        "punctuation.definition.ability.begin.unison",
        "punctuation.definition.ability.end.unison",
        "punctuation.operator.assignment.as.unison",
        "punctuation.separator.pipe.unison",
        "punctuation.separator.delimiter.unison",
        "punctuation.definition.hash.unison",
      ],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "haskell variable generic-type",
      scope: "variable.other.generic-type.haskell",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "haskell storage type",
      scope: "storage.type.haskell",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "support.constant.edge",
      scope: "support.constant.edge",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "regexp constant character-class",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "regexp operator.quantifier",
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "punctuation.definition",
      scope:
        "punctuation.definition.string.begin,punctuation.definition.string.end",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Comment Markup Link",
      scope: "comment markup.link",
      settings: {
        foreground: palette.overlay0,
      },
    },
    {
      name: "markup diff",
      scope: "markup.changed.diff",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "diff",
      scope: [
        "meta.diff.header.from-file",
        "meta.diff.header.to-file",
        "punctuation.definition.from-file.diff",
        "punctuation.definition.to-file.diff",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "inserted.diff",
      scope: "markup.inserted.diff",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "deleted.diff",
      scope: "markup.deleted.diff",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Quote multi",
      scope: [
        "string.quoted.docstring.multi",
        "string.quoted.multi",
        "markup.fenced_code.block",
      ],
      settings: {
        foreground: palette.green,
        fontStyle: options.italicComments ? "italic" : "",
      },
    },
    {
      name: "operator logical",
      scope: ["keyword.operator.logical", "keyword.operator.ternary"],
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : "",
      },
    },
    {
      name: "operator bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "operator channel",
      scope: "keyword.operator.channel",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "support.constant.property-value.scss",
      scope: [
        "support.constant.property-value.scss",
        "support.constant.property-value.css",
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "CSS/SCSS/LESS Operators",
      scope: [
        "keyword.operator.css",
        "keyword.operator.scss",
        "keyword.operator.less",
      ],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "css color standard name",
      scope: [
        "support.constant.color.w3c-standard-color-name.css",
        "support.constant.color.w3c-standard-color-name.scss",
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "css comma",
      scope: "punctuation.separator.list.comma.css",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "css attribute-name.id",
      scope: "support.constant.color.w3c-standard-color-name.css",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "css property-name",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "entity.name.type.module",
      scope: "entity.name.type.module",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "operator",
      scope: "keyword.operator.delete",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "keyword.operator",
      scope: [
        "keyword.operator.arithmetic",
        "keyword.operator.comparison",
        "keyword.operator.decrement",
        "keyword.operator.increment",
        "keyword.operator.relational",
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : "",
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation.separator.delimiter",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: palette.sky,
        fontStyle: options.boldKeywords ? "bold" : "",
      },
    },
    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Language variables",
      scope: "variable.language",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Packages",
      scope: "token.package.keyword",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Packages",
      scope: "token.package",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Functions",
      scope: [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function",
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "Classes",
      scope: "entity.name.type.namespace",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Classes",
      scope: "support.class, entity.name.type.class",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Class name",
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts",
      ],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Type Name",
      scope: "entity.name.type",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Keyword Control",
      scope: "keyword.control",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Control Elements",
      scope: "control.elements, keyword.operator.less",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Methods",
      scope: "keyword.other.special-method",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Support",
      scope: "support.function",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Support type",
      scope: "support.type.property-name",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Support type",
      scope: "support.constant.property-value",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Support type",
      scope: "support.constant.font-name",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Meta tag",
      scope: "meta.tag",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Constant other symbol",
      scope: "constant.other.symbol",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Integers",
      scope: "constant.numeric",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Constants",
      scope: "punctuation.definition.constant",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Tags",
      scope: "entity.name.tag",
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Attribute IDs",
      scope: "entity.other.attribute-name.id",
      settings: {
        fontStyle: "",
        foreground: palette.blue,
      },
    },
    {
      name: "Attribute class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        fontStyle: "",
        foreground: palette.yellow,
      },
    },
    {
      name: "SCSS variables",
      scope: "variable.scss",
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Headings",
      scope: "markup.heading",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Headings",
      scope:
        "markup.heading punctuation.definition.heading, entity.name.section",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Bold",
      scope: "markup.bold,todo.bold",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Bold",
      scope: "punctuation.definition.bold",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "markup Italic",
      scope: "markup.italic, punctuation.definition.italic, todo.emphasis",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "emphasis md",
      scope: "emphasis md",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Escape Characters",
      scope: "constant.character.escape",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded, variable.interpolation",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Embedded",
      scope:
        "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "illegal, deprecated",
      scope: "invalid.illegal, invalid.deprecated",
      settings: {
        foreground: palette.overlay0,
        fontStyle: "strikethrough",
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal.bad-ampersand.html",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Broken",
      scope: "invalid.broken",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Unimplemented",
      scope: "invalid.unimplemented",
      settings: {
        foreground: palette.subtext0,
      },
    },
    {
      name: "brace function",
      scope: "function.brace",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "rgb-value",
      scope: "rgb-value",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "rgb value",
      scope: "inline-color-decoration rgb-value",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "rgb value less",
      scope: "less rgb-value",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "sass selector",
      scope: "selector.sass",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "block scope",
      scope: "block.scope.end,block.scope.begin",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "cs storage type",
      scope: "storage.type.cs",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "cs local variable",
      scope: "entity.name.variable.local.cs",
      settings: {
        foreground: palette.text,
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: palette.red,
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "elm prelude",
      scope: ["support.type.prelude.elm"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "elm constant",
      scope: ["support.constant.elm"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "template literal",
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "html/pug (jade) escaped characters and entities",
      scope: ["constant.character.entity"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Clojure globals",
      scope: ["entity.global.clojure"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Clojure symbols",
      scope: ["meta.symbol.clojure"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Clojure constants",
      scope: ["constant.keyword.clojure"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "CoffeeScript Function Argument",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Ini Default Text",
      scope: ["source.ini"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Makefile prerequisities",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Makefile text colour",
      scope: ["source.makefile"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "HLSL Semantic",
      scope: ["support.variable.semantic.hlsl"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "HLSL Types",
      scope: [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "SQL Variables",
      scope: ["text.variable", "text.bracketed"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "types",
      scope: ["support.type.swift", "support.type.vb.asp"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "heading 1, keyword",
      scope: ["entity.name.function.xi"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "heading 2, callable",
      scope: ["entity.name.class.xi"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "heading 3, property",
      scope: ["constant.character.character-class.regexp.xi"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "heading 4, type, class, interface",
      scope: ["constant.regexp.xi"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "heading 5, enums, preprocessor, constant, decorator",
      scope: ["keyword.control.xi"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "heading 6, number",
      scope: ["invalid.xi"],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "link",
      scope: ["constant.character.xi"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "accent",
      scope: ["accent.xi"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "wikiword",
      scope: ["wikiword.xi"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "language operators like '+', '-' etc",
      scope: ["constant.other.color.rgb-value.xi"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "elements to dim",
      scope: ["punctuation.definition.tag.xi"],
      settings: {
        foreground: palette.overlay0,
      },
    },
    {
      name: "meta.brace.square",
      scope: [" meta.brace.square"],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Comments",
      scope: "comment, punctuation.definition.comment",
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
        foreground: palette.overlay0,
      },
    },
    {
      name: "punctuation.definition.block.sequence.item.yaml",
      scope: "punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: palette.text,
      },
    },
    {
      scope: ["constant.language.symbol.elixir"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "comment",
      scope: "comment.line.double-slash,comment.block.documentation",
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
      },
    },
    {
      name: "markup.italic.markdown",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: options.italicComments ? "italic" : "",
      },
    },
    {
      name: "invalid.deprecated.line-too-long.git-commit",
      scope: "invalid.deprecated.line-too-long.git-commit",
      settings: {
        foreground: palette.yellow,
        fontStyle: "underline",
      },
    },
    ...tokens(palette, options),
  ];
};
