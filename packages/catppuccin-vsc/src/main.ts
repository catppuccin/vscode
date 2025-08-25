import { ExtensionContext, Uri, window, workspace } from "vscode";
import type { ThemePaths } from "./types";
import * as utilities from "./utilities";

export const activate = async (context: ExtensionContext) => {
  const base = context.extensionUri;
  const paths: ThemePaths = {
    latte: Uri.joinPath(base, "themes", "latte.json"),
    frappe: Uri.joinPath(base, "themes", "frappe.json"),
    macchiato: Uri.joinPath(base, "themes", "macchiato.json"),
    mocha: Uri.joinPath(base, "themes", "mocha.json"),
  };

  const config = utilities.getConfiguration();

  // regenerate on a fresh install if non-default config is set
  if (
    (await utilities.isFreshInstall(context)) &&
    !utilities.isDefaultConfig()
  ) {
    utilities.updateThemes(
      config,
      paths,
      utilities.UpdateTrigger.FRESH_INSTALL,
    );
  }

  context.subscriptions.push(
    workspace.onDidChangeConfiguration((event) => {
      // regenerate the theme files when the config changes
      if (event.affectsConfiguration("catppuccin")) {
        utilities.updateThemes(
          utilities.getConfiguration(),
          paths,
          utilities.UpdateTrigger.CONFIG_CHANGE,
        );
      }
      // call the icon pack sync when the config changes
      if (
        event.affectsConfiguration("workbench.colorTheme") &&
        config.syncWithIconPack
      ) {
        utilities.syncToIconPack();
      }
    }),

    // call the icon pack sync when the theme changes
    window.onDidChangeActiveColorTheme(() => {
      if (config.syncWithIconPack) {
        utilities.syncToIconPack();
      }
    }),
  );

  // call the icon pack sync on activation
  if (config.syncWithIconPack) {
    utilities.syncToIconPack();
  }
};
