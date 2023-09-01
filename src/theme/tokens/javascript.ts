import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Exported Variable",
      scope: "meta.export variable.other.readwrite.js",
      settings: {
        foreground: palette.maroon,
        fontStyle: "",
      },
    },
    {
      name: "JS/TS constants",
      scope: [
        "variable.other.constant.object.ts",
        "variable.other.constant.object.js",
      ],
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      scope: "support.type.object.console.js",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "Node constants as keywords (module, etc.)",
      scope: "support.constant.node",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "implements as keyword",
      scope: "storage.modifier.implements",
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      scope: "variable.parameter.generic",
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "Arrow functions",
      scope: "keyword.declaration.function.arrow.js",
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
