import { workspace } from "vscode";
import { join } from "path";
import { updateThemes } from "./theme";
import utils from "./utils";

export const activate = () => {
    workspace.onDidChangeConfiguration(() => {
        const config = utils.getConfiguration();
        const themes = ["latte", "frappe", "macchiato", "mocha"];
        const paths = {};
        themes.map(
            (theme) =>
                (paths[theme] = join(
                    __dirname,
                    "..",
                    "themes",
                    `Catppuccin-${theme}-color-theme.json`
                ))
        );
        updateThemes(config, paths);
    });
};

export const deactivate = () => {};
