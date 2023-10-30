import { ExtensionContext, Uri, workspace } from "vscode";
import * as utils from "./utils";
import type { ThemePaths } from "./types";

export const activate = async (ctx: ExtensionContext) => {
  const base = ctx.extensionUri;
  const paths: ThemePaths = {
    latte: Uri.joinPath(base, "themes", "latte.json"),
    frappe: Uri.joinPath(base, "themes", "frappe.json"),
    macchiato: Uri.joinPath(base, "themes", "macchiato.json"),
    mocha: Uri.joinPath(base, "themes", "mocha.json"),
  };

  // regenerate on a fresh install if non-default config is set
  if ((await utils.isFreshInstall(ctx)) && !utils.isDefaultConfig()) {
    utils.updateThemes(
      utils.getConfiguration(),
      paths,
      utils.UpdateTrigger.FRESH_INSTALL,
    );
  }

  ctx.subscriptions.push(
    workspace.onDidChangeConfiguration((event) => {
      // regenerate the theme files when the config changes
      if (event.affectsConfiguration("catppuccin")) {
        utils.updateThemes(
          utils.getConfiguration(),
          paths,
          utils.UpdateTrigger.CONFIG_CHANGE,
        );
      }
      // call the icon pack sync when the theme changes
      if (event.affectsConfiguration("workbench.colorTheme")) {
        utils.syncToIconPack();
      }
    }),
  );

  // call the icon pack sync on activation
  utils.syncToIconPack();
};
