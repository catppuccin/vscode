// eslint-disable-next-line no-restricted-modules, @typescript-eslint/no-var-requires
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
        "no-restricted-imports": ["off", { paths: nodeStdLibrary }],
        "no-restricted-modules": ["off", { paths: nodeStdLibrary }],
      },
    },
  ],
};
