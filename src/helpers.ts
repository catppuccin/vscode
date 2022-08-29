import * as fs from "fs";
import { join } from "path";
import { ThemePaths } from "./types";

export const getThemePaths = (): ThemePaths => {
    const themes = ["latte", "frappe", "macchiato", "mocha"];
    const paths: ThemePaths = {
        latte: "",
        frappe: "",
        macchiato: "",
        mocha: "",
    };
    themes.map(
        (theme) =>
            (paths[theme] = join(
                __dirname,
                "..",
                "themes",
                `Catppuccin-${theme}-color-theme.json`
            ))
    );
    return paths;
};

const writeFile = (path: string, data: unknown) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
            err ? reject(err) : resolve("Success")
        );
    });
};

const saveThemeJSON = (path, data: any): void => {
    writeFile(path, data)
        .then(() => {
            console.log("Generated theme");
        })
        .catch((err) => {
            console.log(err);
        });
};
