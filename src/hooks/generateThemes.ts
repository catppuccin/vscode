import * as fs from "fs";
import path = require("path");
import { variants } from "@catppuccin/palette";

import { getThemePaths } from "../helpers";
import { compileTheme, defaultOptions } from "../theme";
import { CatppuccinFlavour } from "../types";

const paths = getThemePaths();
const flavours = Object.keys(variants) as CatppuccinFlavour[];

flavours.map((flavour) => {
  const theme = compileTheme(flavour, defaultOptions);
  // ignore error if directory exists
  fs.mkdir(path.dirname(paths[flavour]), () => {
    fs.writeFileSync(paths[flavour], JSON.stringify(theme, null, 2));
  });
});
