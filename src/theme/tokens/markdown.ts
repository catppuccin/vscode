import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: palette.subtext0,
        fontStyle: "",
      },
    },
    {
      scope: [
        "heading.1.markdown punctuation.definition.heading.markdown",
        "heading.1.markdown",
        "markup.heading.setext.1.markdown",
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
      ],
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      scope: "markup.bold.markdown",
      settings: {
        foreground: palette.red,
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.italic.markdown",
      settings: {
        foreground: palette.red,
        fontStyle: "italic",
      },
    },
    {
      scope: "markup.strikethrough.markdown",
      settings: {
        foreground: palette.subtext0,
        fontStyle: "strikethrough",
      },
    },
    {
      scope: [
        "punctuation.definition.link.markdown",
        "markup.underline.link.markdown",
      ],
      settings: {
        foreground: palette.rosewater,
        fontStyle: "",
      },
    },
    {
      name: "Markdown links",
      scope: [
        "text.html.markdown punctuation.definition.link.title",
        "string.other.link.title.markdown",
        // references like
        // > [1]: http://example.com "Example"
        "punctuation.definition.constant.markdown",
        "constant.other.reference.link.markdown",
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
      scope: "fenced_code.block.language.markdown",
      settings: {
        foreground: palette.sky,
        fontStyle: "",
      },
    },
    {
      name: "Markdown triple backticks",
      scope:
        "markup.fenced_code.block.markdown punctuation.definition.markdown",
      settings: {
        foreground: palette.overlay2,
        fontStyle: "",
      },
    },
    {
      name: "Markdown quotes",
      scope: [
        "markup.quote.markdown",
        "punctuation.definition.quote.begin.markdown",
      ],
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
      scope: ["punctuation.definition.list.begin.markdown"],
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
