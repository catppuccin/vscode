import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
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
  ];
}
