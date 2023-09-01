import { workspace, ConfigurationChangeEvent, window } from "vscode";

export const activate = () => {
  // regenerate the theme files when the config changes
  workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
    if (event.affectsConfiguration("catppuccin")) {
      window.showInformationMessage(
        "VSCode Web doesn't support advanced Catppuccin options at the moment.",
      );
    }
  });
};

export const deactivate = () => {};
