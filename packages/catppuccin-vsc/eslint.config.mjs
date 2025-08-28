import { defineConfig } from "eslint/config";
import parentConfig from "../../eslint.config.mjs";
import { builtinModules } from "node:module";

const nodeStdLibrary = builtinModules.map((module) => `node:${module}`);

export default defineConfig([
  parentConfig,
  {
    files: ["**/*.ts"],
    rules: {
      "no-restricted-imports": ["error", { paths: nodeStdLibrary }],
      "no-restricted-modules": ["error", { paths: nodeStdLibrary }],
    },
  },
  {
    files: ["./src/hooks/**/*.ts"],
    rules: {
      "no-restricted-imports": "off",
      "no-restricted-modules": "off",
    },
  },
]);
