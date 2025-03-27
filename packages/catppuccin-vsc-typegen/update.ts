/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "node:path";
import { writeFileSync } from "node:fs";
import { compile, JSONSchema } from "json-schema-to-typescript";

// v1.98.2
const vscodeSchemasRoot =
  "https://raw.githubusercontent.com/ota-meshi/extract-vscode-schemas/bd18db29edb183a0d8b0b8250b22dbd4428a0da8/resources/vscode/schemas/";

const bannerComment = `/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 * Instead, run \`pnpm --filter @catppuccin/vsc-typegen typegen:update\` to regenerate this file.
 */`;

const mappings = [
  // json-schema-to-typescript breaks on new schemas because of an internal
  // rule where it cannot accept both "definitions" and "$defs" and therefore
  // refuses to parse the file. The following commented out schemas must
  // be converted to Typescript manually.
  //
  // ref: https://github.com/bcherny/json-schema-to-typescript/blob/a5834aa990a58b98a02824e1521f27d4235e1e12/src/normalizer.ts#L210-L215
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
  {
    schema: vscodeSchemasRoot + "workbench-colors.json",
    name: "WorkbenchColors",
    fname: "workbench-colors.d.ts",
    kind: "jsonschema",
  },
  {
    schema:
      "https://raw.githubusercontent.com/usernamehw/vscode-error-lens/v3.24.0/package.json",
    name: "ErrorLensColors",
    fname: "errorlens.d.ts",
    kind: "extension-packagejson",
  },
  {
    schema:
      "https://raw.githubusercontent.com/gitkraken/vscode-gitlens/v16.3.3/package.json",
    name: "GitLensColors",
    fname: "gitlens.d.ts",
    kind: "extension-packagejson",
  },
  {
    schema:
      "https://github.com/microsoft/vscode-pull-request-github/raw/v0.106.0/package.json",
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
