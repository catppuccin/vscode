# Product Requirements Document: Catppuccin Dark Variant

## Introduction/Overview

This feature adds a new "Dark" variant to the Catppuccin VS Code theme family. The Dark variant will provide users with an even darker, more minimal aesthetic than the current Mocha theme, using custom color overrides and highlight configurations. This addresses the need for users who find the current darkest theme (Mocha) still too bright for extended coding sessions, particularly in low-light environments.

## Goals

1. **Create a new "Dark" flavor** in the Catppuccin palette system that uses darker base colors
2. **Implement custom highlight groups** that provide a more minimal, darker UI experience
3. **Maintain full compatibility** with existing Catppuccin features (accent colors, workbench modes, customization options)
4. **Provide seamless integration** with the existing theme selection system in VS Code
5. **Ensure consistent user experience** across all Catppuccin variants

## User Stories

1. **As a developer who works in low-light environments**, I want a darker variant of Catppuccin so that I can code comfortably without eye strain during night sessions.

2. **As a user who prefers minimal aesthetics**, I want a darker theme with reduced visual noise so that I can focus better on my code.

3. **As a Catppuccin user**, I want the new Dark variant to work with all existing customization options so that I can maintain my preferred accent colors and settings.

4. **As a VS Code user**, I want to easily switch to the Dark variant through the theme selector so that I can quickly change my development environment.

5. **As a developer who uses multiple monitors**, I want the Dark variant to provide consistent visual hierarchy so that I can work efficiently across different screen setups.

## Functional Requirements

1. **New Flavor Implementation**
   - The system must add "dark" as a new flavor in the Catppuccin palette system
   - The new flavor must use the custom base colors: `base = "#181818"`, `mantle = "#282828"`, `crust = "#292929"`
   - The flavor must be properly integrated with the existing `@catppuccin/palette` system

2. **Custom Highlight Groups**
   - The system must implement custom highlight groups for the Dark variant:
     - `CursorLine = { bg = "#212121" }`
     - `Comment = { fg = '#6C7086' }`
     - `TabLine = { bg = '#212121' }`
     - `TabLineSel = { bg = '#212122', fg = '#87afaf' }`
     - `Pmenu = { bg = '#212121' }`
     - `PmenuSel = { bg = '#212122', fg = '#e5c890' }`

3. **VS Code Integration**
   - The system must add "Dark" to the theme selector in VS Code
   - The theme must be properly registered in the `package.json` contributes section
   - The theme must generate a corresponding `dark.json` theme file

4. **Additional UI Customizations**
   - The system must implement the following additional highlight customizations:
     - `VertSplit` and `WinSeparator` with `fg = "#3b3b3b"`
     - `CursorLineNr` with `fg = "#212121", bg = "#212121"`
     - `SignColumn` with `bg = "#212121", fg = "#212121"`
     - `Normal` with `bg = "#181818"`
     - `Visual` and `VisualNOS` with `bg = "#2A2A2A"`
     - `TabLine` with `fg = "#45475b", bg = "#212121"`
     - `TabLineSel` with `fg = "#87afaf", bg = "#212121"`
     - `TabLineFill` with `bg = "#212121"`
     - `QuickFix` and `QuickFixLine` with `bg = "#212121"`

5. **Compatibility Maintenance**
   - The system must maintain compatibility with all existing accent colors
   - The system must support all workbench modes (default, flat, minimal)
   - The system must work with existing color override and custom UI color settings
   - The system must support all bracket modes and extra borders options

6. **Theme Generation**
   - The system must generate the Dark variant theme file during the build process
   - The theme file must be properly formatted and compatible with VS Code's theme system
   - The theme must be regenerated when configuration changes occur

## Non-Goals (Out of Scope)

1. **Breaking Changes**: This feature will not modify existing theme variants or their behavior
2. **New Configuration Options**: This feature will not introduce new VS Code settings beyond the new theme variant
3. **Performance Optimization**: This feature will not include performance improvements to the existing theme system
4. **Documentation Updates**: This feature will not include updates to external documentation or marketing materials
5. **Icon Pack Integration**: This feature will not modify the existing icon pack synchronization functionality

## Design Considerations

- **Color Consistency**: The Dark variant should maintain the same color relationships and hierarchy as other Catppuccin variants, just with darker base tones
- **Accessibility**: The darker colors should maintain sufficient contrast ratios for readability
- **Visual Hierarchy**: The custom highlight groups should preserve clear visual separation between different UI elements
- **Minimal Aesthetic**: The implementation should emphasize a clean, distraction-free interface

## Technical Considerations

- **Palette Integration**: The new "dark" flavor must be added to the `@catppuccin/palette` system or implemented as a custom flavor override
- **Build System**: The existing build process in `packages/catppuccin-vsc/build.ts` must be updated to generate the Dark variant
- **Type Safety**: All new color definitions must be properly typed in the existing TypeScript interfaces
- **Theme Compilation**: The `compileTheme` function must be updated to handle the new Dark variant
- **File Structure**: The new theme file should follow the existing pattern: `themes/dark.json`

## Success Metrics

1. **Theme Availability**: The "Catppuccin Dark" option appears in VS Code's theme selector
2. **Visual Accuracy**: The generated theme matches the specified color values from the `catppuccin.lua` configuration
3. **Feature Compatibility**: All existing Catppuccin features work correctly with the Dark variant
4. **User Adoption**: Users can successfully switch to and use the Dark variant without issues
5. **Build Success**: The theme compiles and generates without errors during the build process

## Open Questions

1. **Flavor Naming**: Should the internal flavor name be "dark" or "darker" to avoid confusion with the general "dark theme" concept?
2. **Color Validation**: Should we implement validation to ensure the custom colors maintain proper contrast ratios?
3. **Migration Path**: Should existing users with custom color overrides be automatically migrated to use the new Dark variant?
4. **Testing Strategy**: What level of visual regression testing should be implemented for the new variant?
5. **Documentation**: Should the new variant be documented in the README or other user-facing documentation?
