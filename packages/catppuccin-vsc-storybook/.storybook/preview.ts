import type { Preview } from "@storybook/web-components";
import { withThemeByClassName } from "@storybook/addon-themes";
import "./style.css";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        xl: { name: "XL", styles: { width: "2400px" } },
      },
    },
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
