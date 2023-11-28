import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { variants } from "@catppuccin/palette";

import { compileTheme, defaultOptions } from "@/theme";
import type { CatppuccinFlavor } from "@/types";
import { repoRoot } from "./constants";

const flavors = Object.keys(variants) as CatppuccinFlavor[];

// options can also be passed as a JSON string
const options = process.argv[2] ? JSON.parse(process.argv[2]) : {};

flavors.map((flavor) => {
  const theme = compileTheme(flavor, { ...defaultOptions, ...options });
  // ignore error if directory exists
  mkdir(join(repoRoot, "themes"), { recursive: true }).then(() => {
    writeFile(
      join(repoRoot, `themes/${flavor}.json`),
      JSON.stringify(theme, null, 2),
    );
  });
});
