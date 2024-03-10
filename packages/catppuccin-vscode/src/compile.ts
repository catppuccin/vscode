import { ThemeOptions } from "catppuccin-vsc/src/types";
import { FlavorName } from "@catppuccin/palette";
import { compileTheme, defaultOptions } from "catppuccin-vsc/src/theme";

export const compile = (
  flavor: FlavorName,
  overrides: Partial<ThemeOptions> = {},
) => {
  const options = { ...defaultOptions, ...overrides };
  return compileTheme(flavor, options);
};
