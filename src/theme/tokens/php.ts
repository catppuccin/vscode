import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "Class name php",
      scope: "variable.other.class.php",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "laravel blade tag",
      scope: [
        "entity.name.tag.laravel-blade",
        "source.php.embedded.line.html",
        "text.html.laravel-blade",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "laravel blade @",
      scope: [
        "source.php.embedded.line.html",
        "support.constant.laravel-blade",
        "text.html.laravel-blade",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "use statement for other classes",
      scope: [
        "entity.other.alias.php",
        "meta.interface.php",
        "support.other.namespace.php",
        "support.other.namespace.use-as.php",
        "support.other.namespace.use.php",
      ],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "error suppression",
      scope: "keyword.operator.error-control.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "php instanceof",
      scope: "keyword.operator.type.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "style double quoted array index normal begin",
      scope: "punctuation.section.array.begin.php",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "style double quoted array index normal end",
      scope: "punctuation.section.array.end.php",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "php illegal.non-null-typehinted",
      scope: "invalid.illegal.non-null-typehinted.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "php types",
      scope: [
        "keyword.other.array.phpdoc.php",
        "keyword.other.type.php",
        "meta.other.type.phpdoc.php",
        "storage.type.php",
      ],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "php call-function",
      scope: [
        "meta.function-call.object.php",
        "meta.function-call.php",
        "meta.function-call.static.php",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "php function-resets",
      scope: [
        "punctuation.definition.arguments.begin.bracket.round.php",
        "punctuation.definition.arguments.end.bracket.round.php",
        "punctuation.definition.array.begin.bracket.round.php",
        "punctuation.definition.array.end.bracket.round.php",
        "punctuation.definition.begin.bracket.curly.php",
        "punctuation.definition.begin.bracket.round.php",
        "punctuation.definition.end.bracket.curly.php",
        "punctuation.definition.end.bracket.round.php",
        "punctuation.definition.parameters.begin.bracket.round.php",
        "punctuation.definition.parameters.end.bracket.round.php",
        "punctuation.definition.section.switch-block.begin.bracket.curly.php",
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
        "punctuation.definition.section.switch-block.start.bracket.curly.php",
        "punctuation.definition.storage-type.begin.bracket.round.php",
        "punctuation.definition.storage-type.end.bracket.round.php",
        "punctuation.section.scope.begin.php",
        "punctuation.section.scope.end.php",
        "punctuation.separator.delimiter.php",
        "punctuation.terminator.expression.php",
      ],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "support php constants",
      scope: [
        "support.constant.core.php",
        "support.constant.ext.php",
        "support.constant.parser-token.php",
        "support.constant.std.php",
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "php goto",
      scope: ["entity.name.goto-label.php", "support.other.php"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "php logical/bitwise operator",
      scope: [
        "keyword.operator.logical.php",
        "keyword.operator.bitwise.php",
        "keyword.operator.arithmetic.php",
      ],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "php regexp operator",
      scope: "keyword.operator.regexp.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "php comparison",
      scope: "keyword.operator.comparison.php",
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "php heredoc/nowdoc",
      scope: ["keyword.operator.heredoc.php", "keyword.operator.nowdoc.php"],
      settings: {
        foreground: palette.red,
      },
    },
  ];
}
