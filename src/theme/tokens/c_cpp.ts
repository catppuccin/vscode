import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "C++ Puct Delimeters",
      scope: "punctuation.terminator.statement.cpp",
      settings: {
        foreground: palette.teal,
        fontStyle: "bold",
      },
    },
    {
      name: "C++ Variables",
      scope: "variable.other.local.cpp",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "C++ Operators",
      scope: [
        "punctuation.separator.scope-resolution.cpp",
        "punctuation.separator.scope-resolution.namespace.alias.cpp",
        "punctuation.separator.scope-resolution.namespace.using.cpp",
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: "bold",
      },
    },
    {
      name: "C++ function",
      scope: "meta.function.c,meta.function.cpp",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "C++ constructor/destructor",
      scope: [
        "entity.name.function.definition.special.constructor",
        "entity.name.function.definition.special.member.destructor",
      ],
      settings: {
        foreground: palette.lavender,
      },
    },
    {
      name: "C++ directive",
      scope: [
        "keyword.control.directive",
        "keyword.other.using.directive",
        "punctuation.definition.directive",
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "C++ ifdef directive",
      scope: [
        "keyword.control.directive.conditional.ifdef.cpp",
        "keyword.control.directive.else.cpp",
        "keyword.control.directive.else.cpp punctuation.definition.directive.cpp",
        "keyword.control.directive.endif.cpp",
        "keyword.control.directive.conditional.ifdef.cpp punctuation.definition.directive.cpp",
        "keyword.control.directive.endif.cpp punctuation.definition.directive.cpp",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "C++ misc",
      scope: [
        "entity.name.other.preprocessor.macro.predefined.probably",
        "entity.name.scope-resolution.cpp",
      ],
      settings: {
        foreground: palette.rosewater,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "C++ pointer/reference",
      scope: ["storage.modifier.pointer.cpp", "storage.modifier.reference.cpp"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "C++ loop/conditional",
      scope: [
        "keyword.control.for",
        "keyword.control.while",
        "keyword.control.if",
        "keyword.control.else",
        "keyword.control.switch",
        "keyword.control.case",
      ],
      settings: {
        foreground: palette.mauve,
        fontStyle: "bold",
      },
    },
    {
      name: "C++ return",
      scope: "keyword.control.return",
      settings: {
        foreground: palette.pink,
      },
    },
    {
      name: "C++ block",
      scope: [
        "punctuation.section.block.begin.bracket.curly.cpp",
        "punctuation.section.block.end.bracket.curly.cpp",
        "punctuation.terminator.statement.c",
        "punctuation.section.block.begin.bracket.curly.c",
        "punctuation.section.block.end.bracket.curly.c",
        "punctuation.section.parens.begin.bracket.round.c",
        "punctuation.section.parens.end.bracket.round.c",
        "punctuation.section.parameters.begin.bracket.round.c",
        "punctuation.section.parameters.end.bracket.round.c",
      ],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "C++ storage type modifier",
      scope: "storage.type.built-in.primitive.cpp",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "C++/C#",
      scope: [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition",
      ],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "C operators",
      scope: [
        "keyword.operator.c",
        "keyword.operator.increment.c",
        "keyword.operator.decrement.c",
        "keyword.operator.bitwise.shift.c",
        "keyword.operator.cpp",
        "keyword.operator.increment.cpp",
        "keyword.operator.decrement.cpp",
        "keyword.operator.bitwise.shift.cpp",
      ],
      settings: {
        foreground: palette.sky,
        fontStyle: "bold",
      },
    },
    {
      name: "Other punctuation .c",
      scope: ["punctuation.separator.c", "punctuation.separator.cpp"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "C type posix-reserved",
      scope: [
        "support.type.posix-reserved.c",
        "support.type.posix-reserved.cpp",
      ],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "keyword.operator.sizeof.c",
      scope: ["keyword.operator.sizeof.c", "keyword.operator.sizeof.cpp"],
      settings: {
        foreground: palette.red,
      },
    },
  ];
}
