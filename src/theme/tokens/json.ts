import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "JSON quoted string",
      scope: "source.json meta.structure.dictionary.json > string.quoted.json",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "JSON punctuation string",
      scope:
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
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
      name: "JSON property name",
      scope: "support.type.property-name.json",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "JSON Punctuation for Property Name",
      scope: "support.type.property-name.json punctuation",
      settings: {
        foreground: palette.teal,
      },
    },
  ];
}
