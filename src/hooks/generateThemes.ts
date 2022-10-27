import { compileTheme } from "../theme";
import { CatppuccinFlavour, ThemeOptions } from "../types";
import { getThemePaths } from "../helpers";
import * as fs from "fs";
import path = require("path");

const defaultOptions: ThemeOptions = {
  accent: "mauve",
  italicComments: true,
  italicKeywords: true,
  colorOverrides: undefined,
};

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
  fs.mkdir(path.dirname(paths[flavour]), (_) => {
    fs.writeFileSync(paths[flavour], JSON.stringify(theme, null, 2));
  });
});
