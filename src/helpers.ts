import { join } from "path";
import { ThemePaths } from "./types";

export const getThemePaths = (): ThemePaths => {
  const themes = ["latte", "frappe", "macchiato", "mocha"];
  const paths: ThemePaths = {
    latte: "",
    frappe: "",
    macchiato: "",
    mocha: "",
  };
  themes.map(
    (theme) => (paths[theme] = join(__dirname, "..", "themes", `${theme}.json`))
  );
  return paths;
};
