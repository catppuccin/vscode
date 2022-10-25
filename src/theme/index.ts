import { variants } from "@catppuccin/palette";
import {
  CatppuccinFlavour,
  CatppuccinPalette,
  ThemeContext,
  ThemeOptions,
} from "../types";
import { getTokenColors } from "./tokenColors";
import { getUiColors } from "./uiColors";

const colours = Object.keys(variants.mocha);

export const compileTheme = (
  flavour: CatppuccinFlavour = "mocha",
  options: ThemeOptions = {
    accent: "mauve",
    italicComments: true,
    italicKeywords: true,
  }
) => {
  const palette: CatppuccinPalette = {
    rosewater: "",
    flamingo: "",
    pink: "",
    mauve: "",
    red: "",
    maroon: "",
    peach: "",
    yellow: "",
    green: "",
    teal: "",
    sky: "",
    sapphire: "",
    blue: "",
    lavender: "",
    text: "",
    subtext1: "",
    subtext0: "",
    overlay2: "",
    overlay1: "",
    overlay0: "",
    surface2: "",
    surface1: "",
    surface0: "",
    base: "",
    mantle: "",
    crust: "",
  };
  colours.forEach(
    (colour) => (palette[colour] = variants[flavour][colour].hex)
  );
  const context: ThemeContext = {
    palette,
    options,
    isLatte: flavour === "latte",
  };

  const theme = {
    name: `Catppuccin ${
      flavour.charAt(0).toUpperCase() + flavour.substring(1)
    }`,
    type: context.isLatte ? "light" : "dark",
    semanticHighlighting: true,
    semanticTokenColors: {
      enumMember: {
        foreground: palette.sky,
      },
      "variable.constant": {
        foreground: palette.yellow,
      },
      "variable.defaultLibrary": {
        foreground: palette.peach,
      },
    },
    tokenColors: getTokenColors(context),
    colors: getUiColors(context),
  };

  return theme;
};
