import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import mocha from "catppuccin-vsc/themes/mocha.json";
import macchiato from "catppuccin-vsc/themes/macchiato.json";
import frappe from "catppuccin-vsc/themes/frappe.json";
import latte from "catppuccin-vsc/themes/latte.json";

(async () => {
  await mkdir(join(__dirname, `themes`), { recursive: true });
  await Promise.all([
    writeFile(
      join(__dirname, `themes/mocha.json`),
      JSON.stringify(mocha, null, 2),
    ),
    writeFile(
      join(__dirname, `themes/macchiato.json`),
      JSON.stringify(macchiato, null, 2),
    ),
    writeFile(
      join(__dirname, `themes/frappe.json`),
      JSON.stringify(frappe, null, 2),
    ),
    writeFile(
      join(__dirname, `themes/latte.json`),
      JSON.stringify(latte, null, 2),
    ),
  ]);
})();
