import { compileTheme } from "../theme";
import { CatppuccinFlavour, ThemeOptions } from "../types";
import { getThemePaths } from "../helpers";
import * as fs from "fs";

const defaultOptions: ThemeOptions = {
  accent: "mauve",
  italicComments: true,
  italicKeywords: true,
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
  fs.writeFileSync(paths[flavour], JSON.stringify(theme, null, 2));
});
