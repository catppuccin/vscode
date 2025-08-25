import { defineConfig } from "eslint/config";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2021,
      },
      globals: {
        ...globals.node,
        ...globals.es2023,
      },
    },
    rules: {
      "unicorn/filename-case": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prefer-string-raw": "off",
    },
    extends: [
      js.configs.recommended,
      eslintPluginUnicorn.configs.recommended,
      tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
  },
]);
