import { variants } from "@catppuccin/palette";
import { compileTheme, defaultOptions } from "./theme";
import {
  commands,
  workspace,
  window,
  Uri,
  FilePermission,
  ExtensionContext,
} from "vscode";
import type {
  CatppuccinAccent,
  CatppuccinFlavour,
  ColorOverrides,
  CustomUIColors,
  ThemeOptions,
  ThemePaths,
  CatppuccinWorkbenchMode,
  CatppuccinBracketMode,
} from "./types";

// the reason why an update has been triggered, and a reload is needed
export enum UpdateTrigger {
  CONFIG_CHANGE = "Configuration changed",
  FRESH_INSTALL = "Update detected",
}

class Utils {
  private promptToReload = (trigger: UpdateTrigger) => {
    const msg = `Catppuccin: ${trigger} - Reload required.`;
    const action = "Reload window";
    window.showInformationMessage(msg, action).then((selectedAction) => {
      if (selectedAction === action) {
        commands.executeCommand("workbench.action.reloadWindow");
      }
    });
  };
  private writeThemeFile = async (uri: Uri, data: any): Promise<void> => {
    return workspace.fs
      .writeFile(uri, Buffer.from(JSON.stringify(data, null, 2)))
      .then(
        () => {},
        (err) => {
          window.showErrorMessage(err.message);
        },
      );
  };
  private fileExists = async (uri: Uri): Promise<boolean> => {
    return workspace.fs.stat(uri).then(
      () => true,
      () => false,
    );
  };
  isMutable = async (uri: Uri): Promise<boolean> => {
    return workspace.fs.stat(uri).then(
      (stat) => stat.permissions !== FilePermission.Readonly,
      (err) => err,
    );
  };
  isFreshInstall = async (
    ctx: ExtensionContext,
  ): Promise<boolean | "error"> => {
    console.log("Checking if catppuccin is installed for the first time.");
    const flagUri = Uri.file(ctx.asAbsolutePath("themes/.flag"));
    if (await this.fileExists(flagUri)) {
      console.log("Catppuccin has been installed before.");
      return false;
    } else {
      console.log("Catppuccin is installed for the first time!");
      return workspace.fs.writeFile(flagUri, Buffer.from("")).then(
        () => true,
        () => "error",
      );
    }
  };
  isDefaultConfig = (): boolean => {
    console.log("Checking if catppuccin is using default config.");
    const state =
      JSON.stringify(this.getConfiguration()) ===
      JSON.stringify(defaultOptions);
    console.log(`Catppuccin is using ${state ? "default" : "custom"} config.`);

    return state;
  };
  getConfiguration = (): ThemeOptions => {
    const conf = workspace.getConfiguration("catppuccin");
    return {
      accent:
        conf.get<CatppuccinAccent>("accentColor") ?? defaultOptions.accent,
      boldKeywords:
        conf.get<boolean>("boldKeywords") ?? defaultOptions.boldKeywords,
      italicKeywords:
        conf.get<boolean>("italicKeywords") ?? defaultOptions.italicKeywords,
      italicComments:
        conf.get<boolean>("italicComments") ?? defaultOptions.italicComments,
      colorOverrides:
        conf.get<ColorOverrides>("colorOverrides") ??
        defaultOptions.colorOverrides,
      workbenchMode:
        conf.get<CatppuccinWorkbenchMode>("workbenchMode") ??
        defaultOptions.workbenchMode,
      bracketMode:
        conf.get<CatppuccinBracketMode>("bracketMode") ??
        defaultOptions.bracketMode,
      extraBordersEnabled:
        conf.get<boolean>("extraBordersEnabled") ??
        defaultOptions.extraBordersEnabled,
      customUIColors:
        conf.get<CustomUIColors>("customUIColors") ??
        defaultOptions.customUIColors,
    };
  };
  updateThemes = async (
    options: ThemeOptions,
    paths: ThemePaths,
    trigger: UpdateTrigger,
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
