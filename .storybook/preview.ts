import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "./style.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    withThemeByClassName({
      themes: {
        latte: "latte",
        frappe: "frappe",
        macchiato: "macchiato",
        mocha: "mocha",
      },
      defaultTheme: "mocha",
    }),
  ],
};

export default preview;
