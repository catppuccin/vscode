import { workspace, window } from "vscode";
import { getThemePaths } from "./helpers";
import utils from "./utils";

export const activate = () => {
    workspace.onDidChangeConfiguration(() => {
        const config = utils.getConfiguration();
        const paths = getThemePaths();
        utils.updateThemes(config, paths);
        window.showInformationMessage(
            "Catppuccin Configuration changed, re-generating the JSON theme."
        );
    });
};

export const deactivate = () => {};
