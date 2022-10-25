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

export interface CatppuccinPalette {
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

type ThemeOptions = {
  accent: CatppuccinAccent;
  italicComments: boolean;
  italicKeywords: boolean;
};

type ThemePaths = {
  latte: string;
  frappe: string;
  macchiato: string;
  mocha: string;
};

type ThemeContext = {
  palette: CatppuccinPalette;
  options: ThemeOptions;
  isLatte: boolean;
};
