import { flavors } from "@catppuccin/palette";

import type {
  CatppuccinPaletteAnsi,
  CatppuccinFlavor,
  CatppuccinPalette,
  ThemeContext,
  ThemeOptions,
} from "@/types";

// Custom dark flavor color overrides based on catppuccin.lua configuration
const darkColorOverrides = {
  base: "#181818",
  mantle: "#282828",
  crust: "#292929",
};

// Custom dark flavor UI color overrides that map Neovim highlights to VS Code properties
const darkUIColorOverrides = {
  // CursorLine = { bg = "#212121" } -> editor line highlight
  "editor.lineHighlightBackground": "#212121",
  "editor.lineHighlightBorder": "#00000000", // Remove red outline

  // Comment = { fg = '#6C7086' } -> handled by token colors, not UI colors

  // TabLine = { bg = '#212121' }, TabLineSel = { bg = '#212122', fg = '#87afaf' }
  "tab.inactiveBackground": "#212121",
  "tab.activeBackground": "#181818", // Fix: should match base background
  "tab.activeForeground": "#87afaf",
  "tab.activeBorderTop": "#8AB4FB", // Subtle blue accent for active tab highlight
  "editorGroupHeader.tabsBackground": "#212121",

  // Pmenu = { bg = '#212121' }, PmenuSel = { bg = '#212122', fg = '#e5c890' }
  "editorSuggestWidget.background": "#212121",
  "editorSuggestWidget.selectedBackground": "#212122",
  "editorSuggestWidget.selectedForeground": "#e5c890",

  // VertSplit, WinSeparator = { fg = "#3b3b3b", bg = "none" }
  "editorGroup.border": "#3b3b3b",
  "panel.border": "#3b3b3b",
  "sideBar.border": "#3b3b3b",

  // Panel resize drag highlight
  "sash.hoverBorder": "#333333",

  // SignColumn/Gutter should match base background = "#181818"
  "editorGutter.background": "#181818", // Fix: should match editor background
  "editorLineNumber.foreground": "#6c7086", // Use a visible color for line numbers

  // Visual = { bg = "#2A2A2A" } -> editor selection
  "editor.selectionBackground": "#2A2A2A",
  "editor.selectionHighlightBackground": "#2A2A2A",

  // TabLineFill = { bg = "#212121" } -> tab container background
  "tab.border": "#212121",

  // QuickFix = { bg = "#212121" }
  "quickInput.background": "#212121",
  "quickInputList.focusBackground": "#212121",

  // Chat/Panel backgrounds should use base color
  "panel.background": "#181818",
  "panelTitle.activeForeground": "#cdd6f4",
  "panelTitle.inactiveForeground": "#6c7086",
  "terminal.background": "#181818",
  "terminalCursor.background": "#181818",

  // Chat window specific elements
  "chat.slashCommandBackground": "#181818",
  "chat.avatarBackground": "#181818",
  "interactive.activeCodeBorder": "#181818",
  "interactive.inactiveCodeBorder": "#181818",

  // Sidebar/Explorer backgrounds and highlights
  "sideBar.background": "#181818",
  "sideBarSectionHeader.background": "#181818",
  "list.activeSelectionBackground": "#212121",
  "list.inactiveSelectionBackground": "#212121",
  "list.hoverBackground": "#212121",
  "list.focusBackground": "#212121",
  "list.dropBackground": "#212121",

  // Explorer specific
  "tree.indentGuidesStroke": "#3b3b3b",
  "list.activeSelectionForeground": "#cdd6f4",
  "list.inactiveSelectionForeground": "#cdd6f4",
  "list.hoverForeground": "#cdd6f4",

  // Additional chat/panel elements that might use the old color
  "panelSection.background": "#181818",
  "panelSectionHeader.background": "#181818",
  "welcomePage.background": "#181818",

  // Replace all #313244 and similar variants with #212121
  "editorGutter.commentRangeForeground": "#212121",
  "editorStickyScrollHover.background": "#212121",
  "input.background": "#212121",
  "peekViewResult.selectionBackground": "#212121",
  "table.headerBackground": "#212121",

  // Replace #45475a variants with #212121 for consistency
  "badge.background": "#212121",
  "checkbox.background": "#212121",

  // Replace #585b70 variants with #212121 for consistency
  "button.secondaryBackground": "#212121",
  "dropdown.listBackground": "#212121",
  "debugIcon.breakpointCurrentStackframeForeground": "#212121",
  "debugIcon.breakpointStackframeForeground": "#212121",
  "debugIcon.disconnectForeground": "#212121",
  "debugIcon.stepBackForeground": "#212121",
  "testing.peekHeaderBackground": "#212121",

  // Replace opacity variants of #313244 with #212121 equivalents
  "scrollbarSlider.activeBackground": "#21212166",
  "gitlens.gutterBackgroundColor": "#2121214d",

  // Replace all #CBA6F8 (purple) and #CBA6F7 (mauve) with #8AB4FB (subtle blue)
  focusBorder: "#8AB4FB",
  "icon.foreground": "#8AB4FB",
  "textSeparator.foreground": "#8AB4FB",
  "activityBar.foreground": "#8AB4FB",
  "activityBarBadge.background": "#8AB4FB",
  "activityBarTop.foreground": "#8AB4FB",
  "breadcrumb.activeSelectionForeground": "#8AB4FB",
  "breadcrumb.focusForeground": "#8AB4FB",
  "button.background": "#8AB4FB",
  "editorInfo.foreground": "#8AB4FB",
  "editorWarning.foreground": "#8AB4FB",
  "list.activeSelectionIconForeground": "#8AB4FB",
  "list.focusOutline": "#8AB4FB",
  "list.highlightForeground": "#8AB4FB",

  // Fix search highlight colors for better visibility
  "searchEditor.findMatchBackground": "#212121",
  "searchEditor.findMatchBorder": "#8AB4FB",
  "searchEditor.textInputBorder": "#8AB4FB",
  "search.resultsInfoForeground": "#cdd6f4",
  "searchEditor.findMatchHighlightBackground": "#212121",
  "searchEditor.findMatchHighlightBorder": "#8AB4FB",

  // Quick picker/search highlight fixes
  "quickInputList.focusIconForeground": "#8AB4FB",
  "pickerGroup.foreground": "#8AB4FB",
  "quickInput.foreground": "#cdd6f4",
  "quickInputTitle.background": "#181818",
  "menubar.selectionForeground": "#8AB4FB",
  "notificationLink.foreground": "#8AB4FB",
  "panelTitle.activeBorder": "#8AB4FB",
  "progressBar.background": "#8AB4FB",
  "settings.headerForeground": "#8AB4FB",
  "settings.modifiedItemIndicator": "#8AB4FB",
  "symbolIcon.colorForeground": "#8AB4FB",
  "tab.lastPinnedBorder": "#8AB4FB",
  "textLink.foreground": "#8AB4FB",
  "titleBar.activeForeground": "#8AB4FB",
};
import { getTokenColors } from "./tokenColors";
import { getSemanticTokens } from "./semanticTokens";
import { getUiColors } from "./uiColors";

