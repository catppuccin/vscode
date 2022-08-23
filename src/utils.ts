import { workspace } from "vscode";
import { CatppuccinAccent, ThemeOptions } from "./types";

class Utils {
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
}

export default new Utils();
