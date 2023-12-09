import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Classes, reflecting the className color in JSX",
      scope: [
        "source.css entity.other.attribute-name.class.css",
        "entity.other.attribute-name.parent-selector.css punctuation.definition.entity.css",
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Operators",
      scope: "punctuation.separator.operator.css",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Pseudo classes",
      scope: "source.css entity.other.attribute-name.pseudo-class",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      scope: "source.css constant.other.unicode-range",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      scope: "source.css variable.parameter.url",
      settings: {
        foreground: palette.green,
        fontStyle: "",
      },
    },
    {
      name: "CSS vendored property names",
      scope: ["support.type.vendored.property-name"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Less/SCSS right-hand variables (@/$-prefixed)",
      scope: [
        "source.css meta.property-value variable",
        "source.css meta.property-value variable.other.less",
        "source.css meta.property-value variable.other.less punctuation.definition.variable.less",
        // the left hand equivalent, initial assignment
        "meta.definition.variable.scss",
        // "meta.property-list variable.scss",
      ],
      settings: {
        foreground: palette.maroon,
      },
    },
    {
      name: "CSS variables (--prefixed)",
      scope: [
        "source.css meta.property-list variable",
        // ditto for less
        "meta.property-list variable.other.less",
        "meta.property-list variable.other.less punctuation.definition.variable.less",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "CSS Percentage values, styled the same as numbers",
      scope: "keyword.other.unit.percentage.css",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "CSS Attribute selectors, styled the same as strings",
      scope: "source.css meta.attribute-selector",
      settings: {
        foreground: palette.green,
      },
    },
  ];
};

export default tokens;
