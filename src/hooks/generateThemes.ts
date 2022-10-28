import { compileTheme } from "../theme";
import { CatppuccinFlavour } from "../types";
import { getThemePaths } from "../helpers";
import * as fs from "fs";
import path = require("path");
import { defaultOptions } from "../theme";

const paths = getThemePaths();

const flavours = [
  "latte" as CatppuccinFlavour,
  "frappe" as CatppuccinFlavour,
  "macchiato" as CatppuccinFlavour,
  "mocha" as CatppuccinFlavour,
];

flavours.map((flavour) => {
  const theme = compileTheme(flavour, defaultOptions);
  // ignore error if directory exists
  fs.mkdir(path.dirname(paths[flavour]), () => {
    fs.writeFileSync(paths[flavour], JSON.stringify(theme, null, 2));
  });
});
