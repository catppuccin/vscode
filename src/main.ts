import { workspace, ConfigurationChangeEvent } from "vscode";
import { getThemePaths } from "./helpers";
import utils, { UpdateTrigger } from "./utils";

export const activate = () => {
  const config = utils.getConfiguration();
  const paths = getThemePaths();

  // regenerate the theme files when the config changes
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("catppuccin")) {
      utils.updateThemes(config, paths, UpdateTrigger.CONFIG_CHANGE);
    }
  });

  // regenerate on a fresh install if non-default config is set
  if (utils.isFreshInstall() && !utils.isDefaultConfig()) {
    utils.updateThemes(config, paths, UpdateTrigger.FRESH_INSTALL);
  }
};

export const deactivate = () => {};
