import {
  CatppuccinBracketMode,
  CatppuccinWorkbenchMode,
  ThemeContext,
} from "../types";
import { opacity, transparent, shade } from "./utils";
import extensions from "./extensions";

const getCustomizedColors = (context: ThemeContext) => {
  const { palette, options, isLatte } = context;

  // invert the shade if current theme is latte
  const L = isLatte ? -1 : 1;
  const bracketsMap: Record<CatppuccinBracketMode, Record<string, string>> = {
    rainbow: {
      "editorBracketHighlight.foreground1": palette.red,
      "editorBracketHighlight.foreground2": palette.peach,
      "editorBracketHighlight.foreground3": palette.yellow,
      "editorBracketHighlight.foreground4": palette.green,
      "editorBracketHighlight.foreground5": palette.sapphire,
      "editorBracketHighlight.foreground6": palette.mauve,
      "editorBracketHighlight.unexpectedBracket.foreground": palette.maroon,
    },
    dimmed: {
      "editorBracketHighlight.foreground1": shade(palette.red, -0.6 * L),
      "editorBracketHighlight.foreground2": shade(palette.peach, -0.6 * L),
      "editorBracketHighlight.foreground3": shade(palette.yellow, -0.6 * L),
      "editorBracketHighlight.foreground4": shade(palette.green, -0.6 * L),
      "editorBracketHighlight.foreground5": shade(palette.sapphire, -0.6 * L),
      "editorBracketHighlight.foreground6": shade(palette.mauve, -0.6 * L),
      "editorBracketHighlight.unexpectedBracket.foreground": shade(
        palette.maroon,
        -0.6 * L
      ),
    },
    monochromatic: {
      "editorBracketHighlight.foreground1": palette.subtext1,
      "editorBracketHighlight.foreground2": palette.subtext0,
      "editorBracketHighlight.foreground3": palette.overlay2,
      "editorBracketHighlight.foreground4": palette.overlay1,
      "editorBracketHighlight.foreground5": palette.overlay0,
      "editorBracketHighlight.foreground6": palette.surface2,
      "editorBracketHighlight.unexpectedbracket.foreground": palette.maroon,
    },
    neovim: {
      "editorBracketHighlight.foreground1": palette.red,
      "editorBracketHighlight.foreground2": palette.teal,
      "editorBracketHighlight.foreground3": palette.yellow,
      "editorBracketHighlight.foreground4": palette.blue,
      "editorBracketHighlight.foreground5": palette.pink,
      "editorBracketHighlight.foreground6": palette.flamingo,
      "editorBracketHighlight.unexpectedBracket.foreground": palette.maroon,
    },
  };

  const workbenchMap: Record<
    CatppuccinWorkbenchMode,
    Record<string, string>
  > = {
    default: {},
    flat: {
      "activityBar.background": palette.mantle,
      "breadcrumb.background": palette.base,
      "commandCenter.background": palette.mantle,
      "debugToolBar.background": palette.mantle,
      "editorGroupHeader.tabsBackground": palette.mantle,
      "minimap.background": opacity(palette.base, 0.5),
      "sideBarTitle.background": palette.mantle,
      "statusBar.background": palette.mantle,
      "statusBar.noFolderBackground": palette.mantle,
      "tab.border": palette.base,
      "titleBar.activeBackground": palette.mantle,
      "titleBar.inactiveBackground": palette.mantle,
      "scrollbar.shadow": palette.mantle,
    },
  };

  return {
    ...bracketsMap[options.bracketMode],
    ...workbenchMap[options.workbenchMode],
  };
};

