import { workspace } from "vscode";
import { getThemePaths } from "./helpers";
import utils from "./utils";

export const activate = () => {
    workspace.onDidChangeConfiguration(() => {
        const config = utils.getConfiguration();
        const paths = getThemePaths();
        utils.updateThemes(config, paths);
    });
};

export const deactivate = () => {};
