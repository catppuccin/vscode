import { defineConfig } from "tsup";

const debug = !!process.env.DEBUG;
export default defineConfig({
  entry: ["src/browser.ts", "src/main.ts"],
  minify: !debug,
  sourcemap: debug,
  external: ["vscode"],
  target: "node16",
  clean: true,
});
