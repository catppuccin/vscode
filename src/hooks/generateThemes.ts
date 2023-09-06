import * as fs from "fs";
import * as path from "path";
import { variants } from "@catppuccin/palette";

import { compileTheme, defaultOptions } from "../theme";
import type { CatppuccinFlavour } from "../types";

const themeDir = path.join(__dirname, "../../themes");
const flavours = Object.keys(variants) as CatppuccinFlavour[];

flavours.map((flavour) => {
  const theme = compileTheme(flavour, defaultOptions);
  // ignore error if directory exists
  fs.mkdir(path.dirname(themeDir), () => {
    fs.writeFileSync(
      path.join(themeDir, `${flavour}.json`),
      JSON.stringify(theme, null, 2),
    );
  });
});
