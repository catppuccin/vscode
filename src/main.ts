import { workspace, window, ConfigurationChangeEvent } from "vscode";
import { getThemePaths } from "./helpers";
import utils from "./utils";

export const activate = () => {
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("catppuccin")) {
      const config = utils.getConfiguration();
      const paths = getThemePaths();
      utils.updateThemes(config, paths);
      window.showInformationMessage(
        "Catppuccin Configuration changed, re-generating the JSON theme."
      );
    }
  });
};

export const deactivate = () => {};
