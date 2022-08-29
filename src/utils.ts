import { variants } from "@catppuccin/palette";
import * as fs from "fs";
import { compileTheme } from "./theme";
import { workspace, window, commands } from "vscode";
import type {
    CatppuccinAccent,
    CatppuccinFlavour,
    ThemeOptions,
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
    updateThemes = (options: ThemeOptions, paths) => {
        const flavours = Object.keys(variants) as CatppuccinFlavour[];
        flavours.map((flavour) => {
            const theme = compileTheme(flavour, options);
            this.saveThemeJSON(paths[flavour], theme);
        });
    };
}

export default new Utils();
