import { variants } from "@catppuccin/palette";
import { CatppuccinFlavour, CatppuccinPalette, ThemeOptions } from "../types";

const flavours = Object.keys(variants) as CatppuccinFlavour[];
const colours = Object.keys(variants.mocha);

export const compileTheme = (
    flavour: CatppuccinFlavour = "mocha",
    options: ThemeOptions = {
        accent: "mauve",
        italicComments: true,
        italicKeywords: true,
    }
) => {
    const palette: CatppuccinPalette = {};
    colours.forEach((colour) => (palette[colour] = variants.mocha[colour].hex));
    const isLatte = flavour == "latte";

    const theme = {
        name: `Catppuccin ${
            flavour.charAt(0).toUpperCase() + flavour.substring(1)
        }`,
        type: isLatte ? "light" : "dark",
        semanticHighlighting: true,
        semanticTokenColors: {
            enumMember: {
                foreground: palette.sky,
            },
            "variable.constant": {
                foreground: palette.yellow,
            },
            "variable.defaultLibrary": {
                foreground: palette.peach,
            },
        },
        tokenColors: [
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
                    fontStyle: "bold",
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
                    fontStyle: "bold",
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
                name: "All punctuation delimeters",
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
                    fontStyle: "bold",
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
                name: "JSON quoted string",
                scope: "source.json meta.structure.dictionary.json > string.quoted.json",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "JSON punctuation string",
                scope: "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "JSON punct structure",
                scope: [
                    "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
                    "source.json meta.structure.array.json > value.json > string.quoted.json",
                    "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
                    "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
                ],
                settings: {
                    foreground: palette.green,
                },
            },
            {
                name: "JSON property name",
                scope: "support.type.property-name.json.comments",
                settings: {
                    foreground: palette.blue,
                },
            },
            {
                name: "JSON constants",
                scope: "constant.language.json.comments",
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "JSON punctuation",
                scope: [
                    "punctuation.separator.dictionary.pair.json.comments",
                    "punctuation.separator.array.json.comments",
                ],
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "JSON brackets",
                scope: [
                    "punctuation.definition.dictionary.begin.json.comments",
                    "punctuation.definition.dictionary.end.json.comments",
                    "punctuation.definition.array.begin.json.comments",
                    "punctuation.definition.array.end.json.comments",
                ],
                settings: {
                    foreground: palette.overlay2,
                },
            },
            {
                name: "JSON constant language",
                scope: [
                    "source.json meta.structure.dictionary.json > constant.language.json",
                    "source.json meta.structure.array.json > constant.language.json",
                ],
                settings: {
                    foreground: palette.sky,
                },
            },
            {
                name: "JSON property name [VSCODE-CUSTOM]",
                scope: "support.type.property-name.json",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
                scope: "support.type.property-name.json punctuation",
                settings: {
                    foreground: palette.teal,
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
                name: "Rust modifier",
                scope: "storage.modifier.lifetime.rust",
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "Rust types",
                scope: "entity.name.type.rust",
                settings: {
                    foreground: palette.yellow,
                },
            },
            {
                name: "Rust functions std",
                scope: "support.function.std.rust",
                settings: {
                    foreground: palette.blue,
                },
            },
            {
                name: "Rust functions",
                scope: "entity.name.function.rust",
                settings: {
                    foreground: palette.blue,
                    fontStyle: options.italicKeywords ? "italic" : "",
                },
            },
            {
                name: "Rust function keyword",
                scope: "keyword.other.fn.rust",
                settings: {
                    foreground: palette.maroon,
                },
            },
            {
                name: "Rust conditionals",
                scope: "keyword.control.rust",
                settings: {
                    foreground: palette.mauve,
                    fontStyle: options.italicKeywords ? "bold italic" : "",
                },
            },
            {
                name: "Rust punctuation brackets",
                scope: [
                    "punctuation.brackets.curly.rust",
                    "punctuation.brackets.round.rust",
                    "punctuation.brackets.square.rust",
                    "punctuation.brackets.attribute.rust",
                ],
                settings: {
                    foreground: palette.overlay1,
                },
            },
            {
                name: "Rust namespace",
                scope: "entity.name.namespace.rust",
                settings: {
                    foreground: palette.rosewater,
                },
            },
            {
                name: "Rust punctuation delimeters",
                scope: "punctuation.semi.rust",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "Rust operators",
                scope: [
                    "keyword.operator.comparison.rust",
                    "keyword.operator.assignment.equal.rust",
                    "keyword.operator.arrow.skinny.rust",
                    "keyword.operator.math.rust",
                    "keyword.operator.key-value.rust",
                    "keyword.operator.misc.rust",
                ],
                settings: {
                    foreground: palette.sky,
                },
            },
            {
                name: "Rust operator namespaces",
                scope: "keyword.operator.namespace.rust",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "Rust definition attributes",
                scope: [
                    "punctuation.definition.attribute.rust",
                    "keyword.operator.attribute.inner.rust",
                ],
                settings: {
                    foreground: palette.teal,
                    fontStyle: "bold",
                },
            },
            {
                name: "Rust math logic",
                scope: "constant.numeric.decimal.rust",
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "Rust constants",
                scope: "support.constant.core.rust",
                settings: {
                    foreground: palette.yellow,
                },
            },
            {
                name: "Rust entity name",
                scope: "entity.name.lifetime.rust",
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "Rust variable",
                scope: ["variable.language.rust", "variable.other.rust"],
                settings: {
                    foreground: palette.text,
                    fontStyle: options.italicKeywords ? "italic" : "",
                },
            },
            {
                name: "Rust misc operators",
                scope: "keyword.operator.misc.rust",
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "Rust sigil operator",
                scope: "keyword.operator.sigil.rust",
                settings: {
                    foreground: palette.red,
                },
            },

            {
                name: "Lua operators",
                scope: "keyword.operator.lua",
                settings: {
                    foreground: palette.sky,
                    fontStyle: "bold",
                },
            },
            {
                name: "Lua numeric",
                scope: "constant.numeric.integer.lua",
                settings: {
                    foreground: palette.peach,
                    fontStyle: "bold",
                },
            },
            {
                name: "Lua other vars",
                scope: "variable.other.lua",
                settings: {
                    foreground: palette.lavender,
                    fontStyle: options.italicKeywords ? "italic" : "",
                },
            },
            {
                name: "Lua brackets",
                scope: [
                    "punctuation.definition.parameters.end.lua",
                    "punctuation.definition.parameters.begin.lua",
                ],
                settings: {
                    foreground: palette.overlay1,
                },
            },

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
                scope: [
                    "storage.modifier.pointer.cpp",
                    "storage.modifier.reference.cpp",
                ],
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
                scope: "punctuation.definition.string.begin,punctuation.definition.string.end",
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
                    "source.python string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
                    "source.python string.quoted.docstring.multi.python punctuation.definition.string.end.python",
                    "source.python string.quoted.multi.python punctuation.definition.string.begin.python",
                    "source.python string.quoted.multi.python punctuation.definition.string.end.python",
                    "markup.fenced_code.block",
                ],
                settings: {
                    foreground: palette.green,
                    fontStyle: options.italicComments ? "italic" : "",
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
                name: "java type",
                scope: [
                    "storage.type.annotation.java",
                    "storage.type.object.array.java",
                ],
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "java source",
                scope: "source.java",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "java modifier.import",
                scope: [
                    "punctuation.section.block.begin.java",
                    "punctuation.section.block.end.java",
                    "punctuation.definition.method-parameters.begin.java",
                    "punctuation.definition.method-parameters.end.java",
                    "meta.method.identifier.java",
                    "punctuation.section.method.begin.java",
                    "punctuation.section.method.end.java",
                    "punctuation.terminator.java",
                    "punctuation.section.class.begin.java",
                    "punctuation.section.class.end.java",
                    "punctuation.section.inner-class.begin.java",
                    "punctuation.section.inner-class.end.java",
                    "meta.method-call.java",
                    "punctuation.section.class.begin.bracket.curly.java",
                    "punctuation.section.class.end.bracket.curly.java",
                    "punctuation.section.method.begin.bracket.curly.java",
                    "punctuation.section.method.end.bracket.curly.java",
                    "punctuation.separator.period.java",
                    "punctuation.bracket.angle.java",
                    "punctuation.definition.annotation.java",
                    "meta.method.body.java",
                ],
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "java modifier.import",
                scope: "meta.method.java",
                settings: {
                    foreground: palette.blue,
                },
            },
            {
                name: "java modifier.import",
                scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "java instanceof",
                scope: "keyword.operator.instanceof.java",
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "java variable.name",
                scope: "meta.definition.variable.name.java",
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "operator logical",
                scope: ["keyword.operator.logical", "keyword.operator.ternary"],
                settings: {
                    foreground: palette.sky,
                    fontStyle: "bold",
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
                name: "entity.name.type.module",
                scope: "entity.name.type.module",
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
                name: "operator",
                scope: "keyword.operator.delete",
                settings: {
                    foreground: palette.red,
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
                scope: [
                    "support.variable.dom",
                    "support.variable.property.dom",
                ],
                settings: {
                    foreground: palette.teal,
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
                    fontStyle: "bold",
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
                name: "Punctuation",
                scope: "punctuation.separator.delimiter",
                settings: {
                    foreground: palette.text,
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
                scope: [
                    "keyword.operator.sizeof.c",
                    "keyword.operator.sizeof.cpp",
                ],
                settings: {
                    foreground: palette.red,
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
            {
                name: "Operators",
                scope: "keyword.operator",
                settings: {
                    foreground: palette.sky,
                    fontStyle: "bold",
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
                name: "Java Variables",
                scope: "token.variable.parameter.java",
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "Java Imports",
                scope: "import.storage.java",
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
                name: "Class name php",
                scope: "variable.other.class.php",
                settings: {
                    foreground: palette.teal,
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
                name: "Storage JS TS",
                scope: "token.storage",
                settings: {
                    foreground: palette.red,
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
                name: "Java Storage",
                scope: "token.storage.type.java",
                settings: {
                    foreground: palette.peach,
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
                scope: "markup.heading punctuation.definition.heading, entity.name.section",
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
                scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
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
                name: "[VSCODE-CUSTOM] Markdown headings",
                scope: "entity.name.section.markdown",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
                scope: "punctuation.definition.heading.markdown",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "punctuation.definition.list.begin.markdown",
                scope: "punctuation.definition.list.begin.markdown",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown heading setext",
                scope: "markup.heading.setext",
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
                scope: "punctuation.definition.bold.markdown",
                settings: {
                    foreground: palette.yellow,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown Inline Raw",
                scope: "markup.inline.raw.markdown",
                settings: {
                    foreground: palette.green,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown Inline Raw",
                scope: "markup.inline.raw.string.markdown",
                settings: {
                    foreground: palette.green,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
                scope: "punctuation.definition.list.markdown",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
                scope: [
                    "punctuation.definition.string.begin.markdown",
                    "punctuation.definition.string.end.markdown",
                    "punctuation.definition.metadata.markdown",
                ],
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "beginning.punctuation.definition.list.markdown",
                scope: ["beginning.punctuation.definition.list.markdown"],
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
                scope: "punctuation.definition.metadata.markdown",
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
                scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
                scope: "string.other.link.title.markdown,string.other.link.description.markdown",
                settings: {
                    foreground: palette.blue,
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
                scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "illegal",
                scope: "invalid.illegal",
                settings: {
                    foreground: "#ffffff",
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
                    foreground: "#ffffff",
                },
            },
            {
                name: "Deprecated",
                scope: "invalid.deprecated",
                settings: {
                    foreground: "#ffffff",
                },
            },
            {
                name: "Unimplemented",
                scope: "invalid.unimplemented",
                settings: {
                    foreground: "#ffffff",
                },
            },
            {
                name: "laravel blade tag",
                scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "laravel blade @",
                scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "use statement for other classes",
                scope: [
                    "support.other.namespace.use.php",
                    "support.other.namespace.use-as.php",
                    "support.other.namespace.php",
                    "entity.other.alias.php",
                    "meta.interface.php",
                ],
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "error suppression",
                scope: "keyword.operator.error-control.php",
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "php instanceof",
                scope: "keyword.operator.type.php",
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "style double quoted array index normal begin",
                scope: "punctuation.section.array.begin.php",
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "style double quoted array index normal end",
                scope: "punctuation.section.array.end.php",
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "php illegal.non-null-typehinted",
                scope: "invalid.illegal.non-null-typehinted.php",
                settings: {
                    foreground: "#f44747",
                },
            },
            {
                name: "php types",
                scope: [
                    "storage.type.php",
                    "meta.other.type.phpdoc.php",
                    "keyword.other.type.php",
                    "keyword.other.array.phpdoc.php",
                ],
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "php call-function",
                scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
                settings: {
                    foreground: palette.blue,
                },
            },
            {
                name: "php function-resets",
                scope: [
                    "punctuation.definition.parameters.begin.bracket.round.php",
                    "punctuation.definition.parameters.end.bracket.round.php",
                    "punctuation.separator.delimiter.php",
                    "punctuation.section.scope.begin.php",
                    "punctuation.section.scope.end.php",
                    "punctuation.terminator.expression.php",
                    "punctuation.definition.arguments.begin.bracket.round.php",
                    "punctuation.definition.arguments.end.bracket.round.php",
                    "punctuation.definition.storage-type.begin.bracket.round.php",
                    "punctuation.definition.storage-type.end.bracket.round.php",
                    "punctuation.definition.array.begin.bracket.round.php",
                    "punctuation.definition.array.end.bracket.round.php",
                    "punctuation.definition.begin.bracket.round.php",
                    "punctuation.definition.end.bracket.round.php",
                    "punctuation.definition.begin.bracket.curly.php",
                    "punctuation.definition.end.bracket.curly.php",
                    "punctuation.definition.section.switch-block.end.bracket.curly.php",
                    "punctuation.definition.section.switch-block.start.bracket.curly.php",
                    "punctuation.definition.section.switch-block.begin.bracket.curly.php",
                    "punctuation.definition.section.switch-block.end.bracket.curly.php",
                ],
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "support php constants",
                scope: [
                    "support.constant.ext.php",
                    "support.constant.std.php",
                    "support.constant.core.php",
                    "support.constant.parser-token.php",
                ],
                settings: {
                    foreground: palette.yellow,
                },
            },
            {
                name: "php goto",
                scope: "entity.name.goto-label.php,support.other.php",
                settings: {
                    foreground: palette.blue,
                },
            },
            {
                name: "php logical/bitwise operator",
                scope: "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
                settings: {
                    foreground: palette.sky,
                },
            },
            {
                name: "php regexp operator",
                scope: "keyword.operator.regexp.php",
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "php comparison",
                scope: "keyword.operator.comparison.php",
                settings: {
                    foreground: palette.sky,
                },
            },
            {
                name: "php heredoc/nowdoc",
                scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
                settings: {
                    foreground: palette.red,
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
                name: "parameter function js/ts",
                scope: "function.parameter",
                settings: {
                    foreground: palette.text,
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
                name: "parameter function ruby cs",
                scope: ["function.parameter.ruby", "function.parameter.cs"],
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "constant.language.symbol.ruby",
                scope: "constant.language.symbol.ruby",
                settings: {
                    foreground: palette.sky,
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
                    foreground: "#f44747",
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
                name: "go operator",
                scope: [
                    "keyword.operator.arithmetic.go",
                    "keyword.operator.address.go",
                ],
                settings: {
                    foreground: palette.red,
                },
            },
            {
                name: "Go package name",
                scope: ["entity.name.package.go"],
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "Go import statement",
                scope: "keyword.import.go",
                settings: {
                    foreground: palette.blue,
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
                scope: [
                    "meta.arguments.coffee",
                    "variable.parameter.function.coffee",
                ],
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
                name: "Shell definition variables",
                scope: ["punctuation.definition.variable.shell"],
                settings: {
                    foreground: palette.overlay1,
                },
            },
            {
                name: "Shell logical operators",
                scope: ["keyword.operator.logical.shell"],
                settings: {
                    foreground: palette.sky,
                },
            },
            {
                name: "Shell clauses",
                scope: ["meta.scope.case-clause-body.shell"],
                settings: {
                    foreground: palette.text,
                },
            },
            {
                name: "Shell funcs",
                scope: ["meta.scope.group.shell"],
                settings: {
                    foreground: palette.blue,
                },
            },
            {
                name: "Shell interpolated cmds",
                scope: ["string.interpolated.dollar.shell"],
                settings: {
                    foreground: palette.yellow,
                },
            },
            {
                name: "Shell interpolated strings",
                scope: ["string.quoted.single.shell"],
                settings: {
                    foreground: palette.lavender,
                },
            },
            {
                name: "Shell pipe symbol",
                scope: ["keyword.operator.pipe.shell"],
                settings: {
                    foreground: palette.sky,
                },
            },
            {
                name: "Shell group definition",
                scope: ["punctuation.definition.group.shell"],
                settings: {
                    foreground: palette.overlay1,
                },
            },
            {
                name: "Shell conditionals",
                scope: ["keyword.control.shell"],
                settings: {
                    foreground: palette.mauve,
                },
            },
            {
                name: "Shell opeartors and punct delimeters",
                scope: ["keyword.operator.list.shell"],
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "Shell parenthesis",
                scope: ["punctuation.definition.logical-expression.shell"],
                settings: {
                    foreground: palette.overlay1,
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
                name: "Groovy import names",
                scope: ["storage.modifier.import.groovy"],
                settings: {
                    foreground: palette.peach,
                },
            },
            {
                name: "Groovy Methods",
                scope: ["meta.method.groovy"],
                settings: {
                    foreground: palette.blue,
                },
            },
            {
                name: "Groovy Variables",
                scope: ["meta.definition.variable.name.groovy"],
                settings: {
                    foreground: palette.teal,
                },
            },
            {
                name: "Groovy Inheritance",
                scope: ["meta.definition.class.inherited.classes.groovy"],
                settings: {
                    foreground: palette.green,
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
                name: "string",
                scope: ["beginning.punctuation.definition.quote.markdown.xi"],
                settings: {
                    foreground: palette.green,
                },
            },
            {
                name: "comments",
                scope: ["beginning.punctuation.definition.list.markdown.xi"],
                settings: {
                    foreground: palette.overlay0,
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
                    foreground: "#ffffff",
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
                name: "Markdown underscore-style headers",
                scope: [
                    "entity.name.label.cs",
                    "markup.heading.setext.1.markdown",
                    "markup.heading.setext.2.markdown",
                ],
                settings: {
                    foreground: palette.teal,
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
                name: "[VSCODE-CUSTOM] Markdown Quote",
                scope: "markup.quote.markdown",
                settings: {
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
                name: "comment",
                scope: "comment.line.double-slash,comment.block.documentation",
                settings: {
                    fontStyle: options.italicComments ? "italic" : "",
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
                name: "markup.italic.markdown",
                scope: "markup.italic.markdown",
                settings: {
                    fontStyle: options.italicComments ? "italic" : "",
                },
            },
        ],
        colors: {
            foreground: palette.text,
            focusBorder: palette.blue,
            "selection.background": palette.surface2,
            "scrollbar.shadow": palette.base,
            "activityBar.foreground": palette.text,
            "activityBar.background": palette.base,
            "activityBar.inactiveForeground": "#cdd6f45a",
            "activityBarBadge.foreground": palette.base,
            "activityBarBadge.background": palette.blue,
            "sideBar.background": palette.mantle,
            "sideBar.foreground": palette.text,
            "sideBarSectionHeader.background": "#00000000",
            "sideBarSectionHeader.foreground": palette.text,
            "sideBarTitle.foreground": palette.text,
            "list.inactiveSelectionBackground": palette.base,
            "list.inactiveSelectionForeground": palette.text,
            "list.hoverBackground": palette.base,
            "list.hoverForeground": palette.text,
            "list.activeSelectionBackground": palette.surface2,
            "list.activeSelectionForeground": palette.text,
            "tree.indentGuidesStroke": palette.overlay0,
            "list.dropBackground": palette.base,
            "list.highlightForeground": palette.blue,
            "list.focusBackground": palette.surface1,
            "list.focusForeground": palette.text,
            "listFilterWidget.background": palette.surface1,
            "listFilterWidget.outline": "#00000000",
            "listFilterWidget.noMatchesOutline": palette.red,
            "statusBar.foreground": palette.text,
            "statusBar.background": palette.crust,
            "statusBarItem.hoverBackground": "#ffffff1f",
            "statusBar.debuggingBackground": palette.red,
            "statusBar.debuggingForeground": palette.surface1,
            "statusBar.noFolderBackground": palette.mauve,
            "statusBar.noFolderForeground": palette.surface1,
            "statusBarItem.remoteBackground": palette.green,
            "statusBarItem.remoteForeground": palette.surface1,
            "titleBar.activeBackground": palette.base,
            "titleBar.activeForeground": palette.text,
            "titleBar.inactiveBackground": "#1e1e2e91",
            "titleBar.inactiveForeground": "#cdd6f480",
            "titleBar.border": "#00000000",
            "menubar.selectionForeground": palette.text,
            "menubar.selectionBackground": palette.surface1,
            "menu.foreground": palette.text,
            "menu.background": palette.base,
            "menu.selectionForeground": palette.text,
            "menu.selectionBackground": palette.surface2,
            "menu.selectionBorder": "#00000000",
            "menu.separatorBackground": palette.surface2,
            "menu.border": "#00000085",
            "button.background": palette.surface2,
            "button.foreground": palette.text,
            "button.hoverBackground": palette.surface1,
            "button.secondaryForeground": palette.text,
            "button.secondaryBackground": palette.surface1,
            "button.secondaryHoverBackground": palette.base,
            "input.background": palette.surface0,
            "input.border": "#00000000",
            "input.foreground": palette.text,
            "inputOption.activeBackground": "#89b4fa26",
            "inputOption.activeBorder": "#89b4fa00",
            "inputOption.activeForeground": palette.text,
            "input.placeholderForeground": "#cdd6f470",
            "textLink.foreground": palette.blue,
            "editor.background": palette.base,
            "editor.foreground": palette.text,
            "editorLineNumber.foreground": palette.overlay1,
            "editorCursor.foreground": palette.rosewater,
            "editorCursor.background": palette.base,
            "editor.selectionBackground": palette.surface2,
            "editor.inactiveSelectionBackground": "#FFFFFF20",
            "editorWhitespace.foreground": "#9399b218",
            "editor.selectionHighlightBackground": "#9399b25e",
            "editor.selectionHighlightBorder": "#89dceb30",
            "editor.findMatchBackground": palette.surface2,
            "editor.findMatchBorder": "#89b4fa6a",
            "editor.findMatchHighlightBackground": "#fab3875e",
            "editor.findMatchHighlightBorder": "#ffffff00",
            "editor.findRangeHighlightBackground": "#585b7048",
            "editor.findRangeHighlightBorder": "#ffffff00",
            "editor.rangeHighlightBackground": "#89b4fa3c",
            "editor.rangeHighlightBorder": "#ffffff00",
            "editor.hoverHighlightBackground": "#89b4fa3c",
            "editor.wordHighlightStrongBackground": palette.surface2,
            "editor.wordHighlightBackground": "#575757b8",
            "editor.lineHighlightBackground": "#ffffff0A",
            "editor.lineHighlightBorder": palette.base,
            "editorLineNumber.activeForeground": palette.green,
            "editorLink.activeForeground": palette.blue,
            "editorIndentGuide.background": palette.surface1,
            "editorIndentGuide.activeBackground": palette.surface2,
            "editorRuler.foreground": palette.surface2,
            "editorBracketMatch.background": "#9399b214",
            "editorBracketMatch.border": palette.overlay2,
            "editor.foldBackground": "#89b4fa42",
            "editorOverviewRuler.background": palette.mantle,
            "editorOverviewRuler.border": "#FFFFFF0F",
            "editorError.foreground": palette.red,
            "editorError.background": "#B73A3400",
            "editorError.border": "#ffffff00",
            "editorWarning.foreground": palette.yellow,
            "editorWarning.background": "#A9904000",
            "editorWarning.border": "#ffffff00",
            "editorInfo.foreground": palette.blue,
            "editorInfo.background": "#4490BF00",
            "editorInfo.border": "#4490BF00",
            "editorGutter.background": palette.base,
            "editorGutter.modifiedBackground": palette.sky,
            "editorGutter.addedBackground": palette.green,
            "editorGutter.deletedBackground": palette.red,
            "editorGutter.foldingControlForeground": palette.overlay2,
            "editorCodeLens.foreground": palette.overlay1,
            "editorGroup.border": palette.surface2,
            "diffEditor.insertedTextBackground": "#a6e3a118",
            "diffEditor.removedTextBackground": "#f38ba81c",
            "diffEditor.border": palette.surface2,
            "panel.background": palette.base,
            "panel.border": palette.surface2,
            "panelTitle.activeBorder": palette.text,
            "panelTitle.activeForeground": palette.text,
            "panelTitle.inactiveForeground": "#cdd6f4ad",
            "badge.background": palette.surface1,
            "badge.foreground": palette.text,
            "terminal.foreground": palette.text,
            "terminal.selectionBackground": "#585b7034",
            "terminalCursor.background": palette.base,
            "terminalCursor.foreground": palette.rosewater,
            "terminal.border": palette.surface2,
            "terminal.ansiBlack": palette.overlay0,
            "terminal.ansiBlue": palette.blue,
            "terminal.ansiBrightBlack": palette.overlay1,
            "terminal.ansiBrightBlue": palette.blue,
            "terminal.ansiBrightCyan": palette.sky,
            "terminal.ansiBrightGreen": palette.green,
            "terminal.ansiBrightMagenta": palette.pink,
            "terminal.ansiBrightRed": palette.red,
            "terminal.ansiBrightWhite": palette.text,
            "terminal.ansiBrightYellow": palette.yellow,
            "terminal.ansiCyan": palette.sky,
            "terminal.ansiGreen": palette.green,
            "terminal.ansiMagenta": palette.pink,
            "terminal.ansiRed": palette.red,
            "terminal.ansiWhite": palette.overlay2,
            "terminal.ansiYellow": palette.yellow,
            "breadcrumb.background": palette.base,
            "breadcrumb.foreground": "#cdd6f4cd",
            "breadcrumb.focusForeground": palette.text,
            "editorGroupHeader.tabsBackground": palette.base,
            "tab.activeForeground": palette.text,
            "tab.border": palette.mantle,
            "tab.activeBackground": palette.base,
            "tab.activeBorder": "#00000000",
            "tab.activeBorderTop": "#00000000",
            "tab.inactiveBackground": palette.mantle,
            "tab.inactiveForeground": palette.overlay0,
            "scrollbarSlider.background": "#585b707e",
            "scrollbarSlider.hoverBackground": palette.overlay0,
            "scrollbarSlider.activeBackground": "#bfbfbf66",
            "progressBar.background": palette.blue,
            "widget.shadow": "#00000080",
            "editorWidget.foreground": palette.text,
            "editorWidget.background": palette.base,
            "editorWidget.resizeBorder": palette.surface2,
            "pickerGroup.border": palette.blue,
            "pickerGroup.foreground": palette.blue,
            "debugToolBar.background": palette.surface1,
            "debugToolBar.border": palette.surface2,
            "notifications.foreground": palette.text,
            "notifications.background": palette.surface1,
            "notificationToast.border": palette.surface2,
            "notificationsErrorIcon.foreground": palette.red,
            "notificationsWarningIcon.foreground": palette.yellow,
            "notificationsInfoIcon.foreground": palette.blue,
            "notificationCenter.border": palette.surface2,
            "notificationCenterHeader.foreground": palette.text,
            "notificationCenterHeader.background": palette.base,
            "notifications.border": palette.surface1,
            "gitDecoration.addedResourceForeground": palette.green,
            "gitDecoration.conflictingResourceForeground": palette.mauve,
            "gitDecoration.deletedResourceForeground": palette.red,
            "gitDecoration.ignoredResourceForeground": palette.overlay0,
            "gitDecoration.modifiedResourceForeground": palette.yellow,
            "gitDecoration.stageDeletedResourceForeground": palette.red,
            "gitDecoration.stageModifiedResourceForeground": palette.yellow,
            "gitDecoration.submoduleResourceForeground": palette.blue,
            "gitDecoration.untrackedResourceForeground": palette.green,
            "editorMarkerNavigation.background": palette.surface1,
            "editorMarkerNavigationError.background": palette.red,
            "editorMarkerNavigationWarning.background": palette.yellow,
            "editorMarkerNavigationInfo.background": palette.blue,
            "merge.currentHeaderBackground": "#158472",
            "merge.currentContentBackground": "#27403B",
            "merge.incomingHeaderBackground": "#395F8F",
            "merge.incomingContentBackground": "#243A5E",
            "merge.commonHeaderBackground": palette.surface2,
            "merge.commonContentBackground": palette.surface1,
            "editorSuggestWidget.background": palette.surface1,
            "editorSuggestWidget.border": palette.surface2,
            "editorSuggestWidget.foreground": palette.text,
            "editorSuggestWidget.highlightForeground": palette.blue,
            "editorSuggestWidget.selectedBackground": palette.surface2,
            "editorHoverWidget.foreground": palette.text,
            "editorHoverWidget.background": palette.surface1,
            "editorHoverWidget.border": palette.surface2,
            "peekView.border": palette.blue,
            "peekViewEditor.background": palette.surface1,
            "peekViewEditorGutter.background": palette.surface1,
            "peekViewEditor.matchHighlightBackground": "#fab38740",
            "peekViewEditor.matchHighlightBorder": palette.peach,
            "peekViewResult.background": palette.surface1,
            "peekViewResult.fileForeground": palette.text,
            "peekViewResult.lineForeground": palette.text,
            "peekViewResult.matchHighlightBackground": "#fab38740",
            "peekViewResult.selectionBackground": palette.surface2,
            "peekViewResult.selectionForeground": palette.text,
            "peekViewTitle.background": palette.base,
            "peekViewTitleDescription.foreground": "#ccccccb3",
            "peekViewTitleLabel.foreground": palette.text,
            "icon.foreground": palette.text,
            "checkbox.background": palette.surface0,
            "checkbox.foreground": palette.text,
            "checkbox.border": "#00000000",
            "dropdown.background": palette.surface0,
            "dropdown.foreground": palette.text,
            "dropdown.border": "#00000000",
            disabledForeground: palette.subtext0,
            "minimapGutter.addedBackground": palette.green,
            "minimapGutter.modifiedBackground": palette.sky,
            "minimapGutter.deletedBackground": palette.red,
            "minimap.findMatchHighlight": palette.surface2,
            "minimap.selectionHighlight": palette.surface2,
            "minimap.errorHighlight": palette.red,
            "minimap.warningHighlight": palette.yellow,
            "minimap.background": palette.base,
            "sideBar.dropBackground": palette.mantle,
            "editorGroup.emptyBackground": palette.base,
            "panelSection.border": palette.surface2,
            "statusBarItem.activeBackground": "#FFFFFF25",
            "settings.headerForeground": palette.text,
            "settings.focusedRowBackground": "#ffffff07",
            "walkThrough.embeddedEditorBackground": "#00000050",
            "breadcrumb.activeSelectionForeground": palette.text,
            "editorGutter.commentRangeForeground": palette.overlay2,
            "debugExceptionWidget.background": palette.surface1,
            "debugExceptionWidget.border": palette.surface2,
            "list.warningForeground": palette.yellow,
            "editorBracketHighlight.foreground1": palette.red,
            "editorBracketHighlight.foreground2": palette.peach,
            "editorBracketHighlight.foreground3": palette.yellow,
            "editorBracketHighlight.foreground4": palette.green,
            "editorBracketHighlight.foreground5": palette.sapphire,
            "editorBracketHighlight.foreground6": palette.mauve,
            "editorBracketHighlight.unexpectedBracket.foreground":
                palette.maroon,
        },
    };

    return theme;
};

export const updateThemes = (options: ThemeOptions, paths) => {
    flavours.map((flavour) => {
        const theme = compileTheme(flavour, options);
        console.log(paths[flavour], JSON.stringify(theme).length);
    });
};
