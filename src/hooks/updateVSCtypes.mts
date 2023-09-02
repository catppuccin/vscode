import { writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import fetch from "node-fetch";

const vscodeSchemasRoot =
  "https://raw.githubusercontent.com/wraith13/vscode-schemas/master/en/latest/schemas/";

const mappings = [
  {
    schema: "token-styling.json",
    name: "SemanticTokens",
    fname: "token-styling.d.ts",
  },
  {
    schema: "textmate-colors.json",
    name: "TextmateColors",
    fname: "textmate-colors.d.ts",
  },
  {
    schema: "workbench-colors.json",
    name: "WorkbenchColors",
    fname: "workbench-colors.d.ts",
  },
];

for (const { schema, name, fname } of mappings) {
  fetch(vscodeSchemasRoot + schema)
    .then((data) => data.json())
    .then((data) => {
      compile(data, name, {
        additionalProperties: false,
      }).then((typeDefs) => {
        const fp = new URL(`../types/${fname}`, import.meta.url).pathname;
        writeFileSync(fp, typeDefs, "utf-8");
      });
    });
}
