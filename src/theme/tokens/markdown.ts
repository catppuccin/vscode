import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      scope: [
        "heading.1.markdown punctuation.definition.heading.markdown",
        "heading.1.markdown",
        "markup.heading.setext.1.markdown",
        "markup.heading.heading-0.asciidoc",
      ],
      settings: {
        foreground: palette.red,
        fontStyle: "",
      },
    },
    {
      scope: [
        "heading.2.markdown punctuation.definition.heading.markdown",
        "heading.2.markdown",
        "markup.heading.setext.2.markdown",
        "markup.heading.heading-1.asciidoc",
      ],
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      scope: [
        "heading.3.markdown punctuation.definition.heading.markdown",
        "heading.3.markdown",
        "markup.heading.heading-2.asciidoc",
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      scope: [
        "heading.4.markdown punctuation.definition.heading.markdown",
        "heading.4.markdown",
        "markup.heading.heading-3.asciidoc",
      ],
      settings: {
        foreground: palette.green,
        fontStyle: "",
      },
    },
    {
      scope: [
        "heading.5.markdown punctuation.definition.heading.markdown",
        "heading.5.markdown",
        "markup.heading.heading-4.asciidoc",
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      scope: [
        "heading.6.markdown punctuation.definition.heading.markdown",
        "heading.6.markdown",
        "markup.heading.heading-5.asciidoc",
      ],
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        foreground: palette.red,
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.italic",
      settings: {
        foreground: palette.red,
        fontStyle: "italic",
      },
    },
    {
      scope: "markup.strikethrough",
      settings: {
        foreground: palette.subtext0,
        fontStyle: "strikethrough",
      },
    },
    {
      name: "Markdown auto links",
      scope: ["punctuation.definition.link", "markup.underline.link"],
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "Markdown links",
      scope: [
        "text.html.markdown punctuation.definition.link.title",
        "string.other.link.title.markdown",
        "markup.link",
        // references like
        // > [1]: http://example.com "Example"
        "punctuation.definition.constant.markdown",
        "constant.other.reference.link.markdown",
        "markup.substitution.attribute-reference",
      ],
      settings: {
        foreground: palette.lavender,
        fontStyle: "",
      },
    },
    {
      name: "Markdown code spans",
      scope: [
        "punctuation.definition.raw.markdown",
        "markup.inline.raw.string.markdown",
        "markup.raw.block.markdown",
      ],
      settings: {
        foreground: palette.green,
        fontStyle: "",
      },
    },
    {
      name: "Markdown triple backtick language identifier",
      scope: "fenced_code.block.language",
      settings: {
        foreground: palette.sky,
        fontStyle: "",
      },
    },
    {
      name: "Markdown triple backticks",
      scope: [
        "markup.fenced_code.block punctuation.definition",
        "markup.raw support.asciidoc",
      ],
      settings: {
        foreground: palette.overlay2,
        fontStyle: "",
      },
    },
    {
      name: "Markdown quotes",
      scope: ["markup.quote", "punctuation.definition.quote.begin"],
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
    {
      name: "Markdown separators",
      scope: "meta.separator.markdown",
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "Markdown list bullets",
      scope: [
        "punctuation.definition.list.begin.markdown",
        "markup.list.bullet",
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
