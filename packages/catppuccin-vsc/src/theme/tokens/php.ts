import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "PHP Attributes",
      scope: ["support.attribute.builtin", "meta.attribute.php"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "PHP Parameters (needed for the leading dollar sign)",
      scope: "meta.function.parameters.php punctuation.definition.variable.php",
      settings: {
        foreground: palette.maroon,
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
        foreground: palette.sky,
      },
    },
    {
      name: "PHPdoc keywords",
      scope: "keyword.other.phpdoc.php",
      settings: {
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
