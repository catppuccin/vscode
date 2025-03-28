# Changelog

## [3.17.0](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.16.1...catppuccin-vsc-v3.17.0) (2025-03-28)


### Features

* theme `testing*` config keys ([#458](https://github.com/catppuccin/vscode/issues/458)) ([f73aa19](https://github.com/catppuccin/vscode/commit/f73aa19d74010a33a9829e0ddc866ec63c6b0fad))


### Bug Fixes

* specify `scope: application` for all settings ([#507](https://github.com/catppuccin/vscode/issues/507)) ([c62e35f](https://github.com/catppuccin/vscode/commit/c62e35fdac952983c60a2d76cb3bad93955fe9f7))
* **tokens/python:** mauve builtin types, peach language constants ([#477](https://github.com/catppuccin/vscode/issues/477)) ([b8e5951](https://github.com/catppuccin/vscode/commit/b8e5951a8ad03268854ef29780ce93fe9ea14294))
* **tokens:** consistently style typst headings ([#506](https://github.com/catppuccin/vscode/issues/506)) ([44925dd](https://github.com/catppuccin/vscode/commit/44925dd1405673da973e49020ce0228a450ea93c))
* **ui:** increase diff contrast ([406ac5b](https://github.com/catppuccin/vscode/commit/406ac5b7b4bcdb449d5e7f1e23b85ab78bfc5753))
* **ui:** use `mantle` for codeblock backgrounds ([#495](https://github.com/catppuccin/vscode/issues/495)) ([ea796fd](https://github.com/catppuccin/vscode/commit/ea796fdd9ed77c62c894b2216b948c905248a553))
* update JSON schema for `customUIColors` ([#485](https://github.com/catppuccin/vscode/issues/485)) ([9bcff9e](https://github.com/catppuccin/vscode/commit/9bcff9eba7ab54a842e60ab7b68f3ee6f5bae34c))

## [3.16.1](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.16.0...catppuccin-vsc-v3.16.1) (2025-02-11)


### Bug Fixes

* **tokens/markdown:** match headings 5 & 6 to style guide ([#474](https://github.com/catppuccin/vscode/issues/474)) ([328b952](https://github.com/catppuccin/vscode/commit/328b952ef9a1b2568f1ac80ed702dd3599e37e1d))
* **tokens:** change comments from `overlay0` to `overlay2` ([#435](https://github.com/catppuccin/vscode/issues/435)) ([35b72d7](https://github.com/catppuccin/vscode/commit/35b72d7f39d24b8af0ccc512b9417e1115865df6))

## [3.16.0](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.15.2...catppuccin-vsc-v3.16.0) (2024-11-08)


### Features

* apply new ANSI terminal colours ([#446](https://github.com/catppuccin/vscode/issues/446)) ([034def5](https://github.com/catppuccin/vscode/commit/034def5822b59d35b14095511260c3b161aee947))
* highlight liquid objects/variables as `pink` ([#449](https://github.com/catppuccin/vscode/issues/449)) ([4c0e083](https://github.com/catppuccin/vscode/commit/4c0e0838ec57fd3bdfb675362f916ccb7e993d04))


### Bug Fixes

* set `editor.wordHighlightStrongBackground` ([#448](https://github.com/catppuccin/vscode/issues/448)) ([36d1973](https://github.com/catppuccin/vscode/commit/36d1973e4648896a7f72221f582847db6acaff00))

## [3.15.2](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.15.1...catppuccin-vsc-v3.15.2) (2024-08-24)


### Bug Fixes

* desync between icon pack and color theme ([#431](https://github.com/catppuccin/vscode/issues/431)) ([88ea69d](https://github.com/catppuccin/vscode/commit/88ea69daf599a08d8e5482b0d001fa243df6d423))

## [3.15.1](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.15.0...catppuccin-vsc-v3.15.1) (2024-08-06)


### Bug Fixes

* switch to `esm.sh` for schemas ([#420](https://github.com/catppuccin/vscode/issues/420)) ([58771ad](https://github.com/catppuccin/vscode/commit/58771ad653cc5a987e9334932833b997d3115831))

## [3.15.0](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.14.0...catppuccin-vsc-v3.15.0) (2024-07-06)


### Features

* support `autoDetectColorScheme` in icon sync ([#399](https://github.com/catppuccin/vscode/issues/399)) ([08de0d9](https://github.com/catppuccin/vscode/commit/08de0d9d44de6693d1379e40a48be797a4fb4715))


### Bug Fixes

* diff buttons color to have better contrast ([#406](https://github.com/catppuccin/vscode/issues/406)) ([c936d41](https://github.com/catppuccin/vscode/commit/c936d416a653153d6fb761ee62e160ad252bd8b9))

## [3.14.0](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.13.0...catppuccin-vsc-v3.14.0) (2024-04-24)


### Features

* **syntax:** add support for markdown in quarto documents ([#376](https://github.com/catppuccin/vscode/issues/376)) ([723a024](https://github.com/catppuccin/vscode/commit/723a02491ee040ab3cd4c76dcc7642eae4022039))

## [3.13.0](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.12.0...catppuccin-vsc-v3.13.0) (2024-03-15)


### Features

* **options:** add option to disable icon pack sync ([#348](https://github.com/catppuccin/vscode/issues/348)) ([54f5685](https://github.com/catppuccin/vscode/commit/54f5685f28ece588e9939f2ad02f903260f4d1c7))

## [3.12.0](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.11.2...catppuccin-vsc-v3.12.0) (2024-03-10)


### Features

* rework selection background ([#342](https://github.com/catppuccin/vscode/issues/342)) ([08c34c0](https://github.com/catppuccin/vscode/commit/08c34c0758500d2d73fff7ca3742283936749beb))

## [3.11.2](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.11.1...catppuccin-vsc-v3.11.2) (2024-02-26)


### Bug Fixes

* **ui:** selection color for non-editor context ([#330](https://github.com/catppuccin/vscode/issues/330)) ([d3c0b6a](https://github.com/catppuccin/vscode/commit/d3c0b6aa05d8e2adff2c8de207845e2e0f211740))
* **ui:** style `activityBarTop`  ([#316](https://github.com/catppuccin/vscode/issues/316)) ([a5c28e9](https://github.com/catppuccin/vscode/commit/a5c28e9319556c696e184a2f2f49813288063ed6))

## [3.11.1](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.11.0...catppuccin-vsc-v3.11.1) (2024-02-08)


### Bug Fixes

* **syntax:** JS `of` and `infer` expressions ([#312](https://github.com/catppuccin/vscode/issues/312)) ([b9e9d75](https://github.com/catppuccin/vscode/commit/b9e9d754c06d846f13fb7f4a908cfafbad5fd1ad))
* **ui:** unverified breakpoints ([#311](https://github.com/catppuccin/vscode/issues/311)) ([4882feb](https://github.com/catppuccin/vscode/commit/4882feb791b7c38116ffe9b729d5769de892e488))

## [3.11.0](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.10.1...catppuccin-vsc-v3.11.0) (2024-01-10)


### Features

* **compiler:** add verbose errors for wrong user config ([#288](https://github.com/catppuccin/vscode/issues/288)) ([8162693](https://github.com/catppuccin/vscode/commit/816269379fa8b2a7093f20ee774f770d8a48ec01))

## [3.10.1](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.10.0...catppuccin-vsc-v3.10.1) (2024-01-05)


### Bug Fixes

* settings json schema URL typo ([#272](https://github.com/catppuccin/vscode/issues/272)) ([acc33aa](https://github.com/catppuccin/vscode/commit/acc33aaefd0041028202cbe8ab3d02c0c6a9436d))

## [3.10.0](https://github.com/catppuccin/vscode/compare/catppuccin-vsc-v3.9.0...catppuccin-vsc-v3.10.0) (2024-01-04)


### Features

* **syntax:** add dedicated highlighting for regex ([db58ea2](https://github.com/catppuccin/vscode/commit/db58ea28d502d8f27c8989526502efed921408b5))


### Bug Fixes

* **syntax:** JSDoc params color, `typeof` as keyword ([c6d63be](https://github.com/catppuccin/vscode/commit/c6d63be0421cd7548c3b87bea5e8bb73f1a93d1c))
* **ui:** command center appearance, de-emphasize borders ([#267](https://github.com/catppuccin/vscode/issues/267)) ([a822dfd](https://github.com/catppuccin/vscode/commit/a822dfdee0ee26067ac2a4d0de5aacd079d9d567))

## [3.9.0](https://github.com/catppuccin/vscode/compare/v3.8.2...v3.9.0) (2024-01-01)

This is our first update of 2024, and we just reached **200.000 downloads**!\
Thanks for spreading the word about our theme. ❤️️

If you've been using Catppuccin for a while, I hope that last year's port 
redesign has grown on you, and that the theme has improved since September.

### Features

* **markup:** use pink for Components ([#250](https://github.com/catppuccin/vscode/issues/250)) ([b129824](https://github.com/catppuccin/vscode/commit/b12982421f1891008baafa7853cecc108e2f5f2d))
* **ui:** redesign search match colors ([#254](https://github.com/catppuccin/vscode/issues/254)) ([907e0f3](https://github.com/catppuccin/vscode/commit/907e0f30f06c89eb065c4904cd6bc46309dccc6c))


### Bug Fixes

* **js:** more expressions marked as keyword/mauve ([#251](https://github.com/catppuccin/vscode/issues/251)) ([fde3779](https://github.com/catppuccin/vscode/commit/fde377992105f07eac90f9fdd3972f5a0a11c418))

## [3.8.2](https://github.com/catppuccin/vscode/compare/v3.8.1...v3.8.2) (2023-12-12)


### Bug Fixes

* **settings:** customUIColors color key names ([#246](https://github.com/catppuccin/vscode/issues/246)) ([43a6cdc](https://github.com/catppuccin/vscode/commit/43a6cdcf74e385a69712cd1123f1a2982fbb3c73))
* **ui:** selection contrast ([#245](https://github.com/catppuccin/vscode/issues/245)) ([bdbc56a](https://github.com/catppuccin/vscode/commit/bdbc56a2ac1475fa7cb6c6f2c2a98a28c9d5258d))

## [3.8.1](https://github.com/catppuccin/vscode/compare/v3.8.0...v3.8.1) (2023-12-05)


### Bug Fixes

* color maths, error in `shade()` function ([#240](https://github.com/catppuccin/vscode/issues/240)) ([ba46d54](https://github.com/catppuccin/vscode/commit/ba46d54a7decbd7e94825e272ee4d06342a9aacb))
* **nix:** accent color wasn't applying correctly ([#238](https://github.com/catppuccin/vscode/issues/238)) ([2f13f50](https://github.com/catppuccin/vscode/commit/2f13f5036e9568deb2d82c2157394d2c154b6842))

## [3.8.0](https://github.com/catppuccin/vscode/compare/v3.7.1...v3.8.0) (2023-11-30)


### Features

* add Azure Data Studio compatibility ([#230](https://github.com/catppuccin/vscode/issues/230)) ([517bc2c](https://github.com/catppuccin/vscode/commit/517bc2c5d3920541f884a683863530bbdb5b2c2d))
* **ui:** redesign tab bar ([#231](https://github.com/catppuccin/vscode/issues/231)) ([66e9220](https://github.com/catppuccin/vscode/commit/66e92202cc80c19d887d7606e0ab487bf38652f1))


### Bug Fixes

* **syntax:** CSS operators, preprocessor parent selectors ([#227](https://github.com/catppuccin/vscode/issues/227)) ([68b1018](https://github.com/catppuccin/vscode/commit/68b1018378d8fa57d303f29552d01a15225c9312))

## [3.7.1](https://github.com/catppuccin/vscode/compare/v3.7.0...v3.7.1) (2023-11-28)


### Bug Fixes

* **settings:** validation error for customUIColors with opacity ([#225](https://github.com/catppuccin/vscode/issues/225)) ([e897d5c](https://github.com/catppuccin/vscode/commit/e897d5cee8e58eb4390ae3d365182c987aa164ce))

## [3.7.0](https://github.com/catppuccin/vscode/compare/v3.6.0...v3.7.0) (2023-11-28)


### Features

* **extension:** add GitHub Pull Request and Issues ([#216](https://github.com/catppuccin/vscode/issues/216)) ([8da4d3d](https://github.com/catppuccin/vscode/commit/8da4d3d4b4d7f3db30d9b9106dea666c2469baab))
* **settings:** improved JSON schemas ([#223](https://github.com/catppuccin/vscode/issues/223)) ([dd61a88](https://github.com/catppuccin/vscode/commit/dd61a8868faf53e71558450a320f87e0aeaaa6f0))


### Bug Fixes

* **syntax:** nix path colors ([#222](https://github.com/catppuccin/vscode/issues/222)) ([de9cd4f](https://github.com/catppuccin/vscode/commit/de9cd4ff10163255524551d31f9dd23958b945b8))
* **syntax:** nix paths, numbers, constants ([235693b](https://github.com/catppuccin/vscode/commit/235693bc9ba9d1e05801e5a6954af1bb5accd659))


### Reverts

* chore: deduplicate catppuccinColor enum ([371e4db](https://github.com/catppuccin/vscode/commit/371e4db14da2f06d7fda8da9b6929c75a136b0b6))

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
