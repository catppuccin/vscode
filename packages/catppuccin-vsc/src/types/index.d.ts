import type { AccentName, Colors, FlavorName } from "@catppuccin/palette";

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

type FlavorsPlusAll<T> = { all: T } & { [k in CatppuccinFlavor]: T };

export type ColorOverrides = Partial<
  FlavorsPlusAll<Partial<CatppuccinPalette>>
>;

export type CustomUIColors = Partial<FlavorsPlusAll<Record<string, string>>>;

export type ThemeOptions = {
  accent: CatppuccinAccent;
  italicComments: boolean;
  italicKeywords: boolean;
  boldKeywords: boolean;
  colorOverrides: ColorOverrides;
  workbenchMode: CatppuccinWorkbenchMode;
  bracketMode: CatppuccinBracketMode;
  extraBordersEnabled: boolean;
  customUIColors: CustomUIColors;
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
  options: ThemeOptions;
  isLatte: boolean;
};
