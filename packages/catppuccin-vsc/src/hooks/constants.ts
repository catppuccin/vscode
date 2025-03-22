import path from "node:path";
import { fileURLToPath } from "node:url";

const root =
  typeof __dirname === "undefined"
    ? path.dirname(fileURLToPath(import.meta.url))
    : __dirname;

export const repoRoot = path.join(root, "../..");
