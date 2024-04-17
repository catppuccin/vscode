<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/catppuccin/vscode">VSCode</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/vscode"><img src="https://img.shields.io/github/stars/catppuccin/vscode?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/vscode"><img src="https://img.shields.io/github/issues/catppuccin/vscode?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/vscode"><img src="https://img.shields.io/github/contributors/catppuccin/vscode?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

Simple NPM package containing all compiled themes of [Catppuccin for VSCode](https://github.com/catppuccin/vscode).

### Usage

You can use these definitions with libraries like [Shiki](https://github.com/shikijs/shiki).

```console
npm install @catppuccin/vscode
pnpm add @catppuccin/vscode
yarn add @catppuccin/vscode
```

### API

```ts
// the themes with default options
import { latte, frappe, macchiato, mocha } from "@catppuccin/vscode";

// alternatively, import the JSON files:
import latte from "@catppuccin/vscode/themes/latte.json" with { type: "json" };
import frappe from "@catppuccin/vscode/themes/frappe.json" with { type: "json" };
import macchiato from "@catppuccin/vscode/themes/macchiato.json" with { type: "json" };
import mocha from "@catppuccin/vscode/themes/mocha.json" with { type: "json" };
```

To customize the theme, you can use the `compile()` function, optionally passing in [options that the VSCode theme supports](https://github.com/catppuccin/vscode/tree/main/packages/catppuccin-vsc#catppuccin-settings).

```ts
import { compile } from "@catppuccin/vscode";

const myMocha = compile("mocha", {
  colorOverrides: {
    mocha: {
      base: "#000000",
      mantle: "#010101",
      crust: "#020202",
    },
  },
});
```

&nbsp;

<p align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.png" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
