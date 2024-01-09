import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { repoRoot } from "./constants";

export const accents = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender",
];

const configuration = (version: string) => {
  return {
    title: "Catppuccin",
    properties: {
      "catppuccin.boldKeywords": {
        type: "boolean",
        default: true,
        markdownDescription: "Controls whether to use **bold** for keywords.",
      },
      "catppuccin.italicComments": {
        type: "boolean",
        default: true,
        markdownDescription: "Controls whether to use *italics* for comments.",
      },
      "catppuccin.italicKeywords": {
        type: "boolean",
        default: true,
        markdownDescription: "Controls whether to use *italics* for keywords.",
      },
      "catppuccin.colorOverrides": {
        type: "object",
        default: {},
        markdownDescription:
          "Custom color overrides. Assign your own hex codes to palette colors. See [the docs](https://github.com/catppuccin/vscode#override-palette-colors) for reference.",
        $ref: `https://cdn.jsdelivr.net/gh/catppuccin/vscode@catppuccin-vsc-v${version}/packages/catppuccin-vsc/schemas/colorOverrides.schema.json`,
      },
      "catppuccin.customUIColors": {
        type: "object",
        default: {},
        markdownDescription:
          "Customize UI colors. Map `workbench.colorCustomizations` to palette colors. See [the docs](https://github.com/catppuccin/vscode#use-palette-colors-on-workbench-elements-ui) for reference.",
        $ref: `https://cdn.jsdelivr.net/gh/catppuccin/vscode@catppuccin-vsc-v${version}/packages/catppuccin-vsc/schemas/customUIColors.schema.json`,
      },
      "catppuccin.accentColor": {
        type: "string",
        default: "mauve",
        description: "Controls which accent color to use.",
        enum: accents,
      },
      "catppuccin.workbenchMode": {
        type: "string",
        default: "default",
        description: "Controls how the workbench should be styled.",
        enum: ["default", "flat", "minimal"],
        enumDescriptions: [
          "The default look, using 3 shades of the base color.",
          "A more flat look, using 2 shades of the base color.",
          "A minimal look, using 1 shade of the base color.",
        ],
      },
      "catppuccin.bracketMode": {
        type: "string",
        default: "rainbow",
        description: "Controls how bracket pairs should be themed",
        enum: ["rainbow", "dimmed", "monochromatic", "neovim"],
        enumDescriptions: [
          "Uses 6 rainbow colors for matching bracket pairs.",
          "Uses the same 6 rainbow colors as `rainbow`, but has a dimmed appearance.",
          "A monochromatic, grey appearance for matching bracket pairs.",
          "Uses the same bracket pair colors as our neovim port.",
        ],
      },
      "catppuccin.extraBordersEnabled": {
        type: "boolean",
        default: false,
        description:
          "Controls whether borders should be enabled on some additional UI elements.",
      },
    },
  };
};

const main = async (options: { buildForADS?: boolean } = {}) => {
  const productName = options.buildForADS ? "Azure Data Studio" : "VSCode";

  return await readFile(join(repoRoot, "package.json"), "utf8")
    .then((data) => JSON.parse(data))
    .then((data) => {
      return {
        ...data,
        displayName: `Catppuccin for ${productName}`,
        description: `🦌 Soothing pastel theme for ${productName}`,
        contributes: {
          ...data.contributes,
          configuration: configuration(data.version),
        },
      };
    })
    .then((data) => {
      writeFile(
        join(repoRoot, "package.json"),
        JSON.stringify(data, undefined, 2) + "\n",
        "utf8",
      );
      return data;
    });
};

export default main;
