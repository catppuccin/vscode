import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { build } from "tsup";

import mocha from "catppuccin-vsc/themes/mocha.json" with { type: "json" };
import macchiato from "catppuccin-vsc/themes/macchiato.json" with { type: "json" };
import frappe from "catppuccin-vsc/themes/frappe.json" with { type: "json" };
import latte from "catppuccin-vsc/themes/latte.json" with { type: "json" };

const root = new URL("themes", import.meta.url).pathname;

async () => {
  // create the dir
  await mkdir(root, { recursive: true });
  // empty the dir
  const files = await readdir(root);
  await Promise.all(files.map((file) => unlink(join(root, file))));
  // write the files
  await Promise.all([
    writeFile(join(root, "mocha.json"), JSON.stringify(mocha)),
    writeFile(join(root, "macchiato.json"), JSON.stringify(macchiato)),
    writeFile(join(root, "frappe.json"), JSON.stringify(frappe)),
    writeFile(join(root, "latte.json"), JSON.stringify(latte)),
  ]);

  await build({
    clean: true,
    entryPoints: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    minify: true,
    target: "node16",
  });
};
