import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import { repoRoot, vscodeSchemasRoot } from "./constants";
import { accents } from "./updatePackageJson";

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

const main = async () => {
  await fetch(vscodeSchemasRoot + "workbench-colors.json")
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
        JSON.stringify(schema, null, 2) + "\n",
        "utf-8",
      );
    });
};

export default main;
