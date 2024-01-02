/**
 * Script to generate theme files for all flavors, Node compatible.
 * Fires as a hook before packaging, and is included in the Nix build.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { variants } from "@catppuccin/palette";

import { compileTheme, defaultOptions } from "@/theme";
import type { CatppuccinFlavor } from "@/types";
import { repoRoot } from "./constants";

const flavors = Object.keys(variants) as CatppuccinFlavor[];

// options can also be passed as a JSON string as an environment variable
const optEnvVar = process.env.CATPPUCCIN_OPTIONS;
const optEnv = optEnvVar ? JSON.parse(optEnvVar) : {};

const main = async () => {
  await mkdir(join(repoRoot, "themes"), { recursive: true });

  flavors.map((flavor) => {
    const options = { ...defaultOptions, ...optEnv };
    const theme = compileTheme(flavor, options);
    writeFile(
      join(repoRoot, `themes/${flavor}.json`),
      JSON.stringify(theme, null, 2),
    );
  });
};

export default main;
if (typeof require !== "undefined" && require.main === module) {
  console.log("Compiling themes...");
  main();
}
