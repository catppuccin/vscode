<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://code.visualstudio.com">VSCode</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/vscode/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/vscode?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/vscode/issues"><img src="https://img.shields.io/github/issues/catppuccin/vscode?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/vscode/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/vscode?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/vscode/main/assets/ss.png"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://user-images.githubusercontent.com/79978224/183617750-085cb606-eea0-4c7a-a8b9-10426617c0a0.png"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://user-images.githubusercontent.com/79978224/183618317-9adec6d4-b9da-4c6f-b2f4-9752054c98f4.png"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://user-images.githubusercontent.com/79978224/183618382-61a17330-e61f-47c7-b0e1-ffb309ddb459.png"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://user-images.githubusercontent.com/79978224/183618460-075a74a2-7d3e-46d8-997a-cfa6fc8cbaab.png"/>
</details>

## Usage

**Preferred method of installation**

Install the extension from a Marketplace:

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc)
- [Open-VSX](https://open-vsx.org/extension/Catppuccin/catppuccin-vsc)

**Manual method for installation**

Download the VSIX from
[the latest GitHub release](https://github.com/catppuccin/vscode/releases/latest).
Open the Command Palette, and select "Extensions: Install from VSIX...", then
open the file you just downloaded.

> **Note**

From the settings, change `window.titleBarStyle` to `custom` for the context
menus to be properly rendered according to the theme.

## 🙋 FAQ

- <strong>Q</strong>: <strong><em>"How can I disable italics?"</em></strong>\
  A: Open your settings, and look for `Extensions > Catppuccin`. There you can toggle comments for both Keywords & Comments. You'll have to reload your editor once to see changes.

- <strong>Q</strong>: <strong><em>"How can I override palette colours?"</strong></em>\
  A: Open your Command Palette (<kbd>Cmd+Shift+P</kbd> or <kbd>Ctrl+Shift+P</kbd>), and select "Open User Settings (JSON)". Once there, make your changes like this, and reload:

```json
    // ...your other settings...
    "catppuccin.colorOverrides": {
        // OLEDppuccin
        "mocha": {
            "base": "#000000",
            "mantle": "#000000",
            "crust": "#000000",
        }
    }
```

## Development

1. Clone and open this repository in VSCode.
2. Launch a new instance from "Run and Debug". This will spawn a new instance, which will have the current build of the Theme available.
3. Make modifications to the JSONs in `./themes` to see the changes immediatly.
4. To preserve changes, they have to be edited in `./src/theme/*.ts`, since the theme builds the JSONs from there.

## 💝 Thanks to

- [VictorTennekes](https://github.com/VictorTennekes)
- [Gingeh](https://github.com/Gingeh)
- [BrunDerSchwarzmagier](https://github.com/BrunDerSchwarzmagier)
- [ghostx31](https://github.com/ghostx31)
- [Ren](https://github.com/watatomo)
- [Hamothy](https://github.com/sgoudham) &nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.png" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
