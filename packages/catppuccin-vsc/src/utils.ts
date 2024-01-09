import { flavorEntries } from "@catppuccin/palette";
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
  object: T,
  function_: (entry: Entry<T>, index: number, array: Entry<T>[]) => boolean,
) => {
  return Object.fromEntries(
    (Object.entries(object) as Entry<T>[]).filter((element, index, array) =>
      function_(element, index, array),
    ),
  ) as Partial<T>;
};

export const promptToReload = (trigger: UpdateTrigger) => {
  const message = `Catppuccin: ${trigger} - Reload required.`;
  const action = "Reload window";
  window.showInformationMessage(message, action).then((selectedAction) => {
    if (selectedAction === action) {
      commands.executeCommand("workbench.action.reloadWindow");
    }
  });
};

const writeThemeFile = async (uri: Uri, data: unknown): Promise<void> => {
  return workspace.fs
    .writeFile(uri, Buffer.from(JSON.stringify(data, undefined, 2)))
    .then(
      () => {},
      (error) => {
        window.showErrorMessage(error.message);
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
    (error) => error,
  );
};

export const isFreshInstall = async (
  context: ExtensionContext,
): Promise<boolean | "error"> => {
  console.log("Checking if catppuccin is installed for the first time.");
  const flagUri = Uri.file(context.asAbsolutePath("themes/.flag"));
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
  const config = workspace.getConfiguration("catppuccin");
  const options = {
    accent: config.get<CatppuccinAccent>("accentColor"),
    boldKeywords: config.get<boolean>("boldKeywords"),
    italicKeywords: config.get<boolean>("italicKeywords"),
    italicComments: config.get<boolean>("italicComments"),
    colorOverrides: config.get<ColorOverrides>("colorOverrides"),
    workbenchMode: config.get<CatppuccinWorkbenchMode>("workbenchMode"),
    bracketMode: config.get<CatppuccinBracketMode>("bracketMode"),
    extraBordersEnabled: config.get<boolean>("extraBordersEnabled"),
    customUIColors: config.get<CustomUIColors>("customUIColors"),
  };
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
  const flavors = flavorEntries.map(([flavorName]) => flavorName);

  const promises = flavors.map(async (flavor): Promise<void> => {
    const theme = compileTheme(flavor, options);
    return writeThemeFile(paths[flavor], theme);
  });

  Promise.all(promises)
    .then(() => {
      promptToReload(trigger);
    })
    .catch((error) => {
      window.showErrorMessage(
        "Failed to save re-compiled theme: \n" + error.message,
      );
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
