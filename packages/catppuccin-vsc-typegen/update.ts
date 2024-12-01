/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "node:path";
import { writeFileSync } from "node:fs";
import { compile, JSONSchema } from "json-schema-to-typescript";
// const vscodeSchemasRoot = "https://raw.githubusercontent.com/ota-meshi/extract-vscode-schemas/main/resources/vscode/schemas/";

const bannerComment = `/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 * Instead, run \`yarn run typegen:update\` to regenerate this file.
 */`;

const mappings = [
  // VSCode have started auto-generating their schema since v1.92.0 and json-schema-to-typescript isn't so happy with that.
  // The reason for that still needs to be investigated.
  //
  // For now, the schemas need to be manually updated by copy pasting the schema into https://transform.tools/json-schema-to-typescript
  // and then figure out how best to include the changes inside the `types` directory.
  //
  // Last known working commit: https://github.com/ota-meshi/extract-vscode-schemas/commit/93dfa59357a3181e6c5985a417ef08324ad3d388
  // Breaking commit: https://github.com/ota-meshi/extract-vscode-schemas/commit/31417f5c16f335d220140ca775c2951fcbab32f6
  // {
  //   schema: vscodeSchemasRoot + "token-styling.json",
  //   name: "SemanticTokens",
  //   fname: "token-styling.d.ts",
  //   kind: "jsonschema",
  // },
  // {
  //   schema: vscodeSchemasRoot + "textmate-colors.json",
  //   name: "TextmateColors",
  //   fname: "textmate-colors.d.ts",
  //   kind: "jsonschema",
  // },
  // {
  //   schema: vscodeSchemasRoot + "workbench-colors.json",
  //   name: "WorkbenchColors",
  //   fname: "workbench-colors.d.ts",
  //   kind: "jsonschema",
  // },
  {
    schema:
      "https://raw.githubusercontent.com/usernamehw/vscode-error-lens/v3.20.0/package.json",
    name: "ErrorLensColors",
    fname: "errorlens.d.ts",
    kind: "extension-packagejson",
  },
  {
    schema:
      "https://raw.githubusercontent.com/gitkraken/vscode-gitlens/v16.0.1/package.json",
    name: "GitLensColors",
    fname: "gitlens.d.ts",
    kind: "extension-packagejson",
  },
  {
    schema:
      "https://github.com/microsoft/vscode-pull-request-github/raw/v0.100.0/package.json",
    name: "GitHubPullRequestColors",
    fname: "github-pull-request.d.ts",
    kind: "extension-packagejson",
  },
];

for (const { schema, name, fname, kind } of mappings) {
  fetch(schema)
    .then((data) => data.json())
    .then((data) => {
      switch (kind) {
        case "jsonschema": {
          return compile(data as JSONSchema, name, {
            additionalProperties: false,
            bannerComment,
          });
        }
        case "extension-packagejson": {
          return fromVSIXColors(name, data);
        }
        default: {
          throw new Error(`Unknown kind: ${kind}`);
        }
      }
    })
    .then((typeDefs) =>
      writeFileSync(path.join(__dirname, "types", fname), typeDefs, "utf8"),
    );
}

const fromVSIXColors = (interfaceName: string, data: any) => {
  let content = `${bannerComment}
export interface ${interfaceName} {`;
  data.contributes.colors.map((color: any) => {
    content += `
  /**
   * ${color.description}
   */
  "${color.id}": string;
`;
  });
  return content + "}\n";
};
