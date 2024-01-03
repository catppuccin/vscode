import { flavors } from "@catppuccin/palette";

import type {
  CatppuccinFlavor,
  CatppuccinPalette,
  ThemeContext,
  ThemeOptions,
} from "@/types";
import { getTokenColors } from "./tokenColors";
import { getSemanticTokens } from "./semanticTokens";
import { getUiColors } from "./uiColors";

export const defaultOptions: ThemeOptions = {
  accent: "mauve",
  boldKeywords: true,
  italicComments: true,
  italicKeywords: true,
  colorOverrides: {},
  workbenchMode: "default",
  bracketMode: "rainbow",
  extraBordersEnabled: false,
  customUIColors: {},
};

export const compileTheme = (
  flavor: CatppuccinFlavor = "mocha",
  options: ThemeOptions = defaultOptions,
) => {
  const flavorData = flavors[flavor];
  const ctpPalette = flavorData.colorEntries.reduce((acc, [k, v]) => {
    acc[k] = v.hex;
    return acc;
  }, {} as CatppuccinPalette);

  const palette: CatppuccinPalette = {
    ...ctpPalette,
    ...options.colorOverrides?.all,
    ...options.colorOverrides?.[flavor],
  };

  const context: ThemeContext = {
    flavor,
    palette,
    options,
    isLatte: flavor === "latte",
  };

  const flavourName = `Catppuccin ${flavorData.name}`;

  const theme = {
    name: flavourName,
    type: context.isLatte ? "light" : "dark",
    colors: getUiColors(context),
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokens(context),
    tokenColors: getTokenColors(context),
  };

  return theme;
};
