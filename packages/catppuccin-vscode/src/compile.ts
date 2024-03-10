import { ThemeOptions } from "catppuccin-vsc/src/types";
import { FlavorName } from "@catppuccin/palette";
import { compileTheme, defaultOptions } from "catppuccin-vsc/src/theme";

export const compile = (
  flavor: FlavorName,
  overrides: Partial<ThemeOptions> = {},
) => {
  const options = { ...defaultOptions, ...overrides };
  const compiled = compileTheme(flavor, options);

  // like in the original file, we need to shim the name for the Shiki theme
  return {
    ...compiled,
    name: `catppuccin-${flavor}`,
  };
};
