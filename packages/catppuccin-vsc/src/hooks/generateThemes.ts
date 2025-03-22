/**
 * Script to generate theme files for all flavors, Node compatible.
 * Fires as a hook before packaging.
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { flavorEntries } from "@catppuccin/palette";

import { compileTheme, defaultOptions } from "@/theme";
import { repoRoot } from "./constants";

const flavors = flavorEntries.map(([flavorName]) => flavorName);

// options can also be passed as a JSON string as an environment variable
const optEnvironmentVariable = process.env.CATPPUCCIN_OPTIONS;
const optEnvironment = optEnvironmentVariable
  ? JSON.parse(optEnvironmentVariable)
  : {};

const main = async () => {
  await mkdir(path.join(repoRoot, "themes"), { recursive: true });

  flavors.map((flavor) => {
    const options = { ...defaultOptions, ...optEnvironment };
    const theme = compileTheme(flavor, options);
    writeFile(
      path.join(repoRoot, `themes/${flavor}.json`),
      JSON.stringify(theme, undefined, 2),
    );
  });
};

export default main;
if (typeof require !== "undefined" && require.main === module) {
  console.log("Compiling themes...");
  main();
}
