import type { StorybookConfig } from "@storybook/web-components-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      // allow top level await
      build: {
        target: ["es2022", "edge89", "firefox89", "chrome89", "safari15"],
      },
      // doesn't allow files served from yarn global cache (used for fontsource)
      server: { fs: { strict: false } },
    });
  },
};
export default config;
