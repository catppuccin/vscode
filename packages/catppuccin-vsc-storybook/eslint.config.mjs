import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";
import parentConfig from "../../eslint.config.mjs";

export default defineConfig([
  parentConfig,
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      "storybook/no-uninstalled-addons": [
        "error",
        {
          packageJsonLocation: "packages/catppuccin-vsc-storybook/package.json",
        },
      ],
    },
  },
]);
