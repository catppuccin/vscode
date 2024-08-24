import { ExtensionContext, Uri, window, workspace } from "vscode";
import type { ThemePaths } from "./types";
import * as utils from "./utils";

export const activate = async (context: ExtensionContext) => {
  const base = context.extensionUri;
  const paths: ThemePaths = {
    latte: Uri.joinPath(base, "themes", "latte.json"),
    frappe: Uri.joinPath(base, "themes", "frappe.json"),
    macchiato: Uri.joinPath(base, "themes", "macchiato.json"),
    mocha: Uri.joinPath(base, "themes", "mocha.json"),
  };

  const config = utils.getConfiguration();

  // regenerate on a fresh install if non-default config is set
  if ((await utils.isFreshInstall(context)) && !utils.isDefaultConfig()) {
    utils.updateThemes(config, paths, utils.UpdateTrigger.FRESH_INSTALL);
  }

  context.subscriptions.push(
    workspace.onDidChangeConfiguration((event) => {
      // regenerate the theme files when the config changes
      if (event.affectsConfiguration("catppuccin")) {
        utils.updateThemes(
          utils.getConfiguration(),
          paths,
          utils.UpdateTrigger.CONFIG_CHANGE,
        );
      }
      // call the icon pack sync when the config changes
      if (
        event.affectsConfiguration("workbench.colorTheme") &&
        config.syncWithIconPack
      ) {
        utils.syncToIconPack();
      }
    }),

    // call the icon pack sync when the theme changes
    window.onDidChangeActiveColorTheme(() => {
      if (config.syncWithIconPack) {
        utils.syncToIconPack();
      }
    }),
  );

  // call the icon pack sync on activation
  if (config.syncWithIconPack) {
    utils.syncToIconPack();
  }
};
