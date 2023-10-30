import * as fs from "fs/promises";
import * as path from "path";
import { variants } from "@catppuccin/palette";

import { compileTheme, defaultOptions } from "@/theme";
import type { CatppuccinFlavor } from "@/types";

const themeDir = path.join(__dirname, "../../themes");
const flavors = Object.keys(variants) as CatppuccinFlavor[];

// options can also be passed as a JSON string
const options = process.argv[2] ? JSON.parse(process.argv[2]) : {};

flavors.map((flavor) => {
  const theme = compileTheme(flavor, { ...defaultOptions, ...options });
  // ignore error if directory exists
  fs.mkdir(themeDir, { recursive: true }).then(() => {
    fs.writeFile(
      path.join(themeDir, `${flavor}.json`),
      JSON.stringify(theme, null, 2),
    );
  });
});
