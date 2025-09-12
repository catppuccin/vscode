# Task List: Catppuccin Dark Variant Implementation

## Relevant Files

- `packages/catppuccin-vsc/src/theme/index.ts` - Core theme compilation logic, needs modification to handle "dark" flavor
- `packages/catppuccin-vsc/src/types/index.d.ts` - Type definitions, needs extension for "dark" flavor support
- `packages/catppuccin-vsc/src/main.ts` - Extension activation, needs "dark" theme path registration
- `packages/catppuccin-vsc/src/utilities.ts` - Theme utilities, needs "dark" flavor support in updateThemes function
- `packages/catppuccin-vsc/src/hooks/generateThemes.ts` - Theme generation script, needs "dark" flavor inclusion
- `packages/catppuccin-vsc/package.json` - Extension manifest, needs "dark" theme registration in contributes.themes
- `packages/catppuccin-vsc/src/hooks/packageJson.ts` - Package.json generation, may need updates for dynamic theme registration
- `packages/catppuccin-vsc/schemas/customUIColors.schema.json` - Schema definition, needs "dark" flavor support
- `packages/catppuccin-vsc/src/hooks/updateSchemas.ts` - Schema update script, needs "dark" flavor inclusion
- `packages/catppuccin-vsc/themes/dark.json` - Generated theme file (will be created during build)

### Notes

- The `@catppuccin/palette` package doesn't include a "dark" flavor, so we'll implement it as a custom flavor with predefined overrides
- All existing theme infrastructure will be leveraged, with minimal modifications to support the new flavor
- The build system automatically generates theme files, so we need to ensure "dark" is included in the generation process

## Tasks

- [x] 1.0 Create Dark Flavor Infrastructure
  - [x] 1.1 Define custom "dark" flavor constant and color palette in `src/theme/index.ts`
  - [x] 1.2 Create dark flavor color overrides with base colors: base="#181818", mantle="#282828", crust="#292929"
  - [x] 1.3 Implement custom dark flavor detection logic in `compileTheme` function
  - [x] 1.4 Add dark flavor name mapping to return "Catppuccin Dark" as display name
  - [x] 1.5 Ensure dark flavor is treated as "dark" theme type (not light)

- [x] 2.0 Implement Dark Theme Generation
  - [x] 2.1 Update `src/hooks/generateThemes.ts` to include "dark" in the flavors array
  - [x] 2.2 Modify theme generation logic to handle custom "dark" flavor compilation
  - [x] 2.3 Add dark-specific color overrides and custom highlight groups during theme compilation
  - [x] 2.4 Implement additional UI customizations (VertSplit, CursorLineNr, SignColumn, Visual, etc.)
  - [x] 2.5 Ensure generated `themes/dark.json` contains all required VS Code theme properties

- [x] 3.0 Register Dark Theme in VS Code
  - [x] 3.1 Add "dark" theme entry to `package.json` contributes.themes section
  - [x] 3.2 Set correct theme label as "Catppuccin Dark" with uiTheme "vs-dark"
  - [x] 3.3 Update `src/main.ts` to include dark theme path in ThemePaths interface
  - [x] 3.4 Modify `src/utilities.ts` updateThemes function to handle "dark" flavor
  - [x] 3.5 Ensure theme regeneration works correctly for dark variant when config changes

- [x] 4.0 Update Type Definitions and Schemas
  - [x] 4.1 Extend `ThemePaths` type in `src/types/index.d.ts` to include "dark" property
  - [x] 4.2 Update `customUIColors.schema.json` to include "dark" flavor in properties
  - [x] 4.3 Modify `src/hooks/updateSchemas.ts` to generate schema with "dark" flavor support
  - [x] 4.4 Add "dark" flavor to colorOverrides schema if needed
  - [x] 4.5 Update any TypeScript interfaces that reference flavor names

- [x] 5.0 Test and Validate Implementation
  - [x] 5.1 Run build process to ensure "dark" theme generates without errors
  - [x] 5.2 Verify `themes/dark.json` contains correct color values matching catppuccin.lua specification
  - [x] 5.3 Test theme selection in VS Code shows "Catppuccin Dark" option
  - [x] 5.4 Validate all custom highlight groups render correctly (CursorLine, Comment, TabLine, etc.)
  - [x] 5.5 Confirm compatibility with existing accent colors and workbench modes
  - [x] 5.6 Test theme regeneration when configuration changes
  - [x] 5.7 Verify icon pack synchronization works with dark variant
