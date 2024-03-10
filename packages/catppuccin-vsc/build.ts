import { setOutput } from "@actions/core";
import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";

import updatePackageJson from "./src/hooks/updatePackageJson";
import generateThemes from "./src/hooks/generateThemes";

const buildForADS = getFlag("--ads", Boolean);
const development = getFlag("--dev", Boolean);

await generateThemes();
const packageJson = await updatePackageJson({ buildForADS });

await build({
  clean: true,
  entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
  external: ["vscode"],
  minify: !development,
  sourcemap: development,
  target: "node16",
});

const shortName = buildForADS ? "ads" : "vsc";
const packagePath = `catppuccin-${shortName}-${packageJson.version}.vsix`;

await createVSIX({ dependencies: false, packagePath });

// restore the original package.json when building for ADS
if (buildForADS) await updatePackageJson();
// the upload step in the CI required the path to the vsix file
if (process.env.GITHUB_ACTIONS) setOutput("vsixPath", packagePath);
