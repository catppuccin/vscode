require('esbuild').build({
    entryPoints: ['src/main.ts'],
    bundle: true,
    outfile: 'dist/main.js',
    external: [
        "vscode"
    ],
    format: "cjs",
    platform: "node",
    minify: true,
}).catch(() => process.exit(1))