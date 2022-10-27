import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "Markdown headings",
      scope: "entity.name.section.markdown",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Markdown heading Punctuation Definition",
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
      name: "Markdown heading setext",
      scope: "markup.heading.setext",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Markdown Punctuation Definition Bold",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Markdown Inline Raw",
      scope: "markup.inline.raw.markdown",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Markdown Inline Raw",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Markdown List Punctuation Definition",
      scope: "punctuation.definition.list.markdown",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Markdown Punctuation Definition String",
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
      name: "Markdown Punctuation Definition Link",
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Markdown Underline Link/Image",
      scope:
        "markup.underline.link.markdown,markup.underline.link.image.markdown",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Markdown Link Title/Description",
      scope:
        "string.other.link.title.markdown,string.other.link.description.markdown",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Markdown Quote",
      scope: "markup.quote.markdown",
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
  ];
}
