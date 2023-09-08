import {
  workspace,
  ConfigurationChangeEvent,
  window,
  ExtensionContext,
} from "vscode";

export const activate = (ctx: ExtensionContext) => {
  ctx.subscriptions.push(
    workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
      if (event.affectsConfiguration("catppuccin")) {
        window.showErrorMessage(
          "VSCode Web doesn't support advanced Catppuccin options at the moment.",
        );
      }
    }),
  );
};
