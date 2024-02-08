// @ts-check

/**
 * @typedef {import('@yarnpkg/types').Yarn.Constraints.Context} Context
 * @typedef {import('@yarnpkg/types').Yarn.Constraints.Workspace} Workspace
 */

/**
 * This rule will enforce that a workspace MUST depend on the same version of a dependency as the one used by the other workspaces
 * @param {Context} context
 */
const enforceConsistentDependenciesAcrossTheProject = ({ Yarn }) => {
  for (const dependency of Yarn.dependencies()) {
    if (dependency.type === "peerDependencies") continue;

    for (const otherDependency of Yarn.dependencies({
      ident: dependency.ident,
    })) {
      if (otherDependency.type === "peerDependencies") continue;

      if (
        (dependency.type === "devDependencies" ||
          otherDependency.type === "devDependencies") &&
        Yarn.workspace({ ident: otherDependency.ident })
      )
        continue;

      dependency.update(otherDependency.range);
    }
  }
};

/**
 * @param {Context} context
 * @param {Record<string, ((workspace: Workspace) => any) | string>} fields
 */
const enforceFieldsOnAllWorkspaces = ({ Yarn }, fields) => {
  for (const workspace of Yarn.workspaces()) {
    for (const [field, value] of Object.entries(fields)) {
      workspace.set(
        field,
        typeof value === "function" ? value(workspace) : value,
      );
    }
  }
};

/**
 * @param {Context} context
 */
const enforcePublishingConfig = ({ Yarn }) => {
  for (const workspace of Yarn.workspaces()) {
    if (workspace.manifest.private) continue;

    workspace.set("publishConfig", {
      access: "public",
      provenance: true,
      registry: "https://registry.npmjs.org",
    });
  }
};

/** @type {import('@yarnpkg/types').Yarn.Config} */
module.exports = {
  constraints: async (context) => {
    enforceFieldsOnAllWorkspaces(context, {
      license: "MIT",
      "repository.directory": (workspace) => workspace.cwd,
      "repository.type": "git",
      "repository.url": "git+https://github.com/catppuccin/vscode.git",
    });
    enforceConsistentDependenciesAcrossTheProject(context);
    enforcePublishingConfig(context);
  },
};
