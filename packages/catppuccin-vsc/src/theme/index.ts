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
  syncWithIconPack: true,
};

export const compileTheme = (
  flavor: CatppuccinFlavor = "mocha",
  options: ThemeOptions = defaultOptions,
) => {
  const flavorData = flavors[flavor];
  const ctpPalette = {} as CatppuccinPalette;
  for (const [k, v] of flavorData.colorEntries) {
    ctpPalette[k] = v.hex;
  }

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

  return {
    name: `Catppuccin ${flavorData.name}`,
    type: context.isLatte ? "light" : "dark",
    colors: getUiColors(context),
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokens(context),
    tokenColors: getTokenColors(context),
  };
};
