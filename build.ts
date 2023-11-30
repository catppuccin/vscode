import { setOutput } from "@actions/core";
import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";

import updatePackageJson from "./src/hooks/updatePackageJson";
import generateThemes from "./src/hooks/generateThemes";

const buildForADS = getFlag("--ads", Boolean);
const dev = getFlag("--dev", Boolean);

(async () => {
  await generateThemes();
  const packageJson = await updatePackageJson({ buildForADS });

  await build({
    clean: true,
    entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
    external: ["vscode"],
    minify: !dev,
    sourcemap: dev,
    splitting: true,
    target: "node16",
  });

  const shortName = buildForADS ? "ads" : "vsc";
  const packagePath = `catppuccin-${shortName}-${packageJson.version}.vsix`;

  await createVSIX({ useYarn: true, packagePath });

  // restore the original package.json when building for ADS
  if (buildForADS) await updatePackageJson();
  // the upload step in the CI required the path to the vsix file
  if (process.env.CI) setOutput("vsixPath", packagePath);
})();
