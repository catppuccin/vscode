import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

const debug = !!process.env.DEBUG;
export default defineConfig({
  entry: ["src/browser.ts", "src/main.ts", "src/*.scss"],
  minify: !debug,
  sourcemap: debug,
  external: ["vscode"],
  target: "node16",
  clean: true,
  esbuildPlugins: [
    sassPlugin({
      cssImports: true,
    }),
  ],
});
