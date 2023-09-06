import {
  workspace,
  ConfigurationChangeEvent,
  extensions,
  ExtensionContext,
  Uri,
} from "vscode";
import utils, { UpdateTrigger } from "./utils";
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
      UpdateTrigger.FRESH_INSTALL,
    );
  }

  // regenerate the theme files when the config changes
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (
      event.affectsConfiguration("workbench.colorTheme") &&
      extensions.getExtension("catppuccin.catppuccin-vsc-icons")
    ) {
      const theme = workspace
        .getConfiguration("workbench")
        .get<string>("colorTheme");
      const ctp_themes = {
        "Catppuccin Latte": "catppuccin-latte",
        "Catppuccin Frappé": "catppuccin-frappe",
        "Catppuccin Macchiato": "catppuccin-macchiato",
        "Catppuccin Mocha": "catppuccin-mocha",
      };
      if (Object.keys(ctp_themes).includes(theme)) {
        workspace
          .getConfiguration("workbench")
          .update("iconTheme", ctp_themes[theme], true);
      }
    }
    if (event.affectsConfiguration("catppuccin")) {
      utils.updateThemes(
        utils.getConfiguration(),
        paths,
        UpdateTrigger.CONFIG_CHANGE,
      );
    }
  });
};

export const deactivate = () => {};
