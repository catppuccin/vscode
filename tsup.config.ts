import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/browser.ts", "src/main.ts"],
  external: ["vscode"],
  sourcemap: true,
  target: "node16",
  clean: true,
});
