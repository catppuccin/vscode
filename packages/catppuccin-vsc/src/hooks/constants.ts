import path from "node:path";
import { fileURLToPath } from "node:url";

const root =
  typeof __dirname === "undefined"
    ? path.dirname(fileURLToPath(import.meta.url))
    : __dirname;

export const vscodeSchemasRoot =
  "https://raw.githubusercontent.com/wraith13/vscode-schemas/master/en/latest/schemas/";
export const repoRoot = path.join(root, "../..");
