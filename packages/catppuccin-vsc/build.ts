import { setOutput } from "@actions/core";
import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";

import updatePackageJson from "@/hooks/updatePackageJson";
import generateThemes from "@/hooks/generateThemes";

const development = getFlag("--dev", Boolean);

await generateThemes();
const packageJson = await updatePackageJson();

await build({
  clean: true,
  entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
  external: ["vscode"],
  minify: !development,
  sourcemap: development,
  target: "node16",
});

const packagePath = `catppuccin-vsc-${packageJson.version}.vsix`;

await createVSIX({ dependencies: false, packagePath });

// the upload step in the CI required the path to the vsix file
if (process.env.GITHUB_ACTIONS) setOutput("vsixPath", packagePath);
