/* eslint-disable @typescript-eslint/no-explicit-any */

import { writeFile } from "node:fs/promises";
import path from "node:path";
import { flavors } from "@catppuccin/palette";

import { repoRoot } from "./constants";
import { accents } from "./packageJson";

// VSCode 1.98.2
const vscodeSchemasRoot =
  "https://raw.githubusercontent.com/ota-meshi/extract-vscode-schemas/bd18db29edb183a0d8b0b8250b22dbd4428a0da8/resources/vscode/schemas/";

const ctpColors = flavors.mocha.colorEntries.map(([name]) => name);

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
          { enum: [...ctpColors, "accent"] },
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

await fetch(vscodeSchemasRoot + "workbench-colors.json")
  .then((data) => data.json())
  .then((data: any) => {
    const workbenchColors = {} as {
      [name: string]: { description: string; $ref: string };
    };
    for (const [name, { description }] of Object.entries<any>(
      data.properties,
    )) {
      workbenchColors[name] = {
        description,
        $ref: "#/$defs/catppuccinColor",
      };
    }
    const schema = customUiColorsSchema(workbenchColors);
    writeFile(
      path.join(repoRoot, "schemas/customUIColors.schema.json"),
      JSON.stringify(schema, undefined, 2) + "\n",
      "utf8",
    );
  });
