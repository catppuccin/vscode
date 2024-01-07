/* eslint @typescript-eslint/no-var-requires: off, no-undef: off */

const nodeStdLibrary = require("node:module").builtinModules.flatMap(
  (module) => [module, `node:${module}`],
);

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
  ],
  overrides: [
    {
      files: ["packages/catppuccin-vsc/src/**/*"],
      rules: {
        "no-restricted-imports": ["error", { paths: nodeStdLibrary }],
        "no-restricted-modules": ["error", { paths: nodeStdLibrary }],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "unicorn/filename-case": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-top-level-await": "off",
  },
};
