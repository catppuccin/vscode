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

- Install the extension from the [marketplace](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc).\
  **OR**
- Open Visual Studio Code. Launch Quick Open by pressing <kbd>Ctrl+P</kbd> and typing `ext install Catppuccin.catppuccin-vsc`.

**Manual method for installation**

1. Clone this repository into the extensions folder of VSCode:
    ```
    git clone https://github.com/catppuccin/vscode.git $HOME/.vscode/extensions/catppuccin-vsc
    ```
    Or if you are using VSCodium:
    ```
    git clone https://github.com/catppuccin/vscode.git $HOME/.vscode-oss/extensions/catppuccin-vsc
    ```
2. Open the app and type:
   * **macOS**: <kbd>CMD+K</kbd> <kbd>CMD+T</kbd>
   * **Linux/Windows**: <kbd>CTRL+K</kbd> <kbd>CTRL+T</kbd>
1. Select theme flavour from the list.
2. Enjoy! :sparkles:

### Disable Italics

To prevent any italics from showing, please copy & paste the following configuration into your `settings.json`

```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "variable.parameter.function",
          "variable.parameter.function-call",
          "constant.language",
          "entity.name.function.rust",
          "keyword.control.rust",
          "variable.language.rust",
          "variable.other.rust",
          "variable.other.lua",
          "keyword.control.directive",
          "keyword.other.using.directive",
          "punctuation.definition.directive",
          "entity.name.other.preprocessor.macro.predefined.probably",
          "entity.name.scope-resolution.cpp",
          "string.quoted.docstring.multi",
          "string.quoted.multi",
          "source.python string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
          "source.python string.quoted.docstring.multi.python punctuation.definition.string.end.python",
          "source.python string.quoted.multi.python punctuation.definition.string.begin.python",
          "source.python string.quoted.multi.python punctuation.definition.string.end.python",
          "markup.fenced_code.block",
          "meta.function-call.generic.python",
          "entity.name.function",
          "meta.require",
          "support.function.any-method",
          "variable.function",
          "markup.italic, punctuation.definition.italic,todo.emphasis",
          "comment, punctuation.definition.comment",
          "comment.line.double-slash,comment.block.documentation",
          "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
          "keyword.control.import.python",
          "storage.type.function.python",
          "markup.italic.markdown",
        ],
        "settings": {
          "fontStyle": ""
        }
      }
    ]
  },
```

## Note 
- From the settings, change `window.titleBarStyle` to `custom` for the context menus to be properly rendered according to the theme.

## Development 

1. Clone and open this repository in VSCode.
2. Press <kbd>Ctrl+F5</kbd> (or <kbd>CMD+F5</kbd>) to open a new VSCode instance.
3. The new instance's theme elements will update when modifications are performed from the original instance. 

## 💝 Thanks to

-  [VictorTennekes](https://github.com/VictorTennekes)
-  [Gingeh](https://github.com/Gingeh)
-  [BrunDerSchwarzmagier](https://github.com/BrunDerSchwarzmagier)
-  [ghostx31](https://github.com/ghostx31)
-  [Ren](https://github.com/watatomo)
&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.png" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
