import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { repoRoot, vscodeSchemasRoot } from "./constants";

const accents = [
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

const customUiColorsSchema = (workbenchColors: any) => {
  const validColors = [...accents, "accent"];
  return {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    additionalProperties: false,
    required: [],
    properties: {
      all: { $ref: "#/$defs/catppuccinWorkbenchColors" },
      latte: { $ref: "#/$defs/catppuccinWorkbenchColors" },
      frappe: { $ref: "#/$defs/catppuccinWorkbenchColors" },
      macchiato: { $ref: "#/$defs/catppuccinWorkbenchColors" },
      mocha: { $ref: "#/$defs/catppuccinWorkbenchColors" },
    },
    $defs: {
      catppuccinColor: {
        anyOf: [
          // allow plain color names,
          { enum: validColors },
          // custom hex codes,
          { format: "color-hex" },
          // and plain color names + opacity
          {
            type: "string",
            pattern: `^(${validColors.join("|")})\\s\\d\\.\\d+$`,
          },
        ],
      },
      catppuccinWorkbenchColors: {
        type: "object",
        additionalProperties: false,
        required: [],
        properties: workbenchColors,
      },
    },
  };
};

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
        $ref: `https://cdn.jsdelivr.net/gh/catppuccin/vscode@v${version}/schemas/colorOverrides.schema.json`,
      },
      "catppuccin.customUIColors": {
        type: "object",
        default: {},
        markdownDescription:
          "Customize UI colors. Map `workbench.colorCustomizations` to palette colors. See [the docs](https://github.com/catppuccin/vscode#use-palette-colors-on-workbench-elements-ui) for reference.",
        $ref: `https://cdn.jsdelivr.net/gh/catppuccin/vscode@v${version}/schemas/customUIColors.schema.json`,
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

fetch(vscodeSchemasRoot + "workbench-colors.json")
  .then((data) => data.json())
  .then((data: any) => {
    const schema = customUiColorsSchema(
      Object.entries<any>(data.properties).reduce(
        (acc, [name, { description }]) => {
          acc[name] = {
            description,
            $ref: "#/$defs/catppuccinColor",
          };
          return acc;
        },
        {} as any,
      ),
    );
    writeFile(
      join(repoRoot, "schemas/customUIColors.schema.json"),
      JSON.stringify(schema, null, 2),
      "utf-8",
    );
  });

readFile(join(repoRoot, "package.json"), "utf-8")
  .then((data) => JSON.parse(data))
  .then((data) => {
    return {
      ...data,
      contributes: {
        ...data.contributes,
        configuration: configuration(data.version),
      },
    };
  })
  .then((data) =>
    writeFile(
      join(repoRoot, "package.json"),
      JSON.stringify(data, null, 2) + "\n",
      "utf-8",
    ),
  );
