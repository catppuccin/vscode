import * as path from "path";
import { writeFileSync } from "fs";
import fetch from "node-fetch";
const vscodeSchemasRoot =
  "https://raw.githubusercontent.com/wraith13/vscode-schemas/master/en/latest/schemas/";

fetch(vscodeSchemasRoot + "workbench-colors.json")
  .then((data) => data.json())
  .then((data) => {
    const extracted = Object.entries<any>(data.properties).reduce(
      (acc, [name, { type, description }]) => {
        acc[name] = {
          type,
          description,
          anyOf: [{ format: "color-hex" }, { $ref: "#/$defs/catppuccinColor" }],
        };
        return acc;
      },
      {} as any,
    );

    const schema = {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {
        all: {
          $ref: "#/$defs/catppuccinWorkbenchColors",
        },
        latte: {
          $ref: "#/$defs/catppuccinWorkbenchColors",
        },
        frappe: {
          $ref: "#/$defs/catppuccinWorkbenchColors",
        },
        macchiato: {
          $ref: "#/$defs/catppuccinWorkbenchColors",
        },
        mocha: {
          $ref: "#/$defs/catppuccinWorkbenchColors",
        },
      },
      $defs: {
        catppuccinColor: {
          enum: [
            "accent",
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
          ],
        },
        catppuccinWorkbenchColors: {
          type: "object",
          additionalProperties: false,
          required: [],
          properties: extracted,
        },
      },
    };
    const fp = path.join(__dirname, "../../schemas/customUIColors.schema.json");
    writeFileSync(fp, JSON.stringify(schema, null, 2), "utf-8");
  });
