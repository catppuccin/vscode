import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";

import updatePackageJson from "./src/hooks/updatePackageJson";
import generateThemes from "./src/hooks/generateThemes";

const buildForADS = getFlag("--ads", Boolean);
const dev = getFlag("--dev", Boolean);

(async () => {
  await generateThemes();
  const packageJSON = await updatePackageJson({ buildForADS });

  await build({
    entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
    external: ["vscode"],
    sourcemap: dev,
    minify: !dev,
    target: "node16",
    clean: true,
    splitting: true,
  });

  // restore the original package.json when building for ADS
  if (buildForADS) await updatePackageJson();

  const shortName = buildForADS ? "ads" : "vsc";
  createVSIX({
    useYarn: true,
    packagePath: `catppuccin-${shortName}-${packageJSON.version}.vsix`,
  });
})();
