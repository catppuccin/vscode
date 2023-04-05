["main", "browser"].forEach((file) => {
  /** @type {import('esbuild').BuildOptions} */
  require("esbuild")
    .build({
      entryPoints: [`src/${file}.ts`],
      bundle: true,
      sourcemap: "DEBUG" in process.env,
      outfile: `dist/${file}.js`,
      external: ["vscode"],
      format: "cjs",
      platform: "node",
      minify: true,
    })
    .catch(() => process.exit(1));
});
