import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "C++ extern keyword",
      scope: "storage.modifier.specifier.extern.cpp",
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "C++ scope resolution",
      scope: [
        "entity.name.scope-resolution.template.call.cpp",
        "entity.name.scope-resolution.parameter.cpp",
        "entity.name.scope-resolution.cpp",
        "entity.name.scope-resolution.function.definition.cpp",
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "C++ doc keywords",
      scope: "storage.type.class.doxygen",
      settings: {
        fontStyle: "",
      },
    },
    {
      name: "C++ operators",
      scope: ["storage.modifier.reference.cpp"],
      settings: {
        foreground: palette.teal,
      },
    },
  ];
};

export default tokens;
