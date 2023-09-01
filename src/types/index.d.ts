export type * from "./textmate-colors";
export type * from "./workbench-colors";
export type * from "./token-styling";

export type CatppuccinFlavour = "latte" | "frappe" | "macchiato" | "mocha";
export type CatppuccinAccent =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender";
export type CatppuccinWorkbenchMode = "default" | "flat" | "minimal";
export type CatppuccinBracketMode =
  | "rainbow"
  | "dimmed"
  | "monochromatic"
  | "neovim";

export interface CatppuccinPalette {
  name: CatppuccinFlavour;
  rosewater: string;
  flamingo: string;
  pink: string;
  mauve: string;
  red: string;
  maroon: string;
  peach: string;
  yellow: string;
  green: string;
  teal: string;
  sky: string;
  sapphire: string;
  blue: string;
  lavender: string;
  text: string;
  subtext1: string;
  subtext0: string;
  overlay2: string;
  overlay1: string;
  overlay0: string;
  surface2: string;
  surface1: string;
  surface0: string;
  base: string;
  mantle: string;
  crust: string;
}

export type ColorOverrides = {
  all?: Partial<CatppuccinPalette>;
  latte?: Partial<CatppuccinPalette>;
  frappe?: Partial<CatppuccinPalette>;
  macchiato?: Partial<CatppuccinPalette>;
  mocha?: Partial<CatppuccinPalette>;
};

export type CustomUIColors = {
  all?: Record<"all", string>;
  latte?: Record<"latte", string>;
  frappe?: Record<"frappe", string>;
  macchiato?: Record<"macchiato", string>;
  mocha?: Record<"mocha", string>;
};

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
  latte: string;
  frappe: string;
  macchiato: string;
  mocha: string;
};

export type ThemeContext = {
  palette: CatppuccinPalette;
  options: ThemeOptions;
  isLatte: boolean;
};
