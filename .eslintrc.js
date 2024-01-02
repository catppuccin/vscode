const nodeStdLib = [
  ...require("node:module").builtinModules.flatMap((module) => [
    module,
    `node:${module}`,
  ]),
];

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      // eslint is having trouble linting its own config file
      files: [".eslintrc.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "no-undef": "off",
      },
    },
    {
      files: ["packages/catppuccin-vsc/src/**/*"],
      rules: {
        "no-restricted-imports": ["error", { paths: nodeStdLib }],
        "no-restricted-modules": ["error", { paths: nodeStdLib }],
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
    "@typescript-eslint/no-explicit-any": "off",
  },
};
