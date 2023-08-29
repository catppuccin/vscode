import { writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import fetch from "node-fetch";

const vscodeSchemasRoot =
  "https://raw.githubusercontent.com/wraith13/vscode-schemas/master";

fetch(vscodeSchemasRoot + "/en/latest/schemas/workbench-colors.json")
  .then((data) => data.json())
  .then((data) => {
    compile(data, "WorkbenchColors", {
      additionalProperties: false,
    }).then((typeDefs) => {
      const fp = new URL("../types/workbench.d.ts", import.meta.url).pathname;
      writeFileSync(fp, typeDefs, "utf-8");
    });
  });
