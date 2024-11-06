import type {
  AccentName,
  Colors,
  AnsiColors,
  FlavorName,
} from "@catppuccin/palette";

import type { Uri } from "vscode";

// vscode schemas
export type * from "@catppuccin/vsc-typegen/types/textmate-colors";
export type * from "@catppuccin/vsc-typegen/types/workbench-colors";
export type * from "@catppuccin/vsc-typegen/types/token-styling";

// extensions
export type * from "@catppuccin/vsc-typegen/types/errorlens";
export type * from "@catppuccin/vsc-typegen/types/github-pull-request";
export type * from "@catppuccin/vsc-typegen/types/gitlens";

export type CatppuccinAccent = AccentName;
export type CatppuccinFlavor = FlavorName;
export { type ColorName } from "@catppuccin/palette";
export type CatppuccinWorkbenchMode = "default" | "flat" | "minimal";
export type CatppuccinBracketMode =
  | "rainbow"
  | "dimmed"
  | "monochromatic"
  | "neovim";

export type CatppuccinPalette = Colors<string>;
export type CatppuccinPaletteAnsi = {
  normal: AnsiColors<string>;
  bright: AnsiColors<string>;
};

type FlavorsPlusAll<T> = { all: T } & { [k in CatppuccinFlavor]: T };

export type ColorOverrides = Partial<
  FlavorsPlusAll<Partial<CatppuccinPalette>>
>;

export type CustomUIColors = Partial<FlavorsPlusAll<Record<string, string>>>;

export type ThemeOptions = {
  /** The accent color to use */
  accent: CatppuccinAccent;
  /** Controls whether to use *italics* for comments. */
  italicComments: boolean;
  /** Controls whether to use *italics* for keywords. */
  italicKeywords: boolean;
  /** Controls whether to use **bold** for keywords. */
  boldKeywords: boolean;
  /**
   * Custom color overrides.
   * Assign your own hex codes to palette colors.
   * See [the docs](https://github.com/catppuccin/vscode/tree/main/packages/catppuccin-vsc#override-palette-colors) for reference.
   */
  colorOverrides: ColorOverrides;
  /** Controls how the workbench should be styled. */
  workbenchMode: CatppuccinWorkbenchMode;
  /**
   * Controls how bracket pairs should be themed.
   */
  bracketMode: CatppuccinBracketMode;
  /** Controls whether borders should be enabled on some additional UI elements. */
  extraBordersEnabled: boolean;
  /**
   * Customize UI colors.
   * Map `workbench.colorCustomizations` to palette colors.
   * See [the docs](https://github.com/catppuccin/vscode/tree/main/packages/catppuccin-vsc#use-palette-colors-on-workbench-elements-ui) for reference.
   */
  customUIColors: CustomUIColors;

  /**
   * Controls whether to sync the currently active Catppuccin flavor with the [Catppuccin Icon Pack](https://github.com/catppuccin/vscode-icons)
   */
  syncWithIconPack: boolean;
};

export type ThemePaths = {
  latte: Uri;
  frappe: Uri;
  macchiato: Uri;
  mocha: Uri;
};

export type ThemeContext = {
  flavor: CatppuccinFlavor;
  palette: CatppuccinPalette;
  paletteAnsi: CatppuccinPaletteAnsi;
  options: ThemeOptions;
  isLatte: boolean;
};
