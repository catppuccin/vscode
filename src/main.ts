import {
  workspace,
  ConfigurationChangeEvent,
  extensions,
  ExtensionContext,
} from "vscode";
import type * as MarkdownIt from "markdown-it";
import { getThemePaths } from "./helpers";
import utils, { UpdateTrigger } from "./utils";
import { ThemeOptions } from "./types";
import { resolvePalette } from "./theme";

export const activate = (ctx: ExtensionContext) => {
  const paths = getThemePaths();

  // regenerate on a fresh install if non-default config is set
  if (utils.isFreshInstall() && !utils.isDefaultConfig()) {
    utils.updateThemes(
      utils.getConfiguration(),
      paths,
      UpdateTrigger.FRESH_INSTALL,
    );
  }

  // regenerate the theme files when the config changes
  const configChange = workspace.onDidChangeConfiguration(
    (event: ConfigurationChangeEvent) => {
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
    },
  );

  ctx.subscriptions.push(configChange);

  return {
    extendMarkdownIt(md: MarkdownIt) {
      return md.use(plugin, {
        config: utils.getConfiguration(),
      });
    },
  };
};

const plugin: MarkdownIt.PluginWithOptions<{
  config: ThemeOptions;
  theme: string;
}> = (md: MarkdownIt, options): void => {
  const render = md.renderer.render;

  const theme = workspace
    .getConfiguration("workbench")
    .get<string>("colorTheme");
  const ctp_themes = {
    "Catppuccin Latte": "latte",
    "Catppuccin Frappé": "frappe",
    "Catppuccin Macchiato": "macchiato",
    "Catppuccin Mocha": "mocha",
  };
  if (!Object.keys(ctp_themes).includes(theme)) {
    return;
  }

  const palette = resolvePalette(ctp_themes[theme], options.config);
  const css = Object.entries(palette).map(([k, v]) => {
    if (k == "name") return;

    const hex2rgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r} ${g} ${b}`;
    };
    return `--ctp-${k}: ${hex2rgb(v)};`;
  });

  const cssString = css.join(" ");

  md.renderer.render = function (...args) {
    return `<div 
      style="${cssString}"
    >${render.apply(md.renderer, args)}</div>`;
  };
};

export const deactivate = () => {};
