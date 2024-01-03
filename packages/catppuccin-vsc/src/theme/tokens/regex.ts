import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Regex anchors (^, $)",
      scope: "keyword.control.anchor.regexp",
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "Regex regular string match",
      scope: "string.regexp.ts",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Regex group parenthesis & backreference (\\1, \\2, \\3, ...)",
      scope: [
        "punctuation.definition.group.regexp",
        "keyword.other.back-reference.regexp",
      ],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Regex character class []",
      scope: "punctuation.definition.character-class.regexp",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Regex character classes (\\d, \\w, \\s)",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: palette.pink,
      },
    },
    {
      name: "Regex range",
      scope: "constant.other.character-class.range.regexp",
      settings: {
        foreground: palette.rosewater,
      },
    },
    {
      name: "Regex quantifier",
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Regex constant/numeric",
      scope: "constant.character.numeric.regexp",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Regex lookaheads, negative lookaheads, lookbehinds, negative lookbehinds",
      scope: [
        "punctuation.definition.group.no-capture.regexp",
        "meta.assertion.look-ahead.regexp",
        "meta.assertion.negative-look-ahead.regexp",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
  ];
};

export default tokens;
