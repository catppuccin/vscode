import { getHighlighter, type ThemeInput } from "shiki";
import { latte, frappe, macchiato, mocha } from "@catppuccin/vscode";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html, unsafeStatic } from "lit/static-html.js";

type CodePreviewProperties = {
  code: string;
  lang: string;
};

const highlighter = await getHighlighter({
  themes: [latte, frappe, macchiato, mocha] as unknown[] as ThemeInput[],
  langs: [
    "bash",
    "coffeescript",
    "cpp",
    "csharp",
    "css",
    "d",
    "dart",
    "diff",
    "gdscript",
    "go",
    "haskell",
    "html",
    "java",
    "javascript",
    "json",
    "jsx",
    "kotlin",
    "liquid",
    "lua",
    "markdown",
    "nix",
    "php",
    "python",
    "r",
    "rust",
    "scala",
    "sql",
    "svelte",
    "toml",
    "typescript",
    "yaml",
  ],
});

const meta: Meta<CodePreviewProperties> = {
  title: "Syntax",
  parameters: {
    layout: "fullscreen",
    chromatic: {
      modes: {
        dark: {
          viewport: "xl",
          theme: "mocha",
        },
        light: {
          viewport: "xl",
          theme: "latte",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const StoryBuilder = async ({
  file,
  lang,
}: {
  file: string;
  lang: string;
}): Promise<Story> => {
  const code = await fetch(
    `https://raw.githubusercontent.com/catppuccin/catppuccin/main/samples/${file}`,
  ).then((response) => response.text());

  const codeHtml = highlighter.codeToHtml(code, {
    lang,
    themes: {
      light: "catppuccin-latte",
      frappe: "catppuccin-frappe",
      macchiato: "catppuccin-macchiato",
      dark: "catppuccin-mocha",
    },
  });

  return {
    args: {
      code: `https://raw.githubusercontent.com/catppuccin/catppuccin/main/samples/${file}`,
      lang,
    },
    render: () => html`
      <div style="width: 100%; height: 100%;">
        <div style="max-width: 100rem; margin: 0 auto;">
          ${unsafeStatic(codeHtml)}
        </div>
      </div>
    `,
  };
};

export const Bash = await StoryBuilder({ lang: "bash", file: "bash.sh" });
export const Coffeescript = await StoryBuilder({
  lang: "coffee",
  file: "coffeescript.coffee",
});
export const Cpp = await StoryBuilder({ lang: "cpp", file: "cpp.cpp" });
export const Cs = await StoryBuilder({ lang: "csharp", file: "cs.cs" });
export const Css = await StoryBuilder({ lang: "css", file: "css.css" });
export const D = await StoryBuilder({ lang: "d", file: "d.d" });
export const Dart = await StoryBuilder({ lang: "dart", file: "dart.dart" });
export const Diff = await StoryBuilder({ lang: "diff", file: "diff.diff" });
export const GDScript = await StoryBuilder({
  lang: "gdscript",
  file: "gdscript.gd",
});
export const Go = await StoryBuilder({ lang: "go", file: "go.go" });
export const Haskell = await StoryBuilder({
  lang: "haskell",
  file: "haskell.hs",
});
export const Html = await StoryBuilder({ lang: "html", file: "html.html" });
export const Java = await StoryBuilder({ lang: "java", file: "java.java" });
export const JavaScript = await StoryBuilder({
  lang: "javascript",
  file: "javascript.js",
});
export const Json = await StoryBuilder({ lang: "json", file: "json.json" });
export const JSX = await StoryBuilder({ lang: "jsx", file: "jsx.jsx" });
export const Kotlin = await StoryBuilder({ lang: "kotlin", file: "kotlin.kt" });
export const Liquid = await StoryBuilder({
  lang: "liquid",
  file: "liquid.liquid",
});
export const Lua = await StoryBuilder({ lang: "lua", file: "lua.lua" });
export const Markdown = await StoryBuilder({
  lang: "markdown",
  file: "markdown.md",
});
export const Nix = await StoryBuilder({ lang: "nix", file: "nix.nix" });
export const Php = await StoryBuilder({ lang: "php", file: "php.php" });
export const Python = await StoryBuilder({ lang: "python", file: "python.py" });
export const R = await StoryBuilder({ lang: "r", file: "r.r" });
export const Rust = await StoryBuilder({ lang: "rust", file: "rust.rs" });
export const Scala = await StoryBuilder({ lang: "scala", file: "scala.scala" });
export const Sql = await StoryBuilder({ lang: "sql", file: "sql.sql" });
export const Svelte = await StoryBuilder({
  lang: "svelte",
  file: "svelte.svelte",
});
export const Toml = await StoryBuilder({ lang: "toml", file: "toml.toml" });
export const Typescript = await StoryBuilder({
  lang: "typescript",
  file: "typescript.ts",
});
export const Yaml = await StoryBuilder({ lang: "yaml", file: "yaml.yaml" });
