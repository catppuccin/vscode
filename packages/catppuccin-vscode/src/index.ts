import latteJson from "catppuccin-vsc/themes/latte.json" with { type: "json" };
import frappeJson from "catppuccin-vsc/themes/frappe.json" with { type: "json" };
import macchiatoJson from "catppuccin-vsc/themes/macchiato.json" with { type: "json" };
import mochaJson from "catppuccin-vsc/themes/mocha.json" with { type: "json" };

export { compile } from "./compile.js";

// shim the name for the Shiki theme, as the name is used for the className

export const latte = {
  ...latteJson,
  name: "catppuccin-latte",
};
export const frappe = {
  ...frappeJson,
  name: "catppuccin-frappe",
};
export const macchiato = {
  ...macchiatoJson,
  name: "catppuccin-macchiato",
};
export const mocha = {
  ...mochaJson,
  name: "catppuccin-mocha",
};
