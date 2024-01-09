/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-restricted-modules
const nodeStdLibrary = require("node:module").builtinModules.map(
  (module) => `node:${module}`,
);

/** @type {import("eslint").Linter["config"]} */
module.exports = {
  rules: {
    "no-restricted-imports": ["error", { paths: nodeStdLibrary }],
    "no-restricted-modules": ["error", { paths: nodeStdLibrary }],
  },
  overrides: [
    {
      files: "./src/hooks/**/*.ts",
      rules: {
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
      },
    },
  ],
};
