import { flavors } from "@catppuccin/palette";

import type {
  CatppuccinPaletteAnsi,
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
  customAccentColors: {},
  syncWithIconPack: true,
};

export const compileTheme = (
  flavor: CatppuccinFlavor = "mocha",
  options: ThemeOptions = defaultOptions,
) => {
  const flavorData = flavors[flavor];
  const ctpPalette = {} as CatppuccinPalette;
  const paletteAnsi = {
    normal: {},
    bright: {},
  } as CatppuccinPaletteAnsi;
  for (const [k, v] of flavorData.colorEntries) {
    ctpPalette[k] = v.hex;
  }
  for (const [k, v] of flavorData.ansiColorEntries) {
    paletteAnsi.normal[k] = v.normal.hex;
    paletteAnsi.bright[k] = v.bright.hex;
  }

  const palette: CatppuccinPalette = {
    ...ctpPalette,
    ...options.colorOverrides?.all,
    ...options.colorOverrides?.[flavor],
  };

  const accent =
    options.accent === "custom"
      ? (options.customAccentColors?.[flavor] ??
        options.customAccentColors?.all ??
        palette.mauve)
      : palette[options.accent];

  const context: ThemeContext = {
    flavor,
    palette,
    paletteAnsi,
    options,
    isLatte: flavor === "latte",
    accent,
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
