import { variants } from "@catppuccin/palette";
import * as fs from "fs";
import { compileTheme } from "./theme";
import { workspace, window, commands } from "vscode";
import type {
  CatppuccinAccent,
  CatppuccinFlavour,
  ColorOverrides,
  ThemeOptions,
  ThemePaths,
} from "./types";

class Utils {
  private promptToReload() {
    const action = "Reload";
    window
      .showInformationMessage("Reload required.", action)
      .then((selectedAction) => {
        if (selectedAction === action) {
          commands.executeCommand("workbench.action.reloadWindow");
        }
      });
  }
  private async writeFile(path: string, data: string | NodeJS.ArrayBufferView) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  }
  getConfiguration = (): ThemeOptions => {
    const workspaceConfiguration = workspace.getConfiguration("catppuccin");
    return {
      accent: workspaceConfiguration.get<CatppuccinAccent>("accentColor"),
      italicKeywords: workspaceConfiguration.get<boolean>("italicKeywords"),
      italicComments: workspaceConfiguration.get<boolean>("italicComments"),
      colorOverrides:
        workspaceConfiguration.get<ColorOverrides>("colorOverrides"),
    };
  };
  saveThemeJSON = (path: string, data: any): void => {
    this.writeFile(path, data);
  };
  updateThemes = (options: ThemeOptions, paths: ThemePaths) => {
    const flavours = Object.keys(variants) as CatppuccinFlavour[];
    // TODO: use fsPromises instead of maps, then prompt to reloadA
    //       wait for Promises.All, then prompt to reload
    flavours.map((flavour) => {
      const theme = compileTheme(flavour, options);
      this.saveThemeJSON(paths[flavour], theme);
    });
    this.promptToReload();
  };
}

export default new Utils();
