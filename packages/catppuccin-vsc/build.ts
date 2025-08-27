import { setOutput } from "@actions/core";
import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";

import { updatePackageJson, readPackageJsonVersion } from "@/hooks/packageJson";
import generateThemes from "@/hooks/generateThemes";

const development = getFlag("--dev", Boolean);
const shouldRegenerate = !getFlag("--no-regenerate", Boolean);

await generateThemes();

const packageJsonVersion = await readPackageJsonVersion();
if (shouldRegenerate) {
  console.debug(
    `Regenerating package.json with version "${packageJsonVersion}"`,
  );
  await updatePackageJson();
}

await build({
  clean: true,
  entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
  external: ["vscode"],
  minify: !development,
  sourcemap: development,
  target: "node16",
});

const packagePath = `catppuccin-vsc-${packageJsonVersion}.vsix`;

await createVSIX({ dependencies: false, packagePath });

// the upload step in the CI required the path to the vsix file
if (process.env.GITHUB_ACTIONS) setOutput("vsixPath", packagePath);
