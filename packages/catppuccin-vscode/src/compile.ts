import { ThemeOptions } from "catppuccin-vsc/src/types";
import { FlavorName } from "@catppuccin/palette";
import { compileTheme, defaultOptions } from "catppuccin-vsc/src/theme";

/**
 * Compiles the Catppuccin for VSCode theme with optional custom overrides.
 *
 * @param flavor The base flavor to compile
 * @param overrides Overrides to apply
 * @returns The compiled theme
 *
 * @example
 * ```ts
 * import { compile } from "@catppuccin/vscode";
 *
 * const myMocha = compile("mocha", {
 *   italicComments: false,
 *   italicKeywords: false,
 *   boldKeywords: false,
 *   colorOverrides: {
 *     mocha: {
 *       base: "#000000",
 *     },
 *   }
 * }
 * ```
 */
export const compile = (
  flavor: FlavorName,
  overrides: Partial<ThemeOptions> = {},
) => {
  const options: ThemeOptions = {
    ...defaultOptions,
    ...overrides,
  };
  const compiled = compileTheme(flavor, options);

  // like in the original file, we need to shim the name for the Shiki theme
  return {
    ...compiled,
    name: `catppuccin-${flavor}`,
  };
};
