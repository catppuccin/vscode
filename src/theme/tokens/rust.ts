import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Rust attribute",
      scope: [
        "meta.annotation.rust",
        "meta.annotation.rust punctuation",
        "meta.attribute.rust",
        "punctuation.definition.attribute.rust",
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "Rust keyword",
      scope: [
        "storage.type.module.rust",
        "storage.modifier.rust",
        "storage.type.struct.rust",
        "storage.type.enum.rust",
        "storage.type.trait.rust",
        "storage.type.union.rust",
        "storage.type.impl.rust",
        "storage.type.rust",
        "storage.type.function.rust",
        "storage.type.type.rust",
      ],
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "Rust u/i32, u/i64, etc.",
      scope: "entity.name.type.numeric.rust",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "Rust generic",
      scope: "meta.generic.rust",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "Rust impl",
      scope: "entity.name.impl.rust",
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "Rust module",
      scope: "entity.name.module.rust",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "Rust trait",
      scope: "entity.name.trait.rust",
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "Rust struct",
      scope: "storage.type.source.rust",
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "Rust union",
      scope: "entity.name.union.rust",
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "Rust enum member",
      scope: "meta.enum.rust storage.type.source.rust",
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "Rust macro",
      scope: [
        "support.macro.rust",
        "meta.macro.rust support.function.rust",
        "entity.name.function.macro",
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "Rust lifetime",
      scope: ["storage.modifier.lifetime.rust", "entity.name.type.lifetime"],
      settings: {
        foreground: palette.blue,
        fontStyle: "italic",
      },
    },
    {
      name: "Rust string formatting",
      scope: "string.quoted.double.rust constant.other.placeholder.rust",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      name: "Rust return type generic",
      scope:
        "meta.function.return-type.rust meta.generic.rust storage.type.rust",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "Rust functions",
      scope: "meta.function.call.rust",
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "Rust angle brackets",
      scope: "punctuation.brackets.angle.rust",
      settings: {
        foreground: palette.sky,
        fontStyle: "",
      },
    },
    {
      name: "Rust constants",
      scope: "constant.other.caps.rust",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
