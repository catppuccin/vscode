import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "C++ functions",
      scope: "entity.name.function.call.cpp",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "C++ extern keyword",
      scope: "storage.modifier.specifier.extern.cpp",
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "C++ keywords",
      scope: ["keyword.operator.new.cpp"],
      settings: {
        foreground: palette.mauve,
      },
    },
  ];
};

export default tokens;
