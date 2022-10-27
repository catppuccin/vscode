import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "parameter function ruby cs",
      scope: ["function.parameter.ruby", "function.parameter.cs"],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "constant.language.symbol.ruby",
      scope: "constant.language.symbol.ruby",
      settings: {
        foreground: palette.sky,
      },
    },
  ];
}
