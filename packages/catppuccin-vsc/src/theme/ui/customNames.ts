import type { ThemeContext, ColorName } from "@/types";
import { opacity } from "@/theme/utils";
import { flavors } from "@catppuccin/palette";

type CustomNamedColors = Record<string, string>;

const ctpColors = new Set(Object.keys(flavors.mocha.colors));

class CustomUIColorError extends Error {
  constructor(key: string, value: string, message = "") {
    super(
      `Invalid value: "${value}" for key "${key}" in "catppuccin.customUIColors".\n${message}`,
    );
    this.name = "CustomUIColorError";
  }
}

/**
 * @throws if the value is not a valid 'colorName' or 'colorName opacityValue'
 * @returns a tuple of [colorName, opacityValue]
 */
const parseCustomUiColor = (k: string, v: string): [string, number] => {
  const entry = v.split(" ");
  if (entry.length > 2) {
    throw new CustomUIColorError(k, v, "Too many arguments for accent color");
  }
  let opacityValue = 1;
  if (entry.length == 2) {
    opacityValue = Number(entry[1]);
    if (Number.isNaN(opacityValue)) {
      throw new CustomUIColorError(k, v, "Opacity value is not a number");
    }
    if (opacityValue < 0 || opacityValue > 1) {
      throw new CustomUIColorError(
        k,
        v,
        "Opacity value is not in range [0, 1]",
      );
    }
  }
  return [entry[0], opacityValue];
};

const customNamedColors = (context: ThemeContext): CustomNamedColors => {
  const { flavor, palette, options } = context;
  const accent = palette[options.accent];

  const customUIColors = {
    ...options.customUIColors.all,
    ...options.customUIColors[flavor],
  };

  for (const [k, v] of Object.entries(customUIColors)) {
    // don't change custom hex colors
    if (v.startsWith("#")) continue;

    // eslint-disable-next-line prefer-const
    let [color, opacityValue] = parseCustomUiColor(k, v);

    // resolve "accent" to the current accent color
    if (color === "accent") {
      color = accent;
    } else if (ctpColors.has(color)) {
      color = palette[color as ColorName];
    } else {
      throw new CustomUIColorError(k, v, "Invalid color name.");
    }

    customUIColors[k] =
      opacityValue === 1 ? opacity(color, opacityValue) : color;
  }

  return customUIColors;
};

export default customNamedColors;
