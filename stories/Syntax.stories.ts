import { Meta, StoryObj } from "@storybook/react";

import { Syntax } from "./Syntax";

const meta = {
  title: "Syntax",
  component: Syntax,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Syntax>;

export default meta;
type Story = StoryObj<typeof meta>;

const StoryBuilder = ({
  lang,
  file,
}: {
  lang: string;
  file: string;
}): Story => {
  return {
    args: {
      language: lang,
      code: `https://raw.githubusercontent.com/catppuccin/catppuccin/main/samples/${file}`,
    },
  };
};

// TODO:
// export const Asciidoc = StoryBuilder({
//   lang: "asciidoc",
//   file: "asciidoc.adoc",
// });
export const Bash = StoryBuilder({ lang: "bash", file: "bash.sh" });
export const Coffeescript = StoryBuilder({
  lang: "coffee",
  file: "coffeescript.coffee",
});
export const Cpp = StoryBuilder({ lang: "cpp", file: "cpp.cpp" });
export const Css = StoryBuilder({ lang: "css", file: "css.css" });
// TODO:
// export const Dart = StoryBuilder({ lang: "dart", file: "dart.dart" });
export const Go = StoryBuilder({ lang: "go", file: "go.go" });
export const Haskell = StoryBuilder({ lang: "haskell", file: "haskell.hs" });
export const Html = StoryBuilder({ lang: "html", file: "html.html" });
export const Java = StoryBuilder({ lang: "java", file: "java.java" });
export const Json = StoryBuilder({ lang: "json", file: "json.json" });
export const Kotlin = StoryBuilder({ lang: "kotlin", file: "kotlin.kt" });
export const Lua = StoryBuilder({ lang: "lua", file: "lua.lua" });
export const Markdown = StoryBuilder({ lang: "markdown", file: "markdown.md" });
// TODO:
// export const Php = StoryBuilder({ lang: "php", file: "php.php" });
export const Python = StoryBuilder({ lang: "python", file: "python.py" });
export const Rust = StoryBuilder({ lang: "rust", file: "rust.rs" });
export const Scala = StoryBuilder({ lang: "scala", file: "scala.scala" });
export const Sql = StoryBuilder({ lang: "sql", file: "sql.sql" });
export const Toml = StoryBuilder({ lang: "toml", file: "toml.toml" });
export const Typescript = StoryBuilder({
  lang: "typescript",
  file: "typescript.ts",
});
export const Yaml = StoryBuilder({ lang: "yaml", file: "yaml.yaml" });
