import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "Lua operators",
      scope: "keyword.operator.lua",
      settings: {
        foreground: palette.sky,
        fontStyle: "bold",
      },
    },
    {
      name: "Lua numeric",
      scope: "constant.numeric.integer.lua",
      settings: {
        foreground: palette.peach,
        fontStyle: "bold",
      },
    },
    {
      name: "Lua other vars",
      scope: "variable.other.lua",
      settings: {
        foreground: palette.lavender,
        fontStyle: options.italicKeywords ? "italic" : "",
      },
    },
    {
      name: "Lua brackets",
      scope: [
        "punctuation.definition.parameters.end.lua",
        "punctuation.definition.parameters.begin.lua",
      ],
      settings: {
        foreground: palette.overlay1,
      },
    },
  ];
}
