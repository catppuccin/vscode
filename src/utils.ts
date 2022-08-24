import * as fs from "fs";
import { workspace, window, commands } from "vscode";
import { CatppuccinAccent, ThemeOptions } from "./types";

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
    private async writeFile(path: string, data: unknown) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
                err ? reject(err) : resolve("Success")
            );
        });
    }
    getConfiguration = (): ThemeOptions => {
        const workspaceConfiguration = workspace.getConfiguration("catppuccin");
        return {
            accent: workspaceConfiguration.get<CatppuccinAccent>(
                "accentColour"
            ),
            italicKeywords:
                workspaceConfiguration.get<boolean>("italicKeywords"),
            italicComments:
                workspaceConfiguration.get<boolean>("italicComments"),
        };
    };
    saveThemeJSON = (path, data: any): void => {
        this.writeFile(path, data).then(this.promptToReload);
    };
}

export default new Utils();
