import { variants } from "@catppuccin/palette";
import { compileTheme, defaultOptions } from "./theme";
import {
  commands,
  workspace,
  window,
  Uri,
  FilePermission,
  ExtensionContext,
  extensions,
  ConfigurationTarget,
} from "vscode";
import type {
  CatppuccinAccent,
  CatppuccinFlavor,
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

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

const filterObject = <T extends object>(
  obj: T,
  fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean,
) => {
  return Object.fromEntries(
    (Object.entries(obj) as Entry<T>[]).filter(fn),
  ) as Partial<T>;
};

export const promptToReload = (trigger: UpdateTrigger) => {
  const msg = `Catppuccin: ${trigger} - Reload required.`;
  const action = "Reload window";
  window.showInformationMessage(msg, action).then((selectedAction) => {
    if (selectedAction === action) {
      commands.executeCommand("workbench.action.reloadWindow");
    }
  });
};

const writeThemeFile = async (uri: Uri, data: any): Promise<void> => {
  return workspace.fs
    .writeFile(uri, Buffer.from(JSON.stringify(data, null, 2)))
    .then(
      () => {},
      (err) => {
        window.showErrorMessage(err.message);
      },
    );
};

const fileExists = async (uri: Uri): Promise<boolean> => {
  return workspace.fs.stat(uri).then(
    () => true,
    () => false,
  );
};

// TODO: listen to this to determine if a user is using Nix, redirect to README
export const isMutable = async (uri: Uri): Promise<boolean> => {
  return workspace.fs.stat(uri).then(
    (stat) => stat.permissions !== FilePermission.Readonly,
    (err) => err,
  );
};

export const isFreshInstall = async (
  ctx: ExtensionContext,
): Promise<boolean | "error"> => {
  console.log("Checking if catppuccin is installed for the first time.");
  const flagUri = Uri.file(ctx.asAbsolutePath("themes/.flag"));
  if (await fileExists(flagUri)) {
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

export const isDefaultConfig = (): boolean => {
  console.log("Checking if catppuccin is using default config.");
  const state =
    JSON.stringify(getConfiguration()) === JSON.stringify(defaultOptions);
  console.log(`Catppuccin is using ${state ? "default" : "custom"} config.`);

  return state;
};

export const getConfiguration = (): ThemeOptions => {
  const conf = workspace.getConfiguration("catppuccin");
  const options = {
    accent: conf.get<CatppuccinAccent>("accentColor"),
    boldKeywords: conf.get<boolean>("boldKeywords"),
    italicKeywords: conf.get<boolean>("italicKeywords"),
    italicComments: conf.get<boolean>("italicComments"),
    colorOverrides: conf.get<ColorOverrides>("colorOverrides"),
    workbenchMode: conf.get<CatppuccinWorkbenchMode>("workbenchMode"),
    bracketMode: conf.get<CatppuccinBracketMode>("bracketMode"),
    extraBordersEnabled: conf.get<boolean>("extraBordersEnabled"),
    customUIColors: conf.get<CustomUIColors>("customUIColors"),
    underlinedSemanticTokens: conf.get<boolean>("underlinedSemanticTokens"),
  } satisfies Partial<ThemeOptions>;
  return {
    ...defaultOptions,
    ...filterObject(options, ([, value]) => value !== undefined),
  };
};

export const updateThemes = async (
  options: ThemeOptions,
  paths: ThemePaths,
  trigger: UpdateTrigger,
) => {
  const flavors = Object.keys(variants) as CatppuccinFlavor[];

  const promises = flavors.map(async (flavor): Promise<void> => {
    const theme = compileTheme(flavor, options);
    return writeThemeFile(paths[flavor], theme);
  });

  Promise.all(promises).then(() => {
    promptToReload(trigger);
  });
};

export const syncToIconPack = () => {
  const id = "catppuccin.catppuccin-vsc-icons";
  // bail if the icon pack isn't installed
  if (extensions.getExtension(id) === undefined) return;

  // mapping the Catppuccin Theme names to the icon pack names
  const uiThemesToIconThemes = {
    "Catppuccin Latte": "catppuccin-latte",
    "Catppuccin Frappé": "catppuccin-frappe",
    "Catppuccin Macchiato": "catppuccin-macchiato",
    "Catppuccin Mocha": "catppuccin-mocha",
  };

  // check if the current editor theme is a Catppuccin theme
  const uiTheme =
    workspace.getConfiguration("workbench").get<string>("colorTheme") ?? "";
  const ctpThemeActive = Object.keys(uiThemesToIconThemes).includes(uiTheme);

  // and only sync to a Catppuccin icon flavor if the user's currently using Catppuccin for icons
  const ctpIconsActive = Object.values(uiThemesToIconThemes).includes(
    workspace.getConfiguration("workbench").get<string>("iconTheme") ?? "",
  );

  if (ctpThemeActive && ctpIconsActive) {
    const iconTheme =
      uiThemesToIconThemes[uiTheme as keyof typeof uiThemesToIconThemes];
    workspace
      .getConfiguration("workbench")
      .update("iconTheme", iconTheme, ConfigurationTarget.Global);
  }
};
