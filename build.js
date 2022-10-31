/** @type {import('esbuild').BuildOptions} */
require('esbuild').build({
    entryPoints: ['src/main.ts'],
    bundle: true,
    sourcemap: "DEBUG" in process.env,
    outfile: 'dist/main.js',
    external: [
        "vscode"
    ],
    format: "cjs",
    platform: "node",
    minify: true,
}).catch(() => process.exit(1))