export const defaultOptions: ThemeOptions = {
  accent: "mauve",
  boldKeywords: true,
  italicComments: true,
  italicKeywords: true,
  colorOverrides: {},
  workbenchMode: "default",
  bracketMode: "rainbow",
  extraBordersEnabled: false,
  customUIColors: {},
  syncWithIconPack: true,
};

export const compileTheme = (
  flavor: CatppuccinFlavor | "dark" = "mocha",
  options: ThemeOptions = defaultOptions,
) => {
  // Handle custom "dark" flavor as mocha with overrides
  const baseFlavor = flavor === "dark" ? "mocha" : (flavor as CatppuccinFlavor);
  const flavorData = flavors[baseFlavor];
  const ctpPalette = {} as CatppuccinPalette;
  const paletteAnsi = {
    normal: {},
    bright: {},
  } as CatppuccinPaletteAnsi;

  for (const [k, v] of flavorData.colorEntries) {
    ctpPalette[k] = v.hex;
  }
  for (const [k, v] of flavorData.ansiColorEntries) {
    paletteAnsi.normal[k] = v.normal.hex;
    paletteAnsi.bright[k] = v.bright.hex;
  }

  const palette: CatppuccinPalette = {
    ...ctpPalette,
    // Apply dark overrides if dark flavor
    ...(flavor === "dark" ? darkColorOverrides : {}),
    ...options.colorOverrides?.all,
    ...options.colorOverrides?.[baseFlavor],
  };

  const context: ThemeContext = {
    flavor: baseFlavor,
    palette,
    paletteAnsi,
    options,
    isLatte: baseFlavor === "latte",
  };

  const uiColors = getUiColors(context);
  const tokenColors = getTokenColors(context);

  // Apply dark-specific UI color overrides
  const finalUiColors =
    flavor === "dark" ? { ...uiColors, ...darkUIColorOverrides } : uiColors;

  // Apply dark-specific token color overrides for comments
  const finalTokenColors =
    flavor === "dark"
      ? tokenColors.map((token) => {
          // Override comment color: Comment = { fg = '#6C7086' }
          if (
            token.scope &&
            (Array.isArray(token.scope)
              ? token.scope.some((s) => s.includes("comment"))
              : token.scope.includes("comment"))
          ) {
            return {
              ...token,
              settings: { ...token.settings, foreground: "#6C7086" },
            };
          }
          return token;
        })
      : tokenColors;

  return {
    name:
      flavor === "dark" ? "Catppuccin Dark" : `Catppuccin ${flavorData.name}`,
    type: context.isLatte ? "light" : "dark",
    colors: finalUiColors,
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokens(context),
    tokenColors: finalTokenColors,
  };
};
