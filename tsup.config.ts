import { defineConfig } from "tsup";

const dev = process.env.NODE_ENV === "development";

export default defineConfig({
  entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
  external: ["vscode"],
  sourcemap: dev,
  minify: !dev,
  target: "node16",
  clean: true,
  splitting: true,
});
