import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "go operator",
      scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Go package name",
      scope: ["entity.name.package.go"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Go import statement",
      scope: "keyword.import.go",
      settings: {
        foreground: palette.blue,
      },
    },
  ];
}
