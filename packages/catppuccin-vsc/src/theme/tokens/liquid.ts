import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Liquid Builtin Objects & User Defined Variables",
      scope: "variable.language.liquid",
      settings: {
        foreground: palette.pink,
      },
    },
  ];
};

export default tokens;
