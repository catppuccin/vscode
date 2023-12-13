import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "GDScript functions",
      scope: "support.function.builtin.gdscript",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "GDScript constants",
      scope: "constant.language.gdscript",
      settings: {
        foreground: palette.peach,
      },
    },
  ];
};

export default tokens;
