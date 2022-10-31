import { workspace, ConfigurationChangeEvent } from "vscode";
import { getThemePaths } from "./helpers";
import utils, { UpdateTrigger } from "./utils";

export const activate = () => {
  const paths = getThemePaths();

  // regenerate on a fresh install if non-default config is set
  if (utils.isFreshInstall() && !utils.isDefaultConfig()) {
    utils.updateThemes(
      utils.getConfiguration(),
      paths,
      UpdateTrigger.FRESH_INSTALL
    );
  }

  // regenerate the theme files when the config changes
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("catppuccin")) {
      utils.updateThemes(
        utils.getConfiguration(),
        paths,
        UpdateTrigger.CONFIG_CHANGE
      );
    }
  });
};

export const deactivate = () => {};
