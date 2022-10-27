import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "Shell definition variables",
      scope: ["punctuation.definition.variable.shell"],
      settings: {
        foreground: palette.overlay1,
      },
    },
    {
      name: "Shell logical operators",
      scope: ["keyword.operator.logical.shell"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Shell clauses",
      scope: ["meta.scope.case-clause-body.shell"],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Shell funcs",
      scope: ["meta.scope.group.shell"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Shell interpolated cmds",
      scope: ["string.interpolated.dollar.shell"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Shell interpolated strings",
      scope: ["string.quoted.single.shell"],
      settings: {
        foreground: palette.lavender,
      },
    },
    {
      name: "Shell pipe symbol",
      scope: ["keyword.operator.pipe.shell"],
      settings: {
        foreground: palette.sky,
      },
    },
    {
      name: "Shell group definition",
      scope: ["punctuation.definition.group.shell"],
      settings: {
        foreground: palette.overlay1,
      },
    },
    {
      name: "Shell conditionals",
      scope: ["keyword.control.shell"],
      settings: {
        foreground: palette.mauve,
      },
    },
    {
      name: "Shell opeartors and punct delimeters",
      scope: ["keyword.operator.list.shell"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Shell parenthesis",
      scope: ["punctuation.definition.logical-expression.shell"],
      settings: {
        foreground: palette.overlay1,
      },
    },
  ];
}
