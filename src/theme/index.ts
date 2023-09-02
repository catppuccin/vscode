import { variants } from "@catppuccin/palette";

import type {
  CatppuccinFlavour,
  CatppuccinPalette,
  ThemeContext,
  ThemeOptions,
} from "../types";
import { getTokenColors } from "./tokenColors";
import { getSemanticTokens } from "./semanticTokens";
import { getUiColors } from "./uiColors";
import { capitalize } from "./utils";

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
  flavour: CatppuccinFlavour = "mocha",
  options: ThemeOptions = defaultOptions,
) => {
  const ctpPalette = Object.entries(variants[flavour])
    .map(([k, v]) => {
      return {
        [k as unknown as any]: v["hex"],
        name: flavour,
      };
    })
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

  const palette: CatppuccinPalette = {
    ...(ctpPalette as CatppuccinPalette),
    ...options.colorOverrides?.all,
    ...options.colorOverrides?.[flavour],
  };

  const context: ThemeContext = {
    palette,
    options,
    isLatte: flavour === "latte",
  };

  const flavourName = `Catppuccin ${capitalize(flavour)}`;

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
