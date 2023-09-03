import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "PHP Attributes",
      scope: ["support.attribute.builtin", "meta.attribute.php"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "PHP Parameters (needed for the leading dollar sign)",
      scope: "meta.function.parameters.php punctuation.definition.variable.php",
      settings: {
        foreground: palette.maroon,
        fontStyle: "",
      },
    },
    {
      name: "PHP Constants (null, __FILE__, etc.)",
      scope: "constant.language.php",
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "PHP functions",
      scope: "text.html.php support.function",
      settings: {
        foreground: palette.blue,
      },
    },
  ];
};

export default tokens;