export const getUiColors = (context: ThemeContext) => {
  const { palette, options, isLatte } = context;

  const accent = palette[options.accent];
  const dropBackground = opacity(palette.surface2, 0.6);

  // support for custom named colors
  const customNamedColors = {
    ...Object.entries({
      // collect the options, overwrite the "all" config with the current palette config
      ...options.customUIColors.all,
      ...options.customUIColors[palette.name],
    })
      .map(([k, v]) => {
        // deal with accents
        if (v.startsWith("accent")) {
          const entry = v.split(" ");
          if (entry.length !== 1) {
            return {
              [k]: opacity(accent, Number(entry[1])),
            };
          } else {
            return {
              [k]: accent,
            };
          }
        }

        //check if the entry is a "color opacity" mapping
        const entry = v.split(" ");
        if (entry.length !== 1) {
          // call the opacity function
          v = opacity(palette[entry[0]], Number(entry[1]));
        } else {
          // resolve to the palette color
          v = palette[v];
        }

        return {
          [k]: v,
        };
      })
      .reduce((prev, cur) => ({ ...prev, ...cur }), {}),
  };

  // find the definitions here:
  // https://code.visualstudio.com/api/references/theme-color
  return {
    // Base colors
    focusBorder: transparent,
    foreground: palette.text,
    disabledForeground: palette.subtext0,
    "widget.shadow": opacity(palette.mantle, 0.5),
    "selection.background": palette.surface2,
    descriptionForeground: palette.text,
    errorForeground: palette.red,
    "icon.foreground": accent,
    "sash.hoverBorder": accent,

    // Window border
    "window.activeBorder": transparent,
    "window.inactiveBorder": transparent,

    // Text colors
    "textBlockQuote.background": palette.mantle,
    "textBlockQuote.border": palette.crust,
    "textCodeBlock.background": palette.base,
    "textLink.activeForeground": palette.sky,
    "textLink.foreground": palette.blue,
    "textPreformat.foreground": palette.text,
    "textSeparator.foreground": accent,

    // Activity Bar
    "activityBar.background": palette.crust,
    "activityBar.foreground": accent,
    "activityBar.dropBar": dropBackground,
    "activityBar.inactiveForeground": palette.overlay0,
    "activityBar.border": transparent,
    "activityBarBadge.background": accent,
    "activityBarBadge.foreground": palette.crust,
    "activityBar.activeBorder": transparent,
    "activityBar.activeBackground": transparent,
    "activityBar.activeFocusBorder": transparent,

    "badge.background": palette.surface1,
    "badge.foreground": palette.text,

    "breadcrumb.activeSelectionForeground": accent,
    "breadcrumb.background": palette.mantle,
    "breadcrumb.focusForeground": accent,
    "breadcrumb.foreground": opacity(palette.text, 0.8),
    "breadcrumbPicker.background": palette.mantle,

    // buttons & checkboxes
    "button.background": accent,
    "button.foreground": palette.crust,
    "button.border": transparent,
    "button.separator": transparent,
    "button.hoverBackground": shade(accent, 0.2),
    "button.secondaryForeground": palette.text,
    "button.secondaryBackground": palette.surface2,
    "button.secondaryHoverBackground": shade(palette.surface2, 0.2),
    "checkbox.background": palette.surface1,
    "checkbox.border": transparent,
    "checkbox.foreground": accent,

    // dropdown controls
    "dropdown.background": palette.mantle,
    "dropdown.listBackground": palette.surface2,
    "dropdown.border": accent,
    "dropdown.foreground": palette.text,

    // debug
    "debugToolBar.background": palette.crust,
    "debugToolBar.border": transparent,
    "debugExceptionWidget.background": palette.crust,
    "debugExceptionWidget.border": accent,
    "debugTokenExpression.number": palette.peach,
    "debugTokenExpression.boolean": palette.mauve,
    "debugTokenExpression.string": palette.green,
    "debugTokenExpression.error": palette.red,

    // debug icons
    "debugIcon.breakpointForeground": palette.red,
    "debugIcon.breakpointDisabledForeground": opacity(palette.red, 0.6),
    "debugIcon.breakpointUnverifiedForeground": palette.base,
    "debugIcon.breakpointCurrentStackframeForeground": palette.surface2,
    "debugIcon.breakpointStackframeForeground": palette.surface2,
    "debugIcon.startForeground": palette.green,
    "debugIcon.pauseForeground": palette.blue,
    "debugIcon.stopForeground": palette.red,
    "debugIcon.disconnectForeground": palette.surface2,
    "debugIcon.restartForeground": palette.teal,
    "debugIcon.stepOverForeground": palette.mauve,
    "debugIcon.stepIntoForeground": palette.text,
    "debugIcon.stepOutForeground": palette.text,
    "debugIcon.continueForeground": palette.green,
    "debugIcon.stepBackForeground": palette.surface2,
    "debugConsole.infoForeground": palette.blue,
    "debugConsole.warningForeground": palette.peach,
    "debugConsole.errorForeground": palette.red,
    "debugConsole.sourceForeground": palette.rosewater,
    "debugConsoleInputIcon.foreground": palette.text,

    "diffEditor.border": palette.surface2,
    "diffEditor.insertedTextBackground": opacity(palette.green, 0.1),
    "diffEditor.removedTextBackground": opacity(palette.red, 0.1),

    "editor.background": palette.base,
    "editor.findMatchBackground": palette.surface2,
    "editor.findMatchBorder": opacity(accent, 0.4),
    "editor.findMatchHighlightBackground": opacity(palette.peach, 0.35),
    "editor.findMatchHighlightBorder": transparent,
    "editor.findRangeHighlightBackground": opacity(palette.surface2, 0.3),
    "editor.findRangeHighlightBorder": transparent,
    "editor.foldBackground": opacity(palette.sky, 0.25),
    "editor.foreground": palette.text,
    "editor.hoverHighlightBackground": opacity(palette.sky, 0.25),
    "editor.inactiveSelectionBackground": transparent,
    "editor.lineHighlightBackground": opacity(palette.text, 0.07),
    "editor.lineHighlightBorder": palette.base,
    "editor.rangeHighlightBackground": opacity(palette.sky, 0.25),
    "editor.rangeHighlightBorder": transparent,
    "editor.selectionBackground": palette.surface2,
    "editor.selectionHighlightBackground": opacity(palette.overlay2, 0.4),
    "editor.selectionHighlightBorder": opacity(palette.sky, 0.2),
    "editor.wordHighlightBackground": opacity(palette.surface2, 0.7),
    "editor.wordHighlightStrongBackground": opacity(palette.surface2, 0.5),
    "editorBracketMatch.background": opacity(palette.overlay2, 0.1),
    "editorBracketMatch.border": palette.overlay2,
    "editorCodeLens.foreground": palette.overlay1,
    "editorCursor.background": palette.base,
    "editorCursor.foreground": palette.rosewater,
    "editorError.background": transparent,
    "editorError.border": transparent,
    "editorError.foreground": palette.red,
    "editorGroup.border": palette.surface2,
    "editorGroup.dropBackground": dropBackground,
    "editorGroup.emptyBackground": palette.base,
    "editorGroupHeader.tabsBackground": palette.crust,
    "editorGutter.addedBackground": palette.green,
    "editorGutter.background": palette.base,
    "editorGutter.commentRangeForeground": palette.overlay2,
    "editorGutter.deletedBackground": palette.red,
    "editorGutter.foldingControlForeground": palette.overlay2,
    "editorGutter.modifiedBackground": palette.sky,
    "editorHoverWidget.background": palette.mantle,
    "editorHoverWidget.border": palette.surface2,
    "editorHoverWidget.foreground": palette.text,
    "editorIndentGuide.activeBackground": palette.surface2,
    "editorIndentGuide.background": palette.surface1,
    "editorInfo.background": transparent,
    "editorInfo.border": transparent,
    "editorInfo.foreground": palette.blue,
    "editorLineNumber.activeForeground": accent,
    "editorLineNumber.foreground": palette.overlay1,
    "editorLink.activeForeground": accent,
    "editorMarkerNavigation.background": palette.mantle,
    "editorMarkerNavigationError.background": palette.red,
    "editorMarkerNavigationInfo.background": palette.blue,
    "editorMarkerNavigationWarning.background": palette.yellow,
    "editorOverviewRuler.background": palette.mantle,
    "editorOverviewRuler.border": opacity(palette.text, 0.07),
    "editorRuler.foreground": palette.surface2,
    "editorStickyScrollHover.background": palette.surface0,
    "editorSuggestWidget.background": palette.mantle,
    "editorSuggestWidget.border": palette.surface2,
    "editorSuggestWidget.foreground": palette.text,
    "editorSuggestWidget.highlightForeground": accent,
    "editorSuggestWidget.selectedBackground": palette.surface0,
    "editorWarning.background": transparent,
    "editorWarning.border": transparent,
    "editorWarning.foreground": palette.peach,
    "editorWhitespace.foreground": opacity(palette.overlay2, 0.4),
    "editorWidget.background": palette.mantle,
    "editorWidget.foreground": palette.text,
    "editorWidget.resizeBorder": palette.surface2,
    "editorLightBulb.foreground": palette.yellow,

    // extensions marketplace
    "extensionButton.prominentForeground": palette.crust,
    "extensionButton.prominentBackground": accent,
    "extensionButton.prominentHoverBackground": shade(accent, 0.2),
    "extensionBadge.remoteBackground": palette.blue,
    "extensionBadge.remoteForeground": palette.crust,
    "extensionIcon.starForeground": palette.yellow,
    "extensionIcon.verifiedForeground": palette.green,
    "extensionIcon.preReleaseForeground": palette.rosewater,
    "extensionIcon.sponsorForeground": palette.pink,

    // git colors
    "gitDecoration.addedResourceForeground": palette.green,
    "gitDecoration.conflictingResourceForeground": palette.mauve,
    "gitDecoration.deletedResourceForeground": palette.red,
    "gitDecoration.ignoredResourceForeground": palette.overlay0,
    "gitDecoration.modifiedResourceForeground": palette.yellow,
    "gitDecoration.stageDeletedResourceForeground": palette.red,
    "gitDecoration.stageModifiedResourceForeground": palette.yellow,
    "gitDecoration.submoduleResourceForeground": palette.blue,
    "gitDecoration.untrackedResourceForeground": palette.green,

    "input.background": palette.surface0,
    "input.border": transparent,
    "input.foreground": palette.text,
    "input.placeholderForeground": opacity(palette.text, 0.45),
    "inputOption.activeBackground": opacity(palette.blue, 0.15),
    "inputOption.activeBorder": opacity(palette.crust, 0.2),
    "inputOption.activeForeground": palette.text,
    "inputValidation.errorBackground": palette.red,
    "inputValidation.errorBorder": opacity(palette.crust, 0.2),
    "inputValidation.errorForeground": palette.crust,
    "inputValidation.infoBackground": palette.blue,
    "inputValidation.infoBorder": opacity(palette.crust, 0.2),
    "inputValidation.infoForeground": palette.crust,
    "inputValidation.warningBackground": palette.peach,
    "inputValidation.warningBorder": opacity(palette.crust, 0.2),
    "inputValidation.warningForeground": palette.crust,

    // Lists and trees
    "list.activeSelectionBackground": palette.surface1, // currently selected in file tree
    "list.activeSelectionForeground": palette.text,
    "list.dropBackground": dropBackground,
    "list.focusBackground": palette.surface0, // when using keyboard to move around files
    "list.focusForeground": palette.text,
    "list.focusOutline": transparent,
    "list.highlightForeground": accent,
    "list.hoverBackground": isLatte ? palette.surface2 : palette.base, // when hovering over the file tree
    "list.hoverForeground": palette.text,
    "list.inactiveSelectionBackground": palette.surface1, // currently selected focused in editor
    "list.inactiveSelectionForeground": palette.text,
    "list.warningForeground": palette.yellow,
    "listFilterWidget.background": palette.surface1,
    "listFilterWidget.noMatchesOutline": palette.red,
    "listFilterWidget.outline": transparent,
    "tree.indentGuidesStroke": palette.overlay0,

    "menu.background": palette.base,
    "menu.border": opacity(palette.base, 0.5),
    "menu.foreground": palette.text,
    "menu.selectionBackground": palette.surface2,
    "menu.selectionBorder": transparent,
    "menu.selectionForeground": palette.text,
    "menu.separatorBackground": palette.surface2,
    "menubar.selectionBackground": palette.surface1,
    "menubar.selectionForeground": palette.text,

    "merge.commonContentBackground": palette.surface1,
    "merge.commonHeaderBackground": palette.surface2,
    "merge.currentContentBackground": opacity(palette.green, 0.2),
    "merge.currentHeaderBackground": opacity(palette.green, 0.4),
    "merge.incomingContentBackground": opacity(palette.blue, 0.2),
    "merge.incomingHeaderBackground": opacity(palette.blue, 0.4),

    "minimap.background": opacity(palette.mantle, 0.5),
    "minimap.errorHighlight": palette.red,
    "minimap.findMatchHighlight": palette.surface2,
    "minimap.selectionHighlight": palette.surface2,
    "minimap.warningHighlight": palette.yellow,
    "minimapGutter.addedBackground": palette.green,
    "minimapGutter.deletedBackground": palette.red,
    "minimapGutter.modifiedBackground": palette.sky,

    "notificationCenter.border": accent,
    "notificationCenterHeader.foreground": palette.text,
    "notificationCenterHeader.background": palette.mantle,
    "notificationToast.border": accent,
    "notifications.foreground": palette.text,
    "notifications.background": palette.mantle,
    "notifications.border": accent,
    "notificationLink.foreground": palette.blue,
    "notificationsErrorIcon.foreground": palette.red,
    "notificationsWarningIcon.foreground": palette.peach,
    "notificationsInfoIcon.foreground": palette.blue,

    "panel.background": palette.base,
    "panel.border": palette.surface2,
    "panelSection.border": palette.surface2,
    "panelSection.dropBackground": dropBackground,
    "panelTitle.activeBorder": palette.text,
    "panelTitle.activeForeground": palette.text,
    "panelTitle.inactiveForeground": palette.subtext0,

    "peekView.border": accent,
    "peekViewEditor.background": palette.mantle,
    "peekViewEditor.matchHighlightBackground": opacity(palette.peach, 0.25),
    "peekViewEditor.matchHighlightBorder": palette.peach,
    "peekViewEditorGutter.background": palette.mantle,
    "peekViewResult.background": palette.mantle,
    "peekViewResult.fileForeground": palette.text,
    "peekViewResult.lineForeground": palette.text,
    "peekViewResult.matchHighlightBackground": opacity(palette.peach, 0.25),
    "peekViewResult.selectionBackground": palette.surface0,
    "peekViewResult.selectionForeground": palette.text,
    "peekViewTitle.background": palette.base,
    "peekViewTitleDescription.foreground": opacity(palette.subtext1, 0.7),
    "peekViewTitleLabel.foreground": palette.text,

    "pickerGroup.border": accent,
    "pickerGroup.foreground": accent,

    "progressBar.background": accent,

    "scrollbar.shadow": palette.crust,
    "scrollbarSlider.activeBackground": opacity(palette.surface0, 0.4),
    "scrollbarSlider.background": opacity(palette.surface2, 0.5),
    "scrollbarSlider.hoverBackground": palette.overlay0,

    "settings.focusedRowBackground": opacity(palette.surface2, 0.2),
    "settings.headerForeground": palette.text,
    "settings.modifiedItemIndicator": accent,
    "settings.dropdownBackground": palette.surface1,
    "settings.dropdownListBorder": transparent,
    "settings.textInputBackground": palette.surface1,
    "settings.textInputBorder": transparent,
    "settings.numberInputBackground": palette.surface1,
    "settings.numberInputBorder": transparent,

    "sideBar.background": palette.mantle,
    "sideBar.dropBackground": dropBackground,
    "sideBar.foreground": palette.text,
    "sideBarSectionHeader.background": palette.mantle,
    "sideBarSectionHeader.foreground": palette.text,
    "sideBarTitle.foreground": accent,
    "sideBarTitle.background": palette.crust,

    // Status Bar
    "statusBar.background": palette.crust,
    "statusBar.foreground": palette.text,
    // having no folder open shouldn't change the bar
    "statusBar.noFolderBackground": palette.crust,
    "statusBar.noFolderForeground": palette.text,
    // debugging is peach
    "statusBar.debuggingBackground": palette.peach,
    "statusBar.debuggingForeground": palette.crust,
    // remote is blue
    "statusBarItem.remoteBackground": palette.blue,
    "statusBarItem.remoteForeground": palette.crust,
    // different states
    "statusBarItem.activeBackground": opacity(palette.surface2, 0.4),
    "statusBarItem.hoverBackground": opacity(palette.surface2, 0.2),
    "statusBarItem.prominentForeground": accent,
    "statusBarItem.prominentBackground": transparent,
    "statusBarItem.prominentHoverBackground": opacity(palette.surface2, 0.2),
    "statusBarItem.errorForeground": palette.red,
    "statusBarItem.errorBackground": transparent,
    "statusBarItem.warningForeground": palette.peach,
    "statusBarItem.warningBackground": transparent,

    // command center
    "commandCenter.foreground": palette.subtext1,
    "commandCenter.activeForeground": accent,
    "commandCenter.background": palette.crust,
    "commandCenter.activeBackground": opacity(palette.surface2, 0.2),
    "commandCenter.border": accent,

    // Tab Bar
    "tab.activeBackground": palette.base,
    "tab.activeBorder": accent,
    "tab.activeBorderTop": transparent,
    "tab.activeForeground": accent,
    "tab.border": palette.mantle,
    "tab.inactiveBackground": palette.mantle,
    "tab.inactiveForeground": palette.overlay0,

    // Terminal
    "terminal.ansiBlack": palette.overlay0,
    "terminal.ansiBlue": palette.blue,
    "terminal.ansiBrightBlack": palette.overlay1,
    "terminal.ansiBrightBlue": palette.blue,
    "terminal.ansiBrightCyan": palette.sky,
    "terminal.ansiBrightGreen": palette.green,
    "terminal.ansiBrightMagenta": palette.pink,
    "terminal.ansiBrightRed": palette.red,
    "terminal.ansiBrightWhite": palette.text,
    "terminal.ansiBrightYellow": palette.yellow,
    "terminal.ansiCyan": palette.sky,
    "terminal.ansiGreen": palette.green,
    "terminal.ansiMagenta": palette.pink,
    "terminal.ansiRed": palette.red,
    "terminal.ansiWhite": palette.overlay2,
    "terminal.ansiYellow": palette.yellow,
    "terminal.border": palette.surface2,
    "terminal.foreground": palette.text,
    "terminal.dropBackground": dropBackground,
    "terminal.selectionBackground": palette.surface2,
    "terminalCursor.background": palette.base,
    "terminalCursor.foreground": palette.rosewater,

    // title bar
    "titleBar.activeBackground": palette.crust,
    "titleBar.activeForeground": palette.text,
    "titleBar.inactiveBackground": palette.crust,
    "titleBar.inactiveForeground": opacity(palette.text, 0.5),
    "titleBar.border": transparent,

    // welcome page
    "welcomePage.tileBackground": palette.mantle,
    "welcomePage.progress.background": palette.crust,
    "welcomePage.progress.foreground": accent,
    "walkThrough.embeddedEditorBackground": opacity(palette.base, 0.3),

    // symbols in outline, autocomplete, etc.
    "symbolIcon.textForeground": palette.text,
    "symbolIcon.arrayForeground": palette.peach,
    "symbolIcon.booleanForeground": palette.mauve,
    "symbolIcon.classForeground": palette.yellow,
    "symbolIcon.colorForeground": palette.pink,
    "symbolIcon.constantForeground": palette.peach,
    "symbolIcon.constructorForeground": palette.lavender,
    "symbolIcon.enumeratorForeground": palette.yellow,
    "symbolIcon.enumeratorMemberForeground": palette.yellow,
    "symbolIcon.eventForeground": palette.pink,
    "symbolIcon.fieldForeground": palette.text,
    "symbolIcon.fileForeground": accent,
    "symbolIcon.folderForeground": accent,
    "symbolIcon.functionForeground": palette.blue,
    "symbolIcon.interfaceForeground": palette.yellow,
    "symbolIcon.keyForeground": palette.teal,
    "symbolIcon.keywordForeground": palette.mauve,
    "symbolIcon.methodForeground": palette.blue,
    "symbolIcon.moduleForeground": palette.text,
    "symbolIcon.namespaceForeground": palette.yellow,
    "symbolIcon.nullForeground": palette.maroon,
    "symbolIcon.numberForeground": palette.peach,
    "symbolIcon.objectForeground": palette.yellow,
    "symbolIcon.operatorForeground": palette.teal,
    "symbolIcon.packageForeground": palette.flamingo,
    "symbolIcon.propertyForeground": palette.maroon,
    "symbolIcon.referenceForeground": palette.yellow,
    "symbolIcon.snippetForeground": palette.flamingo,
    "symbolIcon.stringForeground": palette.green,
    "symbolIcon.structForeground": palette.teal,
    "symbolIcon.typeParameterForeground": palette.maroon,
    "symbolIcon.unitForeground": palette.text,
    "symbolIcon.variableForeground": palette.text,

    // chart colors
    "charts.foreground": palette.text,
    "charts.lines": palette.subtext1,
    "charts.red": palette.red,
    "charts.blue": palette.blue,
    "charts.yellow": palette.yellow,
    "charts.orange": palette.peach,
    "charts.green": palette.green,
    "charts.purple": palette.mauve,

    ...extensions(context),

    // workbench overrides
    ...getCustomizedColors(context),
    // custom named overrides
    ...customNamedColors,
  };
};
