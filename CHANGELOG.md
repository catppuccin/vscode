# Changelog

## [3.6.0](https://github.com/catppuccin/vscode/compare/v3.5.0...v3.6.0) (2023-10-30)


### Features

* **ui:** use accent color for drop background ([237e92c](https://github.com/catppuccin/vscode/commit/237e92c1aa7a37b2e638302d7906246a8ababd4a))


### Bug Fixes

* **syntax:** improve C++ textmate tokens ([#207](https://github.com/catppuccin/vscode/issues/207)) ([3f62df8](https://github.com/catppuccin/vscode/commit/3f62df84a652024302d67df9fd79165a9d63c30a))
* **syntax:** Rust closure parameters & variables ([#204](https://github.com/catppuccin/vscode/issues/204)) ([358b963](https://github.com/catppuccin/vscode/commit/358b96392888286d4d65eefdeee532f3d709cae9))
* **ui:** improve contrast on file tree selection ([5234811](https://github.com/catppuccin/vscode/commit/5234811868e8827cdec0cad4a796e87255206811))

## [3.5.0](https://github.com/catppuccin/vscode/compare/v3.4.0...v3.5.0) (2023-10-30)


### Features

* **syntax:** adjust italic highlights ([1006d8f](https://github.com/catppuccin/vscode/commit/1006d8fe65a5d66020ce5373b1c8bfed2c64b084))
* **syntax:** initial support for gdscript ([1006d8f](https://github.com/catppuccin/vscode/commit/1006d8fe65a5d66020ce5373b1c8bfed2c64b084))
* **syntax:** new rust macros ([1006d8f](https://github.com/catppuccin/vscode/commit/1006d8fe65a5d66020ce5373b1c8bfed2c64b084))
* **syntax:** reintroduce bold keywords ([1006d8f](https://github.com/catppuccin/vscode/commit/1006d8fe65a5d66020ce5373b1c8bfed2c64b084))


### Bug Fixes

* **compiler:** bold toggle support ([1006d8f](https://github.com/catppuccin/vscode/commit/1006d8fe65a5d66020ce5373b1c8bfed2c64b084))
* **syntax:** JSDoc variables ([#200](https://github.com/catppuccin/vscode/issues/200)) ([1dfda6a](https://github.com/catppuccin/vscode/commit/1dfda6af3176ee31ab31e0dc013ba42ab3e4cf32)), closes [#199](https://github.com/catppuccin/vscode/issues/199)

## [3.4.0](https://github.com/catppuccin/vscode/compare/v3.3.0...v3.4.0) (2023-10-21)


### Features

* **extension:** add GitLens integration ([#191](https://github.com/catppuccin/vscode/issues/191)) ([cda1b0f](https://github.com/catppuccin/vscode/commit/cda1b0f100a83b4dd4c10c2f816b28ac059f33ae))
* increase minimum VSCode version to 1.80.0 ([8a1c1a5](https://github.com/catppuccin/vscode/commit/8a1c1a5f2bc0f5ca413f03b190ecf56c45ec84ea))
* **syntax:** Diff highlighting ([#182](https://github.com/catppuccin/vscode/issues/182)) ([f148b6c](https://github.com/catppuccin/vscode/commit/f148b6cb1fef18d759c13ae03b226d8a5bdbb89b))
* **ui:** add colors to terminal command decorations ([#188](https://github.com/catppuccin/vscode/issues/188)) ([ed200ad](https://github.com/catppuccin/vscode/commit/ed200adb6dca3b5914b82052147ac357e56711fe))


### Bug Fixes

* **compiler:** extension support ([40d7ee3](https://github.com/catppuccin/vscode/commit/40d7ee3fc83f0b01272dcd2aa1f8d186211c68ff))
* **syntax:** C# interpolated strings highlighting ([#185](https://github.com/catppuccin/vscode/issues/185)) ([4e05650](https://github.com/catppuccin/vscode/commit/4e05650a3e6d0fcffe298bd6993765b4d1b68d53))
* **syntax:** Nix support functions (`import`, etc.) ([810f130](https://github.com/catppuccin/vscode/commit/810f13043339d54c1a5bd99ee93709ae3433f200))
* **syntax:** PHP builtin function color, sky ([#193](https://github.com/catppuccin/vscode/issues/193)) ([23a1cf0](https://github.com/catppuccin/vscode/commit/23a1cf0da7d7f6270b88235decbb45721c21f309))
* **syntax:** use `string variable` for string interpolation ([5791e92](https://github.com/catppuccin/vscode/commit/5791e92d66bf343b0754ba7f73e93f3eaf96f713))
* use `focusBorder` variable for keyboard navigation highlights ([#192](https://github.com/catppuccin/vscode/issues/192)) ([afaa458](https://github.com/catppuccin/vscode/commit/afaa4580f529bdbe3cd95dec39f6d551f8a5a533)), closes [#181](https://github.com/catppuccin/vscode/issues/181)

## [3.3.0](https://github.com/catppuccin/vscode/compare/v3.2.4...v3.3.0) (2023-09-12)


### Features

* nix build ([#147](https://github.com/catppuccin/vscode/issues/147)) ([bfe794f](https://github.com/catppuccin/vscode/commit/bfe794f20732392979d57715a14c054788db21d2))
* **syntax:** Nix highlighting ([be832e1](https://github.com/catppuccin/vscode/commit/be832e104da7eb3e60edefa67596f8b57d7d524a))


### Bug Fixes

* **compiler:** icon pack sync improvements ([#174](https://github.com/catppuccin/vscode/issues/174)) ([88ffb52](https://github.com/catppuccin/vscode/commit/88ffb52c51caba23d4a8e5cd466c803bf81cf7bb))
* **syntax:** don't use source.js/source.ts ([583b3d8](https://github.com/catppuccin/vscode/commit/583b3d87b6d42f7c508264b73482c2f0b960eba0))
* **syntax:** variable inside string interpolation ([2df9d7d](https://github.com/catppuccin/vscode/commit/2df9d7dec04cbc75638e1eaf2250b76152e0d961))
* **syntax:** Vue components color ([#173](https://github.com/catppuccin/vscode/issues/173)) ([f79ea58](https://github.com/catppuccin/vscode/commit/f79ea58320ef8789d6dd5e78fe7ef130d8322775))

## [3.2.4](https://github.com/catppuccin/vscode/compare/v3.2.3...v3.2.4) (2023-09-09)


### Bug Fixes

* **compiler:** successfully compile when icon pack isn't installed ([#168](https://github.com/catppuccin/vscode/issues/168)) ([c5b4c2e](https://github.com/catppuccin/vscode/commit/c5b4c2ea461eada8ffce4d7f41a72d86284d5c80))

## [3.2.3](https://github.com/catppuccin/vscode/compare/v3.2.2...v3.2.3) (2023-09-09)


### Bug Fixes

* **syntax:** Python: use `yellow` for typehints next to variables ([46ebb95](https://github.com/catppuccin/vscode/commit/46ebb9535206898b9f214fbd8eda3f0a1bdeb059)), closes [#163](https://github.com/catppuccin/vscode/issues/163)

## [3.2.2](https://github.com/catppuccin/vscode/compare/v3.2.1...v3.2.2) (2023-09-09)


### Bug Fixes

* italic comments toggle ([#165](https://github.com/catppuccin/vscode/issues/165)) ([b920fb3](https://github.com/catppuccin/vscode/commit/b920fb300cffc43a5d2dc4208365b6c30f866ee1)), closes [#152](https://github.com/catppuccin/vscode/issues/152)
* **syntax:** Go: color for functions ([10cf259](https://github.com/catppuccin/vscode/commit/10cf2599bc09c576bfa6398dda8afc5e239e373e)), closes [#162](https://github.com/catppuccin/vscode/issues/162)
* **syntax:** Object properties use `text` now ([c37f780](https://github.com/catppuccin/vscode/commit/c37f780dc7fa98cbcdacf2cc51ffa5305ca2dccf))
* **syntax:** Scala: disable contants being peach ([c7168cd](https://github.com/catppuccin/vscode/commit/c7168cdf19a2d241d51d2bf32524253a93fe567c)), closes [#161](https://github.com/catppuccin/vscode/issues/161)
* terminal colors ([#164](https://github.com/catppuccin/vscode/issues/164)) ([5eb8105](https://github.com/catppuccin/vscode/commit/5eb8105af74f4dfd61a0d1dd213f7b2a7ccbd8f1))

## [3.2.1](https://github.com/catppuccin/vscode/compare/v3.2.0...v3.2.1) (2023-09-04)


### Bug Fixes

* **syntax:** Julia column symbols ([#155](https://github.com/catppuccin/vscode/issues/155)) ([67d5ae1](https://github.com/catppuccin/vscode/commit/67d5ae1e2bc40b8b748914dd92c114ee02ca4778)), closes [#151](https://github.com/catppuccin/vscode/issues/151)
* **syntax:** MDX headings ([c1f04fc](https://github.com/catppuccin/vscode/commit/c1f04fc5f1a2cc9c4bae65696e0ab36ea4ae3e33))

## [3.2.0](https://github.com/catppuccin/vscode/compare/v3.1.0...v3.2.0) (2023-09-04)


### Features

* **syntax:** add julia support ([d9bb0b6](https://github.com/catppuccin/vscode/commit/d9bb0b62eccba3ba87a07080a11d4514ae9667d3))


### Bug Fixes

* **syntax:** use yellow for ini section titles ([09004dc](https://github.com/catppuccin/vscode/commit/09004dcc5da0af3cdbfcebdbd29f3eaed1dc5d72))

## [3.1.0](https://github.com/catppuccin/vscode/compare/v3.0.1...v3.1.0) (2023-09-04)


### Features

* **syntax:** add AsciiDoc support, loosen Markdown scopes ([c7ec7d5](https://github.com/catppuccin/vscode/commit/c7ec7d51afdc76e58131b7e82aef97a02901dd7b))
* **syntax:** add golang semantic tokens ([abf9b40](https://github.com/catppuccin/vscode/commit/abf9b40b56e246cb1d8958fbd566d6ed5e839d7b))
* **syntax:** add GraphQL syntax highlighting ([eae5a26](https://github.com/catppuccin/vscode/commit/eae5a260b0c63eb174ad3ca999dc6f8f169f73d4))
* **syntax:** add LaTeX support ([5e6251e](https://github.com/catppuccin/vscode/commit/5e6251e6e2b69907ffed1a1bb905c3f9ad5a230e))
* **syntax:** add Typst semantic tokens ([#140](https://github.com/catppuccin/vscode/issues/140)) ([59eee65](https://github.com/catppuccin/vscode/commit/59eee65956336eb6e73814bb06e5b471766dd2de))


### Bug Fixes

* **syntax:** add jsx/tsx semantic highlights for const ([1151998](https://github.com/catppuccin/vscode/commit/11519989c22ba0b4e8aeb6d34d7c264cf86789fe))
* **syntax:** HTML/XML/JSX/TSX constants (`&amp`; etc.) ([2b41f80](https://github.com/catppuccin/vscode/commit/2b41f80789425f7bb6e8252dc304e097d7e85a77))
* **syntax:** PHP `this`, functions & builtin keywords ([#142](https://github.com/catppuccin/vscode/issues/142)) ([8293357](https://github.com/catppuccin/vscode/commit/8293357930510c295d6e83e3a76893e35920aac5)), closes [#141](https://github.com/catppuccin/vscode/issues/141)
* **syntax:** support HL injection for data (json/yaml/toml) ([1f7350c](https://github.com/catppuccin/vscode/commit/1f7350ccaf0af08ee0a56cfc255b890a4934655d))

## [3.0.1](https://github.com/catppuccin/vscode/compare/v3.0.0...v3.0.1) (2023-09-03)


### Bug Fixes

* **syntax:** add java highlighting ([923a94a](https://github.com/catppuccin/vscode/commit/923a94ab9ab2f390e9c4d9a451e40e07f03c35f7))
* **syntax:** rust attributes semantic tokens ([e5a1a6c](https://github.com/catppuccin/vscode/commit/e5a1a6cb03292b24026b25cf4476c449ee14d0f8))
* **syntax:** TOML table keys ([c83efaf](https://github.com/catppuccin/vscode/commit/c83efafcacbb3daa8f282eba0e6d2699a636ef20))
* **syntax:** yellow TOML table highlights ([9822243](https://github.com/catppuccin/vscode/commit/982224351f0107628ba4c8e3371a933d5fca47e8))

## [3.0.0](https://github.com/catppuccin/vscode/compare/v2.9.0...v3.0.0) (2023-09-02)


### ⚠ BREAKING CHANGES

* rework syntax highlighting

### Features

* rework syntax highlighting ([d04578b](https://github.com/catppuccin/vscode/commit/d04578b0201eeaa6834e4e060a7cc22ce6fbbd66))
* **ui:** change input border accents, use accent for enabled options ([#137](https://github.com/catppuccin/vscode/issues/137)) ([d73c6bd](https://github.com/catppuccin/vscode/commit/d73c6bd948b50ac5cd20bb80afeecc2d2598010f))


### Bug Fixes

* **ui:** reduce current search highlight opacity ([#135](https://github.com/catppuccin/vscode/issues/135)) ([4db87ba](https://github.com/catppuccin/vscode/commit/4db87ba9fa2336dd92ce9c468c72a4238a6681f3)), closes [#133](https://github.com/catppuccin/vscode/issues/133)

## [2.9.0](https://github.com/catppuccin/vscode/compare/v2.8.2...v2.9.0) (2023-09-01)


### Features

* **options:** support hex codes in `catppuccin.customUIColors` ([#126](https://github.com/catppuccin/vscode/issues/126)) ([6df739f](https://github.com/catppuccin/vscode/commit/6df739f9c7dce789216f4afd76df21e3fb3abb14)), closes [#109](https://github.com/catppuccin/vscode/issues/109)
* **ui:** consistently use peach for warnings & yellow for modified ([22ee5cf](https://github.com/catppuccin/vscode/commit/22ee5cfb422124aa5a9368d26dea58145fbe0cd3))
* **ui:** rework minimap colors ([#129](https://github.com/catppuccin/vscode/issues/129)) ([a9c0e0d](https://github.com/catppuccin/vscode/commit/a9c0e0d1fee9925ee904da033a2e228f80e583f1))
* **ui:** use accent color for more focused elements ([#128](https://github.com/catppuccin/vscode/issues/128)) ([2b1a8a7](https://github.com/catppuccin/vscode/commit/2b1a8a7d9a0c687519ec72e4b333ecbe71c43f09)), closes [#91](https://github.com/catppuccin/vscode/issues/91)
* **ui:** use neovim-style search highlighting ([#131](https://github.com/catppuccin/vscode/issues/131)) ([ef9b76c](https://github.com/catppuccin/vscode/commit/ef9b76cd700682c74d1e9488ce9701564204dcb8)), closes [#103](https://github.com/catppuccin/vscode/issues/103)


### Bug Fixes

* style error/warning/info consistently ([22ee5cf](https://github.com/catppuccin/vscode/commit/22ee5cfb422124aa5a9368d26dea58145fbe0cd3))
* **syntax:** PHP dollar sign highlighting ([#115](https://github.com/catppuccin/vscode/issues/115)) ([373cca4](https://github.com/catppuccin/vscode/commit/373cca4e0eac22f4eabca5a13b8a95422b8db007))

## [2.8.2](https://github.com/catppuccin/vscode/compare/v2.8.1...v2.8.2) (2023-08-29)


### Bug Fixes

* **terminal:** use style guide colors ([#122](https://github.com/catppuccin/vscode/issues/122)) ([83d8848](https://github.com/catppuccin/vscode/commit/83d884843ec500e1755cfa16a4d8770714513927))
* **ui:** marketplace pre-release button & separator ([#125](https://github.com/catppuccin/vscode/issues/125)) ([46833aa](https://github.com/catppuccin/vscode/commit/46833aacb92870d6b9ea33d261f45754ce8506f2)), closes [#119](https://github.com/catppuccin/vscode/issues/119)
* **ui:** typos & deprecated color keys ([ef235d5](https://github.com/catppuccin/vscode/commit/ef235d5eb014939eb008a43a5fa850949bb5588d))

## [2.8.1](https://github.com/catppuccin/vscode/compare/v2.8.0...v2.8.1) (2023-08-28)


### Bug Fixes

* **ui:** offline styles & borders for `statusBar` ([eaa1ef8](https://github.com/catppuccin/vscode/commit/eaa1ef883a6ce1d18680707496311c7ba38aea8c))
* **ui:** style banners (e.g. restricted mode) ([326f530](https://github.com/catppuccin/vscode/commit/326f530eeecbd53be87b4beb274f0f85d2380030)), closes [#117](https://github.com/catppuccin/vscode/issues/117)
