import {
  workspace,
  ConfigurationChangeEvent,
  window,
  ExtensionContext,
} from "vscode";

export const activate = (context: ExtensionContext) => {
  context.subscriptions.push(
    workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
      if (event.affectsConfiguration("catppuccin")) {
        window.showErrorMessage(
          "VSCode Web doesn't support advanced Catppuccin options at the moment.",
        );
      }
    }),
  );
};
