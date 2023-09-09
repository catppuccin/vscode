import {
  ConfigurationChangeEvent,
  ExtensionContext,
  Uri,
  extensions,
  workspace,
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

  ctx.subscriptions.push(
    // regenerate the theme files when the config changes
    workspace.onDidChangeConfiguration((event) => handler(event, paths)),
  );
};

const handler = (event: ConfigurationChangeEvent, paths: ThemePaths) => {
  const id = "catppuccin.catppuccin-vsc-icons";
  const iconsActive = extensions.getExtension(id)?.isActive;
  const iconsAffected = event.affectsConfiguration("workbench.colorTheme");

  if (iconsActive && iconsAffected) {
    const theme = workspace
      .getConfiguration("workbench")
      .get<string>("colorTheme");
    if (theme) {
      const ctp_themes = {
        "Catppuccin Latte": "catppuccin-latte",
        "Catppuccin Frappé": "catppuccin-frappe",
        "Catppuccin Macchiato": "catppuccin-macchiato",
        "Catppuccin Mocha": "catppuccin-mocha",
      };
      workspace
        .getConfiguration("workbench")
        .update(
          "iconTheme",
          ctp_themes[theme as keyof typeof ctp_themes],
          true,
        );
    }
  }

  if (event.affectsConfiguration("catppuccin")) {
    utils.updateThemes(
      utils.getConfiguration(),
      paths,
      UpdateTrigger.CONFIG_CHANGE,
    );
  }
};
