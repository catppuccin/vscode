import { variants } from "@catppuccin/palette";
import * as fs from "fs";
import { compileTheme, defaultOptions } from "./theme";
import { commands, workspace, window } from "vscode";
import {
  CatppuccinAccent,
  CatppuccinFlavour,
  ColorOverrides,
  CustomUIColors,
  ThemeOptions,
  ThemePaths,
  CatppuccinWorkbenchMode,
  CatppuccinBracketMode,
} from "./types";
import { join } from "path";

// the reason why an update has been triggered, and a reload is needed
export enum UpdateTrigger {
  CONFIG_CHANGE = "Configuration changed",
  FRESH_INSTALL = "Update detected",
}

class Utils {
  private promptToReload(trigger: UpdateTrigger) {
    const msg = `Catppuccin: ${trigger} - Reload required.`;
    const action = "Reload window";
    window.showInformationMessage(msg, action).then((selectedAction) => {
      if (selectedAction === action) {
        commands.executeCommand("workbench.action.reloadWindow");
      }
    });
  }
  private writeThemeFile(path: string, data: any) {
    return fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        window.showErrorMessage(err.message);
      }
    });
  }
  isFreshInstall(): boolean {
    console.log("Checking if catppuccin is installed for the first time.");
    const flagPath = join(__dirname, "..", "themes", ".flag");
    if (fs.existsSync(flagPath)) {
      console.log("Catppuccin is installed for the first time!");
      return false;
    } else {
      console.log("Catppuccin has been installed before.");
      fs.writeFileSync(flagPath, "");
      return true;
    }
  }
  isDefaultConfig(): boolean {
    console.log("Checking if catppuccin is using default config.");
    const state = this.getConfiguration() === defaultOptions;
    console.log(`Catppuccin is using ${state ? "default" : "custom"} config.`);
    return state;
  }
  getConfiguration = (): ThemeOptions => {
    const conf = workspace.getConfiguration("catppuccin");
    return {
      accent: conf.get<CatppuccinAccent>("accentColor"),
      boldKeywords: conf.get<boolean>("boldKeywords"),
      italicKeywords: conf.get<boolean>("italicKeywords"),
      italicComments: conf.get<boolean>("italicComments"),
      colorOverrides: conf.get<ColorOverrides>("colorOverrides"),
      workbenchMode: conf.get<CatppuccinWorkbenchMode>("workbenchMode"),
      bracketMode: conf.get<CatppuccinBracketMode>("bracketMode"),
      extraBordersEnabled: conf.get<boolean>("extraBordersEnabled"),
      customUIColors: conf.get<CustomUIColors>("customUIColors"),
    };
  };
  updateThemes = async (
    options: ThemeOptions,
    paths: ThemePaths,
    trigger: UpdateTrigger
  ) => {
    const flavours = Object.keys(variants) as CatppuccinFlavour[];

    const promises = flavours.map(async (flavour): Promise<void> => {
      const theme = compileTheme(flavour, options);
      return this.writeThemeFile(paths[flavour], theme);
    });

    Promise.all(promises).then(() => {
      this.promptToReload(trigger);
    });
  };
}

export default new Utils();
