/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      // eslint is having trouble linting its own config file
      files: [".eslintrc.js"],
      rules: { "@typescript-eslint/no-var-requires": "off", "no-undef": "off" },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-restricted-imports": [
      "error",
      { paths: require("node:module").builtinModules },
    ],
    "no-restricted-modules": [
      "error",
      { paths: require("node:module").builtinModules },
    ],
  },
};
