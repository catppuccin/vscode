/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 * Instead, run `yarn run updateVSCtypes` to regenerate this file.
 */

export interface WorkbenchColors {
  /**
   * Overall foreground color. This color is only used if not overridden by a component.
   */
  foreground?: string;
  /**
   * Overall foreground for disabled elements. This color is only used if not overridden by a component.
   */
  disabledForeground?: string;
  /**
   * Overall foreground color for error messages. This color is only used if not overridden by a component.
   */
  errorForeground?: string;
  /**
   * Foreground color for description text providing additional information, for example for a label.
   */
  descriptionForeground?: string;
  /**
   * The default color for icons in the workbench.
   */
  "icon.foreground"?: string;
  /**
   * Overall border color for focused elements. This color is only used if not overridden by a component.
   */
  focusBorder?: string;
  /**
   * An extra border around elements to separate them from others for greater contrast.
   */
  contrastBorder?: string;
  /**
   * An extra border around active elements to separate them from others for greater contrast.
   */
  contrastActiveBorder?: string;
  /**
   * The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.
   */
  "selection.background"?: string;
  /**
   * Color for text separators.
   */
  "textSeparator.foreground"?: string;
  /**
   * Foreground color for links in text.
   */
  "textLink.foreground"?: string;
  /**
   * Foreground color for links in text when clicked on and on mouse hover.
   */
  "textLink.activeForeground"?: string;
  /**
   * Foreground color for preformatted text segments.
   */
  "textPreformat.foreground"?: string;
  /**
   * Background color for block quotes in text.
   */
  "textBlockQuote.background"?: string;
  /**
   * Border color for block quotes in text.
   */
  "textBlockQuote.border"?: string;
  /**
   * Background color for code blocks in text.
   */
  "textCodeBlock.background"?: string;
  /**
   * Shadow color of widgets such as find/replace inside the editor.
   */
  "widget.shadow"?: string;
  /**
   * Border color of widgets such as find/replace inside the editor.
   */
  "widget.border"?: string;
  /**
   * Input box background.
   */
  "input.background"?: string;
  /**
   * Input box foreground.
   */
  "input.foreground"?: string;
  /**
   * Input box border.
   */
  "input.border"?: string;
  /**
   * Border color of activated options in input fields.
   */
  "inputOption.activeBorder"?: string;
  /**
   * Background color of activated options in input fields.
   */
  "inputOption.hoverBackground"?: string;
  /**
   * Background hover color of options in input fields.
   */
  "inputOption.activeBackground"?: string;
  /**
   * Foreground color of activated options in input fields.
   */
  "inputOption.activeForeground"?: string;
  /**
   * Input box foreground color for placeholder text.
   */
  "input.placeholderForeground"?: string;
  /**
   * Input validation background color for information severity.
   */
  "inputValidation.infoBackground"?: string;
  /**
   * Input validation foreground color for information severity.
   */
  "inputValidation.infoForeground"?: string;
  /**
   * Input validation border color for information severity.
   */
  "inputValidation.infoBorder"?: string;
  /**
   * Input validation background color for warning severity.
   */
  "inputValidation.warningBackground"?: string;
  /**
   * Input validation foreground color for warning severity.
   */
  "inputValidation.warningForeground"?: string;
  /**
   * Input validation border color for warning severity.
   */
  "inputValidation.warningBorder"?: string;
  /**
   * Input validation background color for error severity.
   */
  "inputValidation.errorBackground"?: string;
  /**
   * Input validation foreground color for error severity.
   */
  "inputValidation.errorForeground"?: string;
  /**
   * Input validation border color for error severity.
   */
  "inputValidation.errorBorder"?: string;
  /**
   * Dropdown background.
   */
  "dropdown.background"?: string;
  /**
   * Dropdown list background.
   */
  "dropdown.listBackground"?: string;
  /**
   * Dropdown foreground.
   */
  "dropdown.foreground"?: string;
  /**
   * Dropdown border.
   */
  "dropdown.border"?: string;
  /**
   * Button foreground color.
   */
  "button.foreground"?: string;
  /**
   * Button separator color.
   */
  "button.separator"?: string;
  /**
   * Button background color.
   */
  "button.background"?: string;
  /**
   * Button background color when hovering.
   */
  "button.hoverBackground"?: string;
  /**
   * Button border color.
   */
  "button.border"?: string;
  /**
   * Secondary button foreground color.
   */
  "button.secondaryForeground"?: string;
  /**
   * Secondary button background color.
   */
  "button.secondaryBackground"?: string;
  /**
   * Secondary button background color when hovering.
   */
  "button.secondaryHoverBackground"?: string;
  /**
   * Badge background color. Badges are small information labels, e.g. for search results count.
   */
  "badge.background"?: string;
  /**
   * Badge foreground color. Badges are small information labels, e.g. for search results count.
   */
  "badge.foreground"?: string;
  /**
   * Scrollbar shadow to indicate that the view is scrolled.
   */
  "scrollbar.shadow"?: string;
  /**
   * Scrollbar slider background color.
   */
  "scrollbarSlider.background"?: string;
  /**
   * Scrollbar slider background color when hovering.
   */
  "scrollbarSlider.hoverBackground"?: string;
  /**
   * Scrollbar slider background color when clicked on.
   */
  "scrollbarSlider.activeBackground"?: string;
  /**
   * Background color of the progress bar that can show for long running operations.
   */
  "progressBar.background"?: string;
  /**
   * Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorError.background"?: string;
  /**
   * Foreground color of error squigglies in the editor.
   */
  "editorError.foreground"?: string;
  /**
   * If set, color of double underlines for errors in the editor.
   */
  "editorError.border"?: string;
  /**
   * Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorWarning.background"?: string;
  /**
   * Foreground color of warning squigglies in the editor.
   */
  "editorWarning.foreground"?: string;
  /**
   * If set, color of double underlines for warnings in the editor.
   */
  "editorWarning.border"?: string;
  /**
   * Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorInfo.background"?: string;
  /**
   * Foreground color of info squigglies in the editor.
   */
  "editorInfo.foreground"?: string;
  /**
   * If set, color of double underlines for infos in the editor.
   */
  "editorInfo.border"?: string;
  /**
   * Foreground color of hint squigglies in the editor.
   */
  "editorHint.foreground"?: string;
  /**
   * If set, color of double underlines for hints in the editor.
   */
  "editorHint.border"?: string;
  /**
   * Border color of active sashes.
   */
  "sash.hoverBorder"?: string;
  /**
   * Editor background color.
   */
  "editor.background"?: string;
  /**
   * Editor default foreground color.
   */
  "editor.foreground"?: string;
  /**
   * Sticky scroll background color for the editor
   */
  "editorStickyScroll.background"?: string;
  /**
   * Sticky scroll on hover background color for the editor
   */
  "editorStickyScrollHover.background"?: string;
  /**
   * Background color of editor widgets, such as find/replace.
   */
  "editorWidget.background"?: string;
  /**
   * Foreground color of editor widgets, such as find/replace.
   */
  "editorWidget.foreground"?: string;
  /**
   * Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.
   */
  "editorWidget.border"?: string;
  /**
   * Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
   */
  "editorWidget.resizeBorder"?: string;
  /**
   * Quick picker background color. The quick picker widget is the container for pickers like the command palette.
   */
  "quickInput.background"?: string;
  /**
   * Quick picker foreground color. The quick picker widget is the container for pickers like the command palette.
   */
  "quickInput.foreground"?: string;
  /**
   * Quick picker title background color. The quick picker widget is the container for pickers like the command palette.
   */
  "quickInputTitle.background"?: string;
  /**
   * Quick picker color for grouping labels.
   */
  "pickerGroup.foreground"?: string;
  /**
   * Quick picker color for grouping borders.
   */
  "pickerGroup.border"?: string;
  /**
   * Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
   */
  "keybindingLabel.background"?: string;
  /**
   * Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
   */
  "keybindingLabel.foreground"?: string;
  /**
   * Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
   */
  "keybindingLabel.border"?: string;
  /**
   * Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
   */
  "keybindingLabel.bottomBorder"?: string;
  /**
   * Color of the editor selection.
   */
  "editor.selectionBackground"?: string;
  /**
   * Color of the selected text for high contrast.
   */
  "editor.selectionForeground"?: string;
  /**
   * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.inactiveSelectionBackground"?: string;
  /**
   * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.selectionHighlightBackground"?: string;
  /**
   * Border color for regions with the same content as the selection.
   */
  "editor.selectionHighlightBorder"?: string;
  /**
   * Color of the current search match.
   */
  "editor.findMatchBackground"?: string;
  /**
   * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.findMatchHighlightBackground"?: string;
  /**
   * Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.findRangeHighlightBackground"?: string;
  /**
   * Border color of the current search match.
   */
  "editor.findMatchBorder"?: string;
  /**
   * Border color of the other search matches.
   */
  "editor.findMatchHighlightBorder"?: string;
  /**
   * Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.findRangeHighlightBorder"?: string;
  /**
   * Color of the Search Editor query matches.
   */
  "searchEditor.findMatchBackground"?: string;
  /**
   * Border color of the Search Editor query matches.
   */
  "searchEditor.findMatchBorder"?: string;
  /**
   * Color of the text in the search viewlet's completion message.
   */
  "search.resultsInfoForeground"?: string;
  /**
   * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.hoverHighlightBackground"?: string;
  /**
   * Background color of the editor hover.
   */
  "editorHoverWidget.background"?: string;
  /**
   * Foreground color of the editor hover.
   */
  "editorHoverWidget.foreground"?: string;
  /**
   * Border color of the editor hover.
   */
  "editorHoverWidget.border"?: string;
  /**
   * Background color of the editor hover status bar.
   */
  "editorHoverWidget.statusBarBackground"?: string;
  /**
   * Color of active links.
   */
  "editorLink.activeForeground"?: string;
  /**
   * Foreground color of inline hints
   */
  "editorInlayHint.foreground"?: string;
  /**
   * Background color of inline hints
   */
  "editorInlayHint.background"?: string;
  /**
   * Foreground color of inline hints for types
   */
  "editorInlayHint.typeForeground"?: string;
  /**
   * Background color of inline hints for types
   */
  "editorInlayHint.typeBackground"?: string;
  /**
   * Foreground color of inline hints for parameters
   */
  "editorInlayHint.parameterForeground"?: string;
  /**
   * Background color of inline hints for parameters
   */
  "editorInlayHint.parameterBackground"?: string;
  /**
   * The color used for the lightbulb actions icon.
   */
  "editorLightBulb.foreground"?: string;
  /**
   * The color used for the lightbulb auto fix actions icon.
   */
  "editorLightBulbAutoFix.foreground"?: string;
  /**
   * Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  "diffEditor.insertedTextBackground"?: string;
  /**
   * Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  "diffEditor.removedTextBackground"?: string;
  /**
   * Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  "diffEditor.insertedLineBackground"?: string;
  /**
   * Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  "diffEditor.removedLineBackground"?: string;
  /**
   * Background color for the margin where lines got inserted.
   */
  "diffEditorGutter.insertedLineBackground"?: string;
  /**
   * Background color for the margin where lines got removed.
   */
  "diffEditorGutter.removedLineBackground"?: string;
  /**
   * Diff overview ruler foreground for inserted content.
   */
  "diffEditorOverview.insertedForeground"?: string;
  /**
   * Diff overview ruler foreground for removed content.
   */
  "diffEditorOverview.removedForeground"?: string;
  /**
   * Outline color for the text that got inserted.
   */
  "diffEditor.insertedTextBorder"?: string;
  /**
   * Outline color for text that got removed.
   */
  "diffEditor.removedTextBorder"?: string;
  /**
   * Border color between the two text editors.
   */
  "diffEditor.border"?: string;
  /**
   * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
   */
  "diffEditor.diagonalFill"?: string;
  /**
   * The background color of unchanged blocks in the diff editor.
   */
  "diffEditor.unchangedRegionBackground"?: string;
  /**
   * The foreground color of unchanged blocks in the diff editor.
   */
  "diffEditor.unchangedRegionForeground"?: string;
  /**
   * The background color of unchanged code in the diff editor.
   */
  "diffEditor.unchangedCodeBackground"?: string;
  /**
   * List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.focusBackground"?: string;
  /**
   * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.focusForeground"?: string;
  /**
   * List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.focusOutline"?: string;
  /**
   * List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.focusAndSelectionOutline"?: string;
  /**
   * List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.activeSelectionBackground"?: string;
  /**
   * List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.activeSelectionForeground"?: string;
  /**
   * List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.activeSelectionIconForeground"?: string;
  /**
   * List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.inactiveSelectionBackground"?: string;
  /**
   * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.inactiveSelectionForeground"?: string;
  /**
   * List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.inactiveSelectionIconForeground"?: string;
  /**
   * List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.inactiveFocusBackground"?: string;
  /**
   * List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  "list.inactiveFocusOutline"?: string;
  /**
   * List/Tree background when hovering over items using the mouse.
   */
  "list.hoverBackground"?: string;
  /**
   * List/Tree foreground when hovering over items using the mouse.
   */
  "list.hoverForeground"?: string;
  /**
   * List/Tree drag and drop background when moving items around using the mouse.
   */
  "list.dropBackground"?: string;
  /**
   * List/Tree foreground color of the match highlights when searching inside the list/tree.
   */
  "list.highlightForeground"?: string;
  /**
   * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
   */
  "list.focusHighlightForeground"?: string;
  /**
   * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
   */
  "list.invalidItemForeground"?: string;
  /**
   * Foreground color of list items containing errors.
   */
  "list.errorForeground"?: string;
  /**
   * Foreground color of list items containing warnings.
   */
  "list.warningForeground"?: string;
  /**
   * Background color of the type filter widget in lists and trees.
   */
  "listFilterWidget.background"?: string;
  /**
   * Outline color of the type filter widget in lists and trees.
   */
  "listFilterWidget.outline"?: string;
  /**
   * Outline color of the type filter widget in lists and trees, when there are no matches.
   */
  "listFilterWidget.noMatchesOutline"?: string;
  /**
   * Shadow color of the type filter widget in lists and trees.
   */
  "listFilterWidget.shadow"?: string;
  /**
   * Background color of the filtered match.
   */
  "list.filterMatchBackground"?: string;
  /**
   * Border color of the filtered match.
   */
  "list.filterMatchBorder"?: string;
  /**
   * Tree stroke color for the indentation guides.
   */
  "tree.indentGuidesStroke"?: string;
  /**
   * Tree stroke color for the indentation guides that are not active.
   */
  "tree.inactiveIndentGuidesStroke"?: string;
  /**
   * Table border color between columns.
   */
  "tree.tableColumnsBorder"?: string;
  /**
   * Background color for odd table rows.
   */
  "tree.tableOddRowsBackground"?: string;
  /**
   * List/Tree foreground color for items that are deemphasized.
   */
  "list.deemphasizedForeground"?: string;
  /**
   * Background color of checkbox widget.
   */
  "checkbox.background"?: string;
  /**
   * Background color of checkbox widget when the element it's in is selected.
   */
  "checkbox.selectBackground"?: string;
  /**
   * Foreground color of checkbox widget.
   */
  "checkbox.foreground"?: string;
  /**
   * Border color of checkbox widget.
   */
  "checkbox.border"?: string;
  /**
   * Border color of checkbox widget when the element it's in is selected.
   */
  "checkbox.selectBorder"?: string;
  "quickInput.list.focusBackground"?: string;
  /**
   * Quick picker foreground color for the focused item.
   */
  "quickInputList.focusForeground"?: string;
  /**
   * Quick picker icon foreground color for the focused item.
   */
  "quickInputList.focusIconForeground"?: string;
  /**
   * Quick picker background color for the focused item.
   */
  "quickInputList.focusBackground"?: string;
  /**
   * Border color of menus.
   */
  "menu.border"?: string;
  /**
   * Foreground color of menu items.
   */
  "menu.foreground"?: string;
  /**
   * Background color of menu items.
   */
  "menu.background"?: string;
  /**
   * Foreground color of the selected menu item in menus.
   */
  "menu.selectionForeground"?: string;
  /**
   * Background color of the selected menu item in menus.
   */
  "menu.selectionBackground"?: string;
  /**
   * Border color of the selected menu item in menus.
   */
  "menu.selectionBorder"?: string;
  /**
   * Color of a separator menu item in menus.
   */
  "menu.separatorBackground"?: string;
  /**
   * Toolbar background when hovering over actions using the mouse
   */
  "toolbar.hoverBackground"?: string;
  /**
   * Toolbar outline when hovering over actions using the mouse
   */
  "toolbar.hoverOutline"?: string;
  /**
   * Toolbar background when holding the mouse over actions
   */
  "toolbar.activeBackground"?: string;
  /**
   * Highlight background color of a snippet tabstop.
   */
  "editor.snippetTabstopHighlightBackground"?: string;
  /**
   * Highlight border color of a snippet tabstop.
   */
  "editor.snippetTabstopHighlightBorder"?: string;
  /**
   * Highlight background color of the final tabstop of a snippet.
   */
  "editor.snippetFinalTabstopHighlightBackground"?: string;
  /**
   * Highlight border color of the final tabstop of a snippet.
   */
  "editor.snippetFinalTabstopHighlightBorder"?: string;
  /**
   * Color of focused breadcrumb items.
   */
  "breadcrumb.foreground"?: string;
  /**
   * Background color of breadcrumb items.
   */
  "breadcrumb.background"?: string;
  /**
   * Color of focused breadcrumb items.
   */
  "breadcrumb.focusForeground"?: string;
  /**
   * Color of selected breadcrumb items.
   */
  "breadcrumb.activeSelectionForeground"?: string;
  /**
   * Background color of breadcrumb item picker.
   */
  "breadcrumbPicker.background"?: string;
  /**
   * Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.currentHeaderBackground"?: string;
  /**
   * Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.currentContentBackground"?: string;
  /**
   * Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.incomingHeaderBackground"?: string;
  /**
   * Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.incomingContentBackground"?: string;
  /**
   * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.commonHeaderBackground"?: string;
  /**
   * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  "merge.commonContentBackground"?: string;
  /**
   * Border color on headers and the splitter in inline merge-conflicts.
   */
  "merge.border"?: string;
  /**
   * Current overview ruler foreground for inline merge-conflicts.
   */
  "editorOverviewRuler.currentContentForeground"?: string;
  /**
   * Incoming overview ruler foreground for inline merge-conflicts.
   */
  "editorOverviewRuler.incomingContentForeground"?: string;
  /**
   * Common ancestor overview ruler foreground for inline merge-conflicts.
   */
  "editorOverviewRuler.commonContentForeground"?: string;
  /**
   * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.findMatchForeground"?: string;
  /**
   * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.selectionHighlightForeground"?: string;
  /**
   * Minimap marker color for find matches.
   */
  "minimap.findMatchHighlight"?: string;
  /**
   * Minimap marker color for repeating editor selections.
   */
  "minimap.selectionOccurrenceHighlight"?: string;
  /**
   * Minimap marker color for the editor selection.
   */
  "minimap.selectionHighlight"?: string;
  /**
   * Minimap marker color for infos.
   */
  "minimap.infoHighlight"?: string;
  /**
   * Minimap marker color for warnings.
   */
  "minimap.warningHighlight"?: string;
  /**
   * Minimap marker color for errors.
   */
  "minimap.errorHighlight"?: string;
  /**
   * Minimap background color.
   */
  "minimap.background"?: string;
  /**
   * Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
   */
  "minimap.foregroundOpacity"?: string;
  /**
   * Minimap slider background color.
   */
  "minimapSlider.background"?: string;
  /**
   * Minimap slider background color when hovering.
   */
  "minimapSlider.hoverBackground"?: string;
  /**
   * Minimap slider background color when clicked on.
   */
  "minimapSlider.activeBackground"?: string;
  /**
   * The color used for the problems error icon.
   */
  "problemsErrorIcon.foreground"?: string;
  /**
   * The color used for the problems warning icon.
   */
  "problemsWarningIcon.foreground"?: string;
  /**
   * The color used for the problems info icon.
   */
  "problemsInfoIcon.foreground"?: string;
  /**
   * The foreground color used in charts.
   */
  "charts.foreground"?: string;
  /**
   * The color used for horizontal lines in charts.
   */
  "charts.lines"?: string;
  /**
   * The red color used in chart visualizations.
   */
  "charts.red"?: string;
  /**
   * The blue color used in chart visualizations.
   */
  "charts.blue"?: string;
  /**
   * The yellow color used in chart visualizations.
   */
  "charts.yellow"?: string;
  /**
   * The orange color used in chart visualizations.
   */
  "charts.orange"?: string;
  /**
   * The green color used in chart visualizations.
   */
  "charts.green"?: string;
  /**
   * The purple color used in chart visualizations.
   */
  "charts.purple"?: string;
  /**
   * The border color for text that got moved in the diff editor.
   */
  "diffEditor.move.border"?: string;
  /**
   * The active border color for text that got moved in the diff editor.
   */
  "diffEditor.moveActive.border"?: string;
  /**
   * The foreground color for array symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.arrayForeground"?: string;
  /**
   * The foreground color for boolean symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.booleanForeground"?: string;
  /**
   * The foreground color for class symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.classForeground"?: string;
  /**
   * The foreground color for color symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.colorForeground"?: string;
  /**
   * The foreground color for constant symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.constantForeground"?: string;
  /**
   * The foreground color for constructor symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.constructorForeground"?: string;
  /**
   * The foreground color for enumerator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.enumeratorForeground"?: string;
  /**
   * The foreground color for enumerator member symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.enumeratorMemberForeground"?: string;
  /**
   * The foreground color for event symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.eventForeground"?: string;
  /**
   * The foreground color for field symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.fieldForeground"?: string;
  /**
   * The foreground color for file symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.fileForeground"?: string;
  /**
   * The foreground color for folder symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.folderForeground"?: string;
  /**
   * The foreground color for function symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.functionForeground"?: string;
  /**
   * The foreground color for interface symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.interfaceForeground"?: string;
  /**
   * The foreground color for key symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.keyForeground"?: string;
  /**
   * The foreground color for keyword symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.keywordForeground"?: string;
  /**
   * The foreground color for method symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.methodForeground"?: string;
  /**
   * The foreground color for module symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.moduleForeground"?: string;
  /**
   * The foreground color for namespace symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.namespaceForeground"?: string;
  /**
   * The foreground color for null symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.nullForeground"?: string;
  /**
   * The foreground color for number symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.numberForeground"?: string;
  /**
   * The foreground color for object symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.objectForeground"?: string;
  /**
   * The foreground color for operator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.operatorForeground"?: string;
  /**
   * The foreground color for package symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.packageForeground"?: string;
  /**
   * The foreground color for property symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.propertyForeground"?: string;
  /**
   * The foreground color for reference symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.referenceForeground"?: string;
  /**
   * The foreground color for snippet symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.snippetForeground"?: string;
  /**
   * The foreground color for string symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.stringForeground"?: string;
  /**
   * The foreground color for struct symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.structForeground"?: string;
  /**
   * The foreground color for text symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.textForeground"?: string;
  /**
   * The foreground color for type parameter symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.typeParameterForeground"?: string;
  /**
   * The foreground color for unit symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.unitForeground"?: string;
  /**
   * The foreground color for variable symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  "symbolIcon.variableForeground"?: string;
  /**
   * Background color for toggled action items in action bar.
   */
  "actionBar.toggledBackground"?: string;
  /**
   * Foreground color of the active item in the parameter hint.
   */
  "editorHoverWidget.highlightForeground"?: string;
  /**
   * Background color for the highlight of line at the cursor position.
   */
  "editor.lineHighlightBackground"?: string;
  /**
   * Background color for the border around the line at the cursor position.
   */
  "editor.lineHighlightBorder"?: string;
  /**
   * Background color of highlighted ranges, like by quick open and find features. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.rangeHighlightBackground"?: string;
  /**
   * Background color of the border around highlighted ranges.
   */
  "editor.rangeHighlightBorder"?: string;
  /**
   * Background color of highlighted symbol, like for go to definition or go next/previous symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.symbolHighlightBackground"?: string;
  /**
   * Background color of the border around highlighted symbols.
   */
  "editor.symbolHighlightBorder"?: string;
  /**
   * Color of the editor cursor.
   */
  "editorCursor.foreground"?: string;
  /**
   * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
   */
  "editorCursor.background"?: string;
  /**
   * Color of whitespace characters in the editor.
   */
  "editorWhitespace.foreground"?: string;
  /**
   * Color of editor line numbers.
   */
  "editorLineNumber.foreground"?: string;
  /**
   * Color of the editor indentation guides.
   */
  "editorIndentGuide.background"?: string;
  /**
   * Color of the active editor indentation guides.
   */
  "editorIndentGuide.activeBackground"?: string;
  /**
   * Color of the editor indentation guides (1).
   */
  "editorIndentGuide.background1"?: string;
  /**
   * Color of the editor indentation guides (2).
   */
  "editorIndentGuide.background2"?: string;
  /**
   * Color of the editor indentation guides (3).
   */
  "editorIndentGuide.background3"?: string;
  /**
   * Color of the editor indentation guides (4).
   */
  "editorIndentGuide.background4"?: string;
  /**
   * Color of the editor indentation guides (5).
   */
  "editorIndentGuide.background5"?: string;
  /**
   * Color of the editor indentation guides (6).
   */
  "editorIndentGuide.background6"?: string;
  /**
   * Color of the active editor indentation guides (1).
   */
  "editorIndentGuide.activeBackground1"?: string;
  /**
   * Color of the active editor indentation guides (2).
   */
  "editorIndentGuide.activeBackground2"?: string;
  /**
   * Color of the active editor indentation guides (3).
   */
  "editorIndentGuide.activeBackground3"?: string;
  /**
   * Color of the active editor indentation guides (4).
   */
  "editorIndentGuide.activeBackground4"?: string;
  /**
   * Color of the active editor indentation guides (5).
   */
  "editorIndentGuide.activeBackground5"?: string;
  /**
   * Color of the active editor indentation guides (6).
   */
  "editorIndentGuide.activeBackground6"?: string;
  /**
   * Color of editor active line number
   */
  "editorActiveLineNumber.foreground"?: string;
  /**
   * Color of editor active line number
   */
  "editorLineNumber.activeForeground"?: string;
  /**
   * Color of the final editor line when editor.renderFinalNewline is set to dimmed.
   */
  "editorLineNumber.dimmedForeground"?: string;
  /**
   * Color of the editor rulers.
   */
  "editorRuler.foreground"?: string;
  /**
   * Foreground color of editor CodeLens
   */
  "editorCodeLens.foreground"?: string;
  /**
   * Background color behind matching brackets
   */
  "editorBracketMatch.background"?: string;
  /**
   * Color for matching brackets boxes
   */
  "editorBracketMatch.border"?: string;
  /**
   * Color of the overview ruler border.
   */
  "editorOverviewRuler.border"?: string;
  /**
   * Background color of the editor overview ruler.
   */
  "editorOverviewRuler.background"?: string;
  /**
   * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
   */
  "editorGutter.background"?: string;
  /**
   * Border color of unnecessary (unused) source code in the editor.
   */
  "editorUnnecessaryCode.border"?: string;
  /**
   * Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the  'editorUnnecessaryCode.border' theme color to underline unnecessary code instead of fading it out.
   */
  "editorUnnecessaryCode.opacity"?: string;
  /**
   * Border color of ghost text in the editor.
   */
  "editorGhostText.border"?: string;
  /**
   * Foreground color of the ghost text in the editor.
   */
  "editorGhostText.foreground"?: string;
  /**
   * Background color of the ghost text in the editor.
   */
  "editorGhostText.background"?: string;
  /**
   * Overview ruler marker color for range highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.rangeHighlightForeground"?: string;
  /**
   * Overview ruler marker color for errors.
   */
  "editorOverviewRuler.errorForeground"?: string;
  /**
   * Overview ruler marker color for warnings.
   */
  "editorOverviewRuler.warningForeground"?: string;
  /**
   * Overview ruler marker color for infos.
   */
  "editorOverviewRuler.infoForeground"?: string;
  /**
   * Foreground color of brackets (1). Requires enabling bracket pair colorization.
   */
  "editorBracketHighlight.foreground1"?: string;
  /**
   * Foreground color of brackets (2). Requires enabling bracket pair colorization.
   */
  "editorBracketHighlight.foreground2"?: string;
  /**
   * Foreground color of brackets (3). Requires enabling bracket pair colorization.
   */
  "editorBracketHighlight.foreground3"?: string;
  /**
   * Foreground color of brackets (4). Requires enabling bracket pair colorization.
   */
  "editorBracketHighlight.foreground4"?: string;
  /**
   * Foreground color of brackets (5). Requires enabling bracket pair colorization.
   */
  "editorBracketHighlight.foreground5"?: string;
  /**
   * Foreground color of brackets (6). Requires enabling bracket pair colorization.
   */
  "editorBracketHighlight.foreground6"?: string;
  /**
   * Foreground color of unexpected brackets.
   */
  "editorBracketHighlight.unexpectedBracket.foreground"?: string;
  /**
   * Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.background1"?: string;
  /**
   * Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.background2"?: string;
  /**
   * Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.background3"?: string;
  /**
   * Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.background4"?: string;
  /**
   * Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.background5"?: string;
  /**
   * Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.background6"?: string;
  /**
   * Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.activeBackground1"?: string;
  /**
   * Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.activeBackground2"?: string;
  /**
   * Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.activeBackground3"?: string;
  /**
   * Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.activeBackground4"?: string;
  /**
   * Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.activeBackground5"?: string;
  /**
   * Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
   */
  "editorBracketPairGuide.activeBackground6"?: string;
  /**
   * Border color used to highlight unicode characters.
   */
  "editorUnicodeHighlight.border"?: string;
  /**
   * Background color used to highlight unicode characters.
   */
  "editorUnicodeHighlight.background"?: string;
  /**
   * Overview ruler marker color for matching brackets.
   */
  "editorOverviewRuler.bracketMatchForeground"?: string;
  /**
   * Background color behind folded ranges. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.foldBackground"?: string;
  /**
   * Color of the folding control in the editor gutter.
   */
  "editorGutter.foldingControlForeground"?: string;
  /**
   * Background color when the editor auto renames on type.
   */
  "editor.linkedEditingBackground"?: string;
  /**
   * Background color of a symbol during read-access, like reading a variable. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.wordHighlightBackground"?: string;
  /**
   * Background color of a symbol during write-access, like writing to a variable. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.wordHighlightStrongBackground"?: string;
  /**
   * Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  "editor.wordHighlightTextBackground"?: string;
  /**
   * Border color of a symbol during read-access, like reading a variable.
   */
  "editor.wordHighlightBorder"?: string;
  /**
   * Border color of a symbol during write-access, like writing to a variable.
   */
  "editor.wordHighlightStrongBorder"?: string;
  /**
   * Border color of a textual occurrence for a symbol.
   */
  "editor.wordHighlightTextBorder"?: string;
  /**
   * Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.wordHighlightForeground"?: string;
  /**
   * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.wordHighlightStrongForeground"?: string;
  /**
   * Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  "editorOverviewRuler.wordHighlightTextForeground"?: string;
  /**
   * Background color of the peek view title area.
   */
  "peekViewTitle.background"?: string;
  /**
   * Color of the peek view title.
   */
  "peekViewTitleLabel.foreground"?: string;
  /**
   * Color of the peek view title info.
   */
  "peekViewTitleDescription.foreground"?: string;
  /**
   * Color of the peek view borders and arrow.
   */
  "peekView.border"?: string;
  /**
   * Background color of the peek view result list.
   */
  "peekViewResult.background"?: string;
  /**
   * Foreground color for line nodes in the peek view result list.
   */
  "peekViewResult.lineForeground"?: string;
  /**
   * Foreground color for file nodes in the peek view result list.
   */
  "peekViewResult.fileForeground"?: string;
  /**
   * Background color of the selected entry in the peek view result list.
   */
  "peekViewResult.selectionBackground"?: string;
  /**
   * Foreground color of the selected entry in the peek view result list.
   */
  "peekViewResult.selectionForeground"?: string;
  /**
   * Background color of the peek view editor.
   */
  "peekViewEditor.background"?: string;
  /**
   * Background color of the gutter in the peek view editor.
   */
  "peekViewEditorGutter.background"?: string;
  /**
   * Background color of sticky scroll in the peek view editor.
   */
  "peekViewEditorStickyScroll.background"?: string;
  /**
   * Match highlight color in the peek view result list.
   */
  "peekViewResult.matchHighlightBackground"?: string;
  /**
   * Match highlight color in the peek view editor.
   */
  "peekViewEditor.matchHighlightBackground"?: string;
  /**
   * Match highlight border in the peek view editor.
   */
  "peekViewEditor.matchHighlightBorder"?: string;
  /**
   * Editor marker navigation widget error color.
   */
  "editorMarkerNavigationError.background"?: string;
  /**
   * Editor marker navigation widget error heading background.
   */
  "editorMarkerNavigationError.headerBackground"?: string;
  /**
   * Editor marker navigation widget warning color.
   */
  "editorMarkerNavigationWarning.background"?: string;
  /**
   * Editor marker navigation widget warning heading background.
   */
  "editorMarkerNavigationWarning.headerBackground"?: string;
  /**
   * Editor marker navigation widget info color.
   */
  "editorMarkerNavigationInfo.background"?: string;
  /**
   * Editor marker navigation widget info heading background.
   */
  "editorMarkerNavigationInfo.headerBackground"?: string;
  /**
   * Editor marker navigation widget background.
   */
  "editorMarkerNavigation.background"?: string;
  /**
   * Background color of the suggest widget.
   */
  "editorSuggestWidget.background"?: string;
  /**
   * Border color of the suggest widget.
   */
  "editorSuggestWidget.border"?: string;
  /**
   * Foreground color of the suggest widget.
   */
  "editorSuggestWidget.foreground"?: string;
  /**
   * Foreground color of the selected entry in the suggest widget.
   */
  "editorSuggestWidget.selectedForeground"?: string;
  /**
   * Icon foreground color of the selected entry in the suggest widget.
   */
  "editorSuggestWidget.selectedIconForeground"?: string;
  /**
   * Background color of the selected entry in the suggest widget.
   */
  "editorSuggestWidget.selectedBackground"?: string;
  /**
   * Color of the match highlights in the suggest widget.
   */
  "editorSuggestWidget.highlightForeground"?: string;
  /**
   * Color of the match highlights in the suggest widget when an item is focused.
   */
  "editorSuggestWidget.focusHighlightForeground"?: string;
  /**
   * Foreground color of the suggest widget status.
   */
  "editorSuggestWidgetStatus.foreground"?: string;
  /**
   * Active tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.activeBackground"?: string;
  /**
   * Active tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedActiveBackground"?: string;
  /**
   * Inactive tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.inactiveBackground"?: string;
  /**
   * Inactive tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedInactiveBackground"?: string;
  /**
   * Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.activeForeground"?: string;
  /**
   * Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.inactiveForeground"?: string;
  /**
   * Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedActiveForeground"?: string;
  /**
   * Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedInactiveForeground"?: string;
  /**
   * Tab background color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.hoverBackground"?: string;
  /**
   * Tab background color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedHoverBackground"?: string;
  /**
   * Tab foreground color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.hoverForeground"?: string;
  /**
   * Tab foreground color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedHoverForeground"?: string;
  /**
   * Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.border"?: string;
  /**
   * Border to separate pinned tabs from other tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.lastPinnedBorder"?: string;
  /**
   * Border on the bottom of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.activeBorder"?: string;
  /**
   * Border on the bottom of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedActiveBorder"?: string;
  /**
   * Border to the top of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.activeBorderTop"?: string;
  /**
   * Border to the top of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedActiveBorderTop"?: string;
  /**
   * Border to highlight tabs when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.hoverBorder"?: string;
  /**
   * Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedHoverBorder"?: string;
  /**
   * Border on the top of modified active tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.activeModifiedBorder"?: string;
  /**
   * Border on the top of modified inactive tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.inactiveModifiedBorder"?: string;
  /**
   * Border on the top of modified active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedActiveModifiedBorder"?: string;
  /**
   * Border on the top of modified inactive tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  "tab.unfocusedInactiveModifiedBorder"?: string;
  /**
   * Background color of the editor pane visible on the left and right side of the centered editor layout.
   */
  "editorPane.background"?: string;
  /**
   * Background color of an empty editor group. Editor groups are the containers of editors.
   */
  "editorGroup.emptyBackground"?: string;
  /**
   * Border color of an empty editor group that is focused. Editor groups are the containers of editors.
   */
  "editorGroup.focusedEmptyBorder"?: string;
  /**
   * Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.
   */
  "editorGroupHeader.tabsBackground"?: string;
  /**
   * Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.
   */
  "editorGroupHeader.tabsBorder"?: string;
  /**
   * Background color of the editor group title header when tabs are disabled (`"workbench.editor.showTabs": false`). Editor groups are the containers of editors.
   */
  "editorGroupHeader.noTabsBackground"?: string;
  /**
   * Border color of the editor group title header. Editor groups are the containers of editors.
   */
  "editorGroupHeader.border"?: string;
  /**
   * Color to separate multiple editor groups from each other. Editor groups are the containers of editors.
   */
  "editorGroup.border"?: string;
  /**
   * Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through.
   */
  "editorGroup.dropBackground"?: string;
  /**
   * Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  "editorGroup.dropIntoPromptForeground"?: string;
  /**
   * Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  "editorGroup.dropIntoPromptBackground"?: string;
  /**
   * Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  "editorGroup.dropIntoPromptBorder"?: string;
  /**
   * Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
   */
  "sideBySideEditor.horizontalBorder"?: string;
  /**
   * Color to separate two editors from each other when shown side by side in an editor group from left to right.
   */
  "sideBySideEditor.verticalBorder"?: string;
  /**
   * Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  "panel.background"?: string;
  /**
   * Panel border color to separate the panel from the editor. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  "panel.border"?: string;
  /**
   * Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  "panelTitle.activeForeground"?: string;
  /**
   * Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  "panelTitle.inactiveForeground"?: string;
  /**
   * Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  "panelTitle.activeBorder"?: string;
  /**
   * Input box border for inputs in the panel.
   */
  "panelInput.border"?: string;
  /**
   * Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  "panel.dropBorder"?: string;
  /**
   * Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  "panelSection.dropBackground"?: string;
  /**
   * Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  "panelSectionHeader.background"?: string;
  /**
   * Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  "panelSectionHeader.foreground"?: string;
  /**
   * Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  "panelSectionHeader.border"?: string;
  /**
   * Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  "panelSection.border"?: string;
  /**
   * Banner background color. The banner is shown under the title bar of the window.
   */
  "banner.background"?: string;
  /**
   * Banner foreground color. The banner is shown under the title bar of the window.
   */
  "banner.foreground"?: string;
  /**
   * Banner icon color. The banner is shown under the title bar of the window.
   */
  "banner.iconForeground"?: string;
  /**
   * Status bar foreground color when a workspace or folder is opened. The status bar is shown in the bottom of the window.
   */
  "statusBar.foreground"?: string;
  /**
   * Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window.
   */
  "statusBar.noFolderForeground"?: string;
  /**
   * Status bar background color when a workspace or folder is opened. The status bar is shown in the bottom of the window.
   */
  "statusBar.background"?: string;
  /**
   * Status bar background color when no folder is opened. The status bar is shown in the bottom of the window.
   */
  "statusBar.noFolderBackground"?: string;
  /**
   * Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window.
   */
  "statusBar.border"?: string;
  /**
   * Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
   */
  "statusBar.focusBorder"?: string;
  /**
   * Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window.
   */
  "statusBar.noFolderBorder"?: string;
  /**
   * Status bar item background color when clicking. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.activeBackground"?: string;
  /**
   * Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.focusBorder"?: string;
  /**
   * Status bar item background color when hovering. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.hoverBackground"?: string;
  /**
   * Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.hoverForeground"?: string;
  /**
   * Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.compactHoverBackground"?: string;
  /**
   * Status bar prominent items foreground color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.prominentForeground"?: string;
  /**
   * Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.prominentBackground"?: string;
  /**
   * Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.prominentHoverForeground"?: string;
  /**
   * Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.prominentHoverBackground"?: string;
  /**
   * Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.errorBackground"?: string;
  /**
   * Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.errorForeground"?: string;
  /**
   * Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.errorHoverForeground"?: string;
  /**
   * Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.errorHoverBackground"?: string;
  /**
   * Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.warningBackground"?: string;
  /**
   * Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.warningForeground"?: string;
  /**
   * Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.warningHoverForeground"?: string;
  /**
   * Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  "statusBarItem.warningHoverBackground"?: string;
  /**
   * Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBar.background"?: string;
  /**
   * Activity bar item foreground color when it is active. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBar.foreground"?: string;
  /**
   * Activity bar item foreground color when it is inactive. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBar.inactiveForeground"?: string;
  /**
   * Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBar.border"?: string;
  /**
   * Activity bar border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBar.activeBorder"?: string;
  /**
   * Activity bar focus border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBar.activeFocusBorder"?: string;
  /**
   * Activity bar background color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBar.activeBackground"?: string;
  /**
   * Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBar.dropBorder"?: string;
  /**
   * Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBarBadge.background"?: string;
  /**
   * Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  "activityBarBadge.foreground"?: string;
  /**
   * Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
   */
  "profileBadge.background"?: string;
  /**
   * Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.
   */
  "profileBadge.foreground"?: string;
  /**
   * Background color for the remote indicator on the status bar.
   */
  "statusBarItem.remoteBackground"?: string;
  /**
   * Foreground color for the remote indicator on the status bar.
   */
  "statusBarItem.remoteForeground"?: string;
  /**
   * Foreground color for the remote indicator on the status bar when hovering.
   */
  "statusBarItem.remoteHoverForeground"?: string;
  /**
   * Background color for the remote indicator on the status bar when hovering.
   */
  "statusBarItem.remoteHoverBackground"?: string;
  /**
   * Status bar item background color when the workbench is offline.
   */
  "statusBarItem.offlineBackground"?: string;
  /**
   * Status bar item foreground color when the workbench is offline.
   */
  "statusBarItem.offlineForeground"?: string;
  /**
   * Status bar item foreground hover color when the workbench is offline.
   */
  "statusBarItem.offlineHoverForeground"?: string;
  /**
   * Status bar item background hover color when the workbench is offline.
   */
  "statusBarItem.offlineHoverBackground"?: string;
  /**
   * Background color for the remote badge in the extensions view.
   */
  "extensionBadge.remoteBackground"?: string;
  /**
   * Foreground color for the remote badge in the extensions view.
   */
  "extensionBadge.remoteForeground"?: string;
  /**
   * Side bar background color. The side bar is the container for views like explorer and search.
   */
  "sideBar.background"?: string;
  /**
   * Side bar foreground color. The side bar is the container for views like explorer and search.
   */
  "sideBar.foreground"?: string;
  /**
   * Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search.
   */
  "sideBar.border"?: string;
  /**
   * Side bar title foreground color. The side bar is the container for views like explorer and search.
   */
  "sideBarTitle.foreground"?: string;
  /**
   * Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
   */
  "sideBar.dropBackground"?: string;
  /**
   * Side bar section header background color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
   */
  "sideBarSectionHeader.background"?: string;
  /**
   * Side bar section header foreground color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
   */
  "sideBarSectionHeader.foreground"?: string;
  /**
   * Side bar section header border color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
   */
  "sideBarSectionHeader.border"?: string;
  /**
   * Title bar foreground when the window is active.
   */
  "titleBar.activeForeground"?: string;
  /**
   * Title bar foreground when the window is inactive.
   */
  "titleBar.inactiveForeground"?: string;
  /**
   * Title bar background when the window is active.
   */
  "titleBar.activeBackground"?: string;
  /**
   * Title bar background when the window is inactive.
   */
  "titleBar.inactiveBackground"?: string;
  /**
   * Title bar border color.
   */
  "titleBar.border"?: string;
  /**
   * Foreground color of the selected menu item in the menubar.
   */
  "menubar.selectionForeground"?: string;
  /**
   * Background color of the selected menu item in the menubar.
   */
  "menubar.selectionBackground"?: string;
  /**
   * Border color of the selected menu item in the menubar.
   */
  "menubar.selectionBorder"?: string;
  /**
   * Foreground color of the command center
   */
  "commandCenter.foreground"?: string;
  /**
   * Active foreground color of the command center
   */
  "commandCenter.activeForeground"?: string;
  /**
   * Foreground color of the command center when the window is inactive
   */
  "commandCenter.inactiveForeground"?: string;
  /**
   * Background color of the command center
   */
  "commandCenter.background"?: string;
  /**
   * Active background color of the command center
   */
  "commandCenter.activeBackground"?: string;
  /**
   * Border color of the command center
   */
  "commandCenter.border"?: string;
  /**
   * Active border color of the command center
   */
  "commandCenter.activeBorder"?: string;
  /**
   * Border color of the command center when the window is inactive
   */
  "commandCenter.inactiveBorder"?: string;
  /**
   * Notifications center border color. Notifications slide in from the bottom right of the window.
   */
  "notificationCenter.border"?: string;
  /**
   * Notification toast border color. Notifications slide in from the bottom right of the window.
   */
  "notificationToast.border"?: string;
  /**
   * Notifications foreground color. Notifications slide in from the bottom right of the window.
   */
  "notifications.foreground"?: string;
  /**
   * Notifications background color. Notifications slide in from the bottom right of the window.
   */
  "notifications.background"?: string;
  /**
   * Notification links foreground color. Notifications slide in from the bottom right of the window.
   */
  "notificationLink.foreground"?: string;
  /**
   * Notifications center header foreground color. Notifications slide in from the bottom right of the window.
   */
  "notificationCenterHeader.foreground"?: string;
  /**
   * Notifications center header background color. Notifications slide in from the bottom right of the window.
   */
  "notificationCenterHeader.background"?: string;
  /**
   * Notifications border color separating from other notifications in the notifications center. Notifications slide in from the bottom right of the window.
   */
  "notifications.border"?: string;
  /**
   * The color used for the icon of error notifications. Notifications slide in from the bottom right of the window.
   */
  "notificationsErrorIcon.foreground"?: string;
  /**
   * The color used for the icon of warning notifications. Notifications slide in from the bottom right of the window.
   */
  "notificationsWarningIcon.foreground"?: string;
  /**
   * The color used for the icon of info notifications. Notifications slide in from the bottom right of the window.
   */
  "notificationsInfoIcon.foreground"?: string;
  /**
   * The color used for the border of the window when it is active. Only supported in the macOS and Linux desktop client when using the custom title bar.
   */
  "window.activeBorder"?: string;
  /**
   * The color used for the border of the window when it is inactive. Only supported in the macOS and Linux desktop client when using the custom title bar.
   */
  "window.inactiveBorder"?: string;
  /**
   * The border color of a chat request.
   */
  "chat.requestBorder"?: string;
  /**
   * The background color of a chat slash command.
   */
  "chat.slashCommandBackground"?: string;
  /**
   * The foreground color of a chat slash command.
   */
  "chat.slashCommandForeground"?: string;
  /**
   * Border color of the sash border.
   */
  "simpleFindWidget.sashBorder"?: string;
  /**
   * Icon color for resolved comments.
   */
  "commentsView.resolvedIcon"?: string;
  /**
   * Icon color for unresolved comments.
   */
  "commentsView.unresolvedIcon"?: string;
  /**
   * Color of borders and arrow for resolved comments.
   */
  "editorCommentsWidget.resolvedBorder"?: string;
  /**
   * Color of borders and arrow for unresolved comments.
   */
  "editorCommentsWidget.unresolvedBorder"?: string;
  /**
   * Color of background for comment ranges.
   */
  "editorCommentsWidget.rangeBackground"?: string;
  /**
   * Color of background for currently selected or hovered comment range.
   */
  "editorCommentsWidget.rangeActiveBackground"?: string;
  /**
   * Editor gutter decoration color for commenting ranges. This color should be opaque.
   */
  "editorGutter.commentRangeForeground"?: string;
  /**
   * Editor overview ruler decoration color for resolved comments. This color should be opaque.
   */
  "editorOverviewRuler.commentForeground"?: string;
  /**
   * Editor overview ruler decoration color for unresolved comments. This color should be opaque.
   */
  "editorOverviewRuler.commentUnresolvedForeground"?: string;
  /**
   * Editor gutter decoration color for commenting glyphs.
   */
  "editorGutter.commentGlyphForeground"?: string;
  /**
   * Editor gutter decoration color for commenting glyphs for unresolved comment threads.
   */
  "editorGutter.commentUnresolvedGlyphForeground"?: string;
  /**
   * Debug toolbar background color.
   */
  "debugToolBar.background"?: string;
  /**
   * Debug toolbar border color.
   */
  "debugToolBar.border"?: string;
  /**
   * Debug toolbar icon for start debugging.
   */
  "debugIcon.startForeground"?: string;
  /**
   * Background color for the highlight of line at the top stack frame position.
   */
  "editor.stackFrameHighlightBackground"?: string;
  /**
   * Background color for the highlight of line at focused stack frame position.
   */
  "editor.focusedStackFrameHighlightBackground"?: string;
  /**
   * The background color for changes.
   */
  "mergeEditor.change.background"?: string;
  /**
   * The background color for word changes.
   */
  "mergeEditor.change.word.background"?: string;
  /**
   * The background color for changes in base.
   */
  "mergeEditor.changeBase.background"?: string;
  /**
   * The background color for word changes in base.
   */
  "mergeEditor.changeBase.word.background"?: string;
  /**
   * The border color of unhandled unfocused conflicts.
   */
  "mergeEditor.conflict.unhandledUnfocused.border"?: string;
  /**
   * The border color of unhandled focused conflicts.
   */
  "mergeEditor.conflict.unhandledFocused.border"?: string;
  /**
   * The border color of handled unfocused conflicts.
   */
  "mergeEditor.conflict.handledUnfocused.border"?: string;
  /**
   * The border color of handled focused conflicts.
   */
  "mergeEditor.conflict.handledFocused.border"?: string;
  /**
   * The foreground color for changes in input 1.
   */
  "mergeEditor.conflict.handled.minimapOverViewRuler"?: string;
  /**
   * The foreground color for changes in input 1.
   */
  "mergeEditor.conflict.unhandled.minimapOverViewRuler"?: string;
  /**
   * The background of the "Conflicting Lines" text.
   */
  "mergeEditor.conflictingLines.background"?: string;
  /**
   * The background color of decorations in input 1.
   */
  "mergeEditor.conflict.input1.background"?: string;
  /**
   * The background color of decorations in input 2.
   */
  "mergeEditor.conflict.input2.background"?: string;
  /**
   * The foreground color for a section header or active title.
   */
  "settings.headerForeground"?: string;
  /**
   * The foreground color for a section header or hovered title.
   */
  "settings.settingsHeaderHoverForeground"?: string;
  /**
   * The color of the modified setting indicator.
   */
  "settings.modifiedItemIndicator"?: string;
  /**
   * The color of the header container border.
   */
  "settings.headerBorder"?: string;
  /**
   * The color of the Settings editor splitview sash border.
   */
  "settings.sashBorder"?: string;
  /**
   * Settings editor dropdown background.
   */
  "settings.dropdownBackground"?: string;
  /**
   * Settings editor dropdown foreground.
   */
  "settings.dropdownForeground"?: string;
  /**
   * Settings editor dropdown border.
   */
  "settings.dropdownBorder"?: string;
  /**
   * Settings editor dropdown list border. This surrounds the options and separates the options from the description.
   */
  "settings.dropdownListBorder"?: string;
  /**
   * Settings editor checkbox background.
   */
  "settings.checkboxBackground"?: string;
  /**
   * Settings editor checkbox foreground.
   */
  "settings.checkboxForeground"?: string;
  /**
   * Settings editor checkbox border.
   */
  "settings.checkboxBorder"?: string;
  /**
   * Settings editor text input box background.
   */
  "settings.textInputBackground"?: string;
  /**
   * Settings editor text input box foreground.
   */
  "settings.textInputForeground"?: string;
  /**
   * Settings editor text input box border.
   */
  "settings.textInputBorder"?: string;
  /**
   * Settings editor number input box background.
   */
  "settings.numberInputBackground"?: string;
  /**
   * Settings editor number input box foreground.
   */
  "settings.numberInputForeground"?: string;
  /**
   * Settings editor number input box border.
   */
  "settings.numberInputBorder"?: string;
  /**
   * The background color of a settings row when focused.
   */
  "settings.focusedRowBackground"?: string;
  /**
   * The background color of a settings row when hovered.
   */
  "settings.rowHoverBackground"?: string;
  /**
   * The color of the row's top and bottom border when the row is focused.
   */
  "settings.focusedRowBorder"?: string;
  /**
   * The background color of the terminal, this allows coloring the terminal differently to the panel.
   */
  "terminal.background"?: string;
  /**
   * The foreground color of the terminal.
   */
  "terminal.foreground"?: string;
  /**
   * The foreground color of the terminal cursor.
   */
  "terminalCursor.foreground"?: string;
  /**
   * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
   */
  "terminalCursor.background"?: string;
  /**
   * The selection background color of the terminal.
   */
  "terminal.selectionBackground"?: string;
  /**
   * The selection background color of the terminal when it does not have focus.
   */
  "terminal.inactiveSelectionBackground"?: string;
  /**
   * The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
   */
  "terminal.selectionForeground"?: string;
  /**
   * The default terminal command decoration background color.
   */
  "terminalCommandDecoration.defaultBackground"?: string;
  /**
   * The terminal command decoration background color for successful commands.
   */
  "terminalCommandDecoration.successBackground"?: string;
  /**
   * The terminal command decoration background color for error commands.
   */
  "terminalCommandDecoration.errorBackground"?: string;
  /**
   * The overview ruler cursor color.
   */
  "terminalOverviewRuler.cursorForeground"?: string;
  /**
   * The color of the border that separates split panes within the terminal. This defaults to panel.border.
   */
  "terminal.border"?: string;
  /**
   * Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
   */
  "terminal.findMatchBackground"?: string;
  /**
   * Border color of the other search matches in the terminal.
   */
  "terminal.hoverHighlightBackground"?: string;
  /**
   * Border color of the current search match in the terminal.
   */
  "terminal.findMatchBorder"?: string;
  /**
   * Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
   */
  "terminal.findMatchHighlightBackground"?: string;
  /**
   * Border color of the other search matches in the terminal.
   */
  "terminal.findMatchHighlightBorder"?: string;
  /**
   * Overview ruler marker color for find matches in the terminal.
   */
  "terminalOverviewRuler.findMatchForeground"?: string;
  /**
   * Background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
   */
  "terminal.dropBackground"?: string;
  /**
   * Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
   */
  "terminal.tab.activeBorder"?: string;
  /**
   * Color for the 'failed' icon in the test explorer.
   */
  "testing.iconFailed"?: string;
  /**
   * Color for the 'Errored' icon in the test explorer.
   */
  "testing.iconErrored"?: string;
  /**
   * Color for the 'passed' icon in the test explorer.
   */
  "testing.iconPassed"?: string;
  /**
   * Color for 'run' icons in the editor.
   */
  "testing.runAction"?: string;
  /**
   * Color for the 'Queued' icon in the test explorer.
   */
  "testing.iconQueued"?: string;
  /**
   * Color for the 'Unset' icon in the test explorer.
   */
  "testing.iconUnset"?: string;
  /**
   * Color for the 'Skipped' icon in the test explorer.
   */
  "testing.iconSkipped"?: string;
  /**
   * Color of the peek view borders and arrow.
   */
  "testing.peekBorder"?: string;
  /**
   * Color of the peek view borders and arrow.
   */
  "testing.peekHeaderBackground"?: string;
  /**
   * Text color of test error messages shown inline in the editor.
   */
  "testing.message.error.decorationForeground"?: string;
  /**
   * Margin color beside error messages shown inline in the editor.
   */
  "testing.message.error.lineBackground"?: string;
  /**
   * Text color of test info messages shown inline in the editor.
   */
  "testing.message.info.decorationForeground"?: string;
  /**
   * Margin color beside info messages shown inline in the editor.
   */
  "testing.message.info.lineBackground"?: string;
  /**
   * Background color for the Welcome page.
   */
  "welcomePage.background"?: string;
  /**
   * Background color for the tiles on the Welcome page.
   */
  "welcomePage.tileBackground"?: string;
  /**
   * Hover background color for the tiles on the Welcome.
   */
  "welcomePage.tileHoverBackground"?: string;
  /**
   * Border color for the tiles on the Welcome page.
   */
  "welcomePage.tileBorder"?: string;
  /**
   * Foreground color for the Welcome page progress bars.
   */
  "welcomePage.progress.background"?: string;
  /**
   * Background color for the Welcome page progress bars.
   */
  "welcomePage.progress.foreground"?: string;
  /**
   * Foreground color of the heading of each walkthrough step
   */
  "walkthrough.stepTitle.foreground"?: string;
  /**
   * Background color for the embedded editors on the Interactive Playground.
   */
  "walkThrough.embeddedEditorBackground"?: string;
  /**
   * Background color of the interactive editor widget
   */
  "inlineChat.background"?: string;
  /**
   * Border color of the interactive editor widget
   */
  "inlineChat.border"?: string;
  /**
   * Shadow color of the interactive editor widget
   */
  "inlineChat.shadow"?: string;
  /**
   * Background highlighting of the current interactive region. Must be transparent.
   */
  "inlineChat.regionHighlight"?: string;
  /**
   * Border color of the interactive editor input
   */
  "inlineChatInput.border"?: string;
  /**
   * Border color of the interactive editor input when focused
   */
  "inlineChatInput.focusBorder"?: string;
  /**
   * Foreground color of the interactive editor input placeholder
   */
  "inlineChatInput.placeholderForeground"?: string;
  /**
   * Background color of the interactive editor input
   */
  "inlineChatInput.background"?: string;
  /**
   * Background color of inserted text in the interactive editor input
   */
  "inlineChatDiff.inserted"?: string;
  /**
   * Background color of removed text in the interactive editor input
   */
  "inlineChatDiff.removed"?: string;
  /**
   * Exception widget border color.
   */
  "debugExceptionWidget.border"?: string;
  /**
   * Exception widget background color.
   */
  "debugExceptionWidget.background"?: string;
  /**
   * The color of the icon for a port that has an associated running process.
   */
  "ports.iconRunningProcessForeground"?: string;
  /**
   * Status bar background color when a program is being debugged. The status bar is shown in the bottom of the window
   */
  "statusBar.debuggingBackground"?: string;
  /**
   * Status bar foreground color when a program is being debugged. The status bar is shown in the bottom of the window
   */
  "statusBar.debuggingForeground"?: string;
  /**
   * Status bar border color separating to the sidebar and editor when a program is being debugged. The status bar is shown in the bottom of the window
   */
  "statusBar.debuggingBorder"?: string;
  /**
   * Command center background color when a program is being debugged
   */
  "commandCenter.debuggingBackground"?: string;
  /**
   * Color for the debug inline value text.
   */
  "editor.inlineValuesForeground"?: string;
  /**
   * Color for the debug inline value background.
   */
  "editor.inlineValuesBackground"?: string;
  /**
   * Editor gutter background color for lines that are modified.
   */
  "editorGutter.modifiedBackground"?: string;
  /**
   * Editor gutter background color for lines that are added.
   */
  "editorGutter.addedBackground"?: string;
  /**
   * Editor gutter background color for lines that are deleted.
   */
  "editorGutter.deletedBackground"?: string;
  /**
   * Minimap gutter background color for lines that are modified.
   */
  "minimapGutter.modifiedBackground"?: string;
  /**
   * Minimap gutter background color for lines that are added.
   */
  "minimapGutter.addedBackground"?: string;
  /**
   * Minimap gutter background color for lines that are deleted.
   */
  "minimapGutter.deletedBackground"?: string;
  /**
   * Overview ruler marker color for modified content.
   */
  "editorOverviewRuler.modifiedForeground"?: string;
  /**
   * Overview ruler marker color for added content.
   */
  "editorOverviewRuler.addedForeground"?: string;
  /**
   * Overview ruler marker color for deleted content.
   */
  "editorOverviewRuler.deletedForeground"?: string;
  /**
   * Icon color for breakpoints.
   */
  "debugIcon.breakpointForeground"?: string;
  /**
   * Icon color for disabled breakpoints.
   */
  "debugIcon.breakpointDisabledForeground"?: string;
  /**
   * Icon color for unverified breakpoints.
   */
  "debugIcon.breakpointUnverifiedForeground"?: string;
  /**
   * Icon color for the current breakpoint stack frame.
   */
  "debugIcon.breakpointCurrentStackframeForeground"?: string;
  /**
   * Icon color for all breakpoint stack frames.
   */
  "debugIcon.breakpointStackframeForeground"?: string;
  /**
   * The border color for notebook cells.
   */
  "notebook.cellBorderColor"?: string;
  /**
   * The color of the notebook cell editor border.
   */
  "notebook.focusedEditorBorder"?: string;
  /**
   * The error icon color of notebook cells in the cell status bar.
   */
  "notebookStatusSuccessIcon.foreground"?: string;
  /**
   * The color of the running cell decoration in the notebook editor overview ruler.
   */
  "notebookEditorOverviewRuler.runningCellForeground"?: string;
  /**
   * The error icon color of notebook cells in the cell status bar.
   */
  "notebookStatusErrorIcon.foreground"?: string;
  /**
   * The running icon color of notebook cells in the cell status bar.
   */
  "notebookStatusRunningIcon.foreground"?: string;
  /**
   * The border color of the notebook output container.
   */
  "notebook.outputContainerBorderColor"?: string;
  /**
   * The color of the notebook output container background.
   */
  "notebook.outputContainerBackgroundColor"?: string;
  /**
   * The color of the separator in the cell bottom toolbar
   */
  "notebook.cellToolbarSeparator"?: string;
  /**
   * The background color of a cell when the cell is focused.
   */
  "notebook.focusedCellBackground"?: string;
  /**
   * The background color of a cell when the cell is selected.
   */
  "notebook.selectedCellBackground"?: string;
  /**
   * The background color of a cell when the cell is hovered.
   */
  "notebook.cellHoverBackground"?: string;
  /**
   * The color of the cell's top and bottom border when the cell is selected but not focused.
   */
  "notebook.selectedCellBorder"?: string;
  /**
   * The color of the cell's borders when multiple cells are selected.
   */
  "notebook.inactiveSelectedCellBorder"?: string;
  /**
   * The color of the cell's focus indicator borders when the cell is focused.
   */
  "notebook.focusedCellBorder"?: string;
  /**
   * The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.
   */
  "notebook.inactiveFocusedCellBorder"?: string;
  /**
   * The background color of notebook cell status bar items.
   */
  "notebook.cellStatusBarItemHoverBackground"?: string;
  /**
   * The color of the notebook cell insertion indicator.
   */
  "notebook.cellInsertionIndicator"?: string;
  /**
   * Notebook scrollbar slider background color.
   */
  "notebookScrollbarSlider.background"?: string;
  /**
   * Notebook scrollbar slider background color when hovering.
   */
  "notebookScrollbarSlider.hoverBackground"?: string;
  /**
   * Notebook scrollbar slider background color when clicked on.
   */
  "notebookScrollbarSlider.activeBackground"?: string;
  /**
   * Background color of highlighted cell
   */
  "notebook.symbolHighlightBackground"?: string;
  /**
   * Cell editor background color.
   */
  "notebook.cellEditorBackground"?: string;
  /**
   * Notebook background color.
   */
  "notebook.editorBackground"?: string;
  /**
   * Background color for the keyboard shortcuts table header.
   */
  "keybindingTable.headerBackground"?: string;
  /**
   * Background color for the keyboard shortcuts table alternating rows.
   */
  "keybindingTable.rowsBackground"?: string;
  /**
   * Search editor text input box border.
   */
  "searchEditor.textInputBorder"?: string;
  /**
   * Foreground color for the token names shown in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.name"?: string;
  /**
   * Foreground color for the token values shown in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.value"?: string;
  /**
   * Foreground color for strings in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.string"?: string;
  /**
   * Foreground color for booleans in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.boolean"?: string;
  /**
   * Foreground color for numbers in the debug views (ie. the Variables or Watch view).
   */
  "debugTokenExpression.number"?: string;
  /**
   * Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console.
   */
  "debugTokenExpression.error"?: string;
  /**
   * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
   */
  "debugView.exceptionLabelForeground"?: string;
  /**
   * Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
   */
  "debugView.exceptionLabelBackground"?: string;
  /**
   * Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
   */
  "debugView.stateLabelForeground"?: string;
  /**
   * Background color for a label in the CALL STACK view showing the current session's or thread's state.
   */
  "debugView.stateLabelBackground"?: string;
  /**
   * Color used to highlight value changes in the debug views (ie. in the Variables view).
   */
  "debugView.valueChangedHighlight"?: string;
  /**
   * Foreground color for info messages in debug REPL console.
   */
  "debugConsole.infoForeground"?: string;
  /**
   * Foreground color for warning messages in debug REPL console.
   */
  "debugConsole.warningForeground"?: string;
  /**
   * Foreground color for error messages in debug REPL console.
   */
  "debugConsole.errorForeground"?: string;
  /**
   * Foreground color for source filenames in debug REPL console.
   */
  "debugConsole.sourceForeground"?: string;
  /**
   * Foreground color for debug console input marker icon.
   */
  "debugConsoleInputIcon.foreground"?: string;
  /**
   * Debug toolbar icon for pause.
   */
  "debugIcon.pauseForeground"?: string;
  /**
   * Debug toolbar icon for stop.
   */
  "debugIcon.stopForeground"?: string;
  /**
   * Debug toolbar icon for disconnect.
   */
  "debugIcon.disconnectForeground"?: string;
  /**
   * Debug toolbar icon for restart.
   */
  "debugIcon.restartForeground"?: string;
  /**
   * Debug toolbar icon for step over.
   */
  "debugIcon.stepOverForeground"?: string;
  /**
   * Debug toolbar icon for step into.
   */
  "debugIcon.stepIntoForeground"?: string;
  /**
   * Debug toolbar icon for step over.
   */
  "debugIcon.stepOutForeground"?: string;
  /**
   * Debug toolbar icon for continue.
   */
  "debugIcon.continueForeground"?: string;
  /**
   * Debug toolbar icon for step back.
   */
  "debugIcon.stepBackForeground"?: string;
  /**
   * SCM Provider separator border.
   */
  "scm.providerBorder"?: string;
  /**
   * Button background color for extension actions.
   */
  "extensionButton.background"?: string;
  /**
   * Button foreground color for extension actions.
   */
  "extensionButton.foreground"?: string;
  /**
   * Button background hover color for extension actions.
   */
  "extensionButton.hoverBackground"?: string;
  /**
   * Button separator color for extension actions
   */
  "extensionButton.separator"?: string;
  /**
   * Button background color for extension actions that stand out (e.g. install button).
   */
  "extensionButton.prominentBackground"?: string;
  /**
   * Button foreground color for extension actions that stand out (e.g. install button).
   */
  "extensionButton.prominentForeground"?: string;
  /**
   * Button background hover color for extension actions that stand out (e.g. install button).
   */
  "extensionButton.prominentHoverBackground"?: string;
  /**
   * The icon color for extension ratings.
   */
  "extensionIcon.starForeground"?: string;
  /**
   * The icon color for extension verified publisher.
   */
  "extensionIcon.verifiedForeground"?: string;
  /**
   * The icon color for pre-release extension.
   */
  "extensionIcon.preReleaseForeground"?: string;
  /**
   * The icon color for extension sponsor.
   */
  "extensionIcon.sponsorForeground"?: string;
  /**
   * 'Black' ANSI color in the terminal.
   */
  "terminal.ansiBlack"?: string;
  /**
   * 'Red' ANSI color in the terminal.
   */
  "terminal.ansiRed"?: string;
  /**
   * 'Green' ANSI color in the terminal.
   */
  "terminal.ansiGreen"?: string;
  /**
   * 'Yellow' ANSI color in the terminal.
   */
  "terminal.ansiYellow"?: string;
  /**
   * 'Blue' ANSI color in the terminal.
   */
  "terminal.ansiBlue"?: string;
  /**
   * 'Magenta' ANSI color in the terminal.
   */
  "terminal.ansiMagenta"?: string;
  /**
   * 'Cyan' ANSI color in the terminal.
   */
  "terminal.ansiCyan"?: string;
  /**
   * 'White' ANSI color in the terminal.
   */
  "terminal.ansiWhite"?: string;
  /**
   * 'BrightBlack' ANSI color in the terminal.
   */
  "terminal.ansiBrightBlack"?: string;
  /**
   * 'BrightRed' ANSI color in the terminal.
   */
  "terminal.ansiBrightRed"?: string;
  /**
   * 'BrightGreen' ANSI color in the terminal.
   */
  "terminal.ansiBrightGreen"?: string;
  /**
   * 'BrightYellow' ANSI color in the terminal.
   */
  "terminal.ansiBrightYellow"?: string;
  /**
   * 'BrightBlue' ANSI color in the terminal.
   */
  "terminal.ansiBrightBlue"?: string;
  /**
   * 'BrightMagenta' ANSI color in the terminal.
   */
  "terminal.ansiBrightMagenta"?: string;
  /**
   * 'BrightCyan' ANSI color in the terminal.
   */
  "terminal.ansiBrightCyan"?: string;
  /**
   * 'BrightWhite' ANSI color in the terminal.
   */
  "terminal.ansiBrightWhite"?: string;
  /**
   * The border color for the current interactive code cell when the editor has focus.
   */
  "interactive.activeCodeBorder"?: string;
  /**
   * The border color for the current interactive code cell when the editor does not have focus.
   */
  "interactive.inactiveCodeBorder"?: string;
  /**
   * Color for added resources.
   */
  "gitDecoration.addedResourceForeground"?: string;
  /**
   * Color for modified resources.
   */
  "gitDecoration.modifiedResourceForeground"?: string;
  /**
   * Color for deleted resources.
   */
  "gitDecoration.deletedResourceForeground"?: string;
  /**
   * Color for renamed or copied resources.
   */
  "gitDecoration.renamedResourceForeground"?: string;
  /**
   * Color for untracked resources.
   */
  "gitDecoration.untrackedResourceForeground"?: string;
  /**
   * Color for ignored resources.
   */
  "gitDecoration.ignoredResourceForeground"?: string;
  /**
   * Color for modified resources which have been staged.
   */
  "gitDecoration.stageModifiedResourceForeground"?: string;
  /**
   * Color for deleted resources which have been staged.
   */
  "gitDecoration.stageDeletedResourceForeground"?: string;
  /**
   * Color for resources with conflicts.
   */
  "gitDecoration.conflictingResourceForeground"?: string;
  /**
   * Color for submodule resources.
   */
  "gitDecoration.submoduleResourceForeground"?: string;
  /**
   * Specifies the background color of the file blame annotations
   */
  "gitlens.gutterBackgroundColor"?: string;
  /**
   * Specifies the foreground color of the file blame annotations
   */
  "gitlens.gutterForegroundColor"?: string;
  /**
   * Specifies the foreground color of an uncommitted line in the file blame annotations
   */
  "gitlens.gutterUncommittedForegroundColor"?: string;
  /**
   * Specifies the background color of the inline blame annotation for the current line
   */
  "gitlens.trailingLineBackgroundColor"?: string;
  /**
   * Specifies the foreground color of the inline blame annotation for the current line
   */
  "gitlens.trailingLineForegroundColor"?: string;
  /**
   * Specifies the background color of the associated line highlights in blame annotations
   */
  "gitlens.lineHighlightBackgroundColor"?: string;
  /**
   * Specifies the scroll bar color of the associated line highlights in blame annotations
   */
  "gitlens.lineHighlightOverviewRulerColor"?: string;
  /**
   * Specifies the icon color of open issues in the GitLens views
   */
  "gitlens.openAutolinkedIssueIconColor"?: string;
  /**
   * Specifies the icon color of closed issues in the GitLens views
   */
  "gitlens.closedAutolinkedIssueIconColor"?: string;
  /**
   * Specifies the icon color of closed pull requests in the GitLens views
   */
  "gitlens.closedPullRequestIconColor"?: string;
  /**
   * Specifies the icon color of open pull requests in the GitLens views
   */
  "gitlens.openPullRequestIconColor"?: string;
  /**
   * Specifies the icon color of merged pull requests in the GitLens views
   */
  "gitlens.mergedPullRequestIconColor"?: string;
  /**
   * Specifies the icon color of unpublished changes in the GitLens views
   */
  "gitlens.unpublishedChangesIconColor"?: string;
  /**
   * Specifies the icon color of unpublished commits in the GitLens views
   */
  "gitlens.unpublishedCommitIconColor"?: string;
  /**
   * Specifies the icon color of unpulled changes in the GitLens views
   */
  "gitlens.unpulledChangesIconColor"?: string;
  /**
   * Specifies the decoration foreground color of added files
   */
  "gitlens.decorations.addedForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of copied files
   */
  "gitlens.decorations.copiedForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of deleted files
   */
  "gitlens.decorations.deletedForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of ignored files
   */
  "gitlens.decorations.ignoredForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of modified files
   */
  "gitlens.decorations.modifiedForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of untracked files
   */
  "gitlens.decorations.untrackedForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of renamed files
   */
  "gitlens.decorations.renamedForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of branches that are ahead of their upstream
   */
  "gitlens.decorations.branchAheadForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of branches that are behind their upstream
   */
  "gitlens.decorations.branchBehindForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of branches that are both ahead and behind their upstream
   */
  "gitlens.decorations.branchDivergedForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of branches that are up to date with their upstream
   */
  "gitlens.decorations.branchUpToDateForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of branches that are not yet published to an upstream
   */
  "gitlens.decorations.branchUnpublishedForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of branches that have a missing upstream
   */
  "gitlens.decorations.branchMissingUpstreamForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of the status during a rebase operation with conflicts
   */
  "gitlens.decorations.statusMergingOrRebasingConflictForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of the status during a rebase operation
   */
  "gitlens.decorations.statusMergingOrRebasingForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of workspace repos which are missing a local path
   */
  "gitlens.decorations.workspaceRepoMissingForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of workspaces which are currently open as a Code Workspace file
   */
  "gitlens.decorations.workspaceCurrentForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color of workspace repos which are open in the current workspace
   */
  "gitlens.decorations.workspaceRepoOpenForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color for worktrees that have uncommitted changes
   */
  "gitlens.decorations.worktreeHasUncommittedChangesForegroundColor"?: string;
  /**
   * Specifies the decoration foreground color for worktrees cannot be found on disk
   */
  "gitlens.decorations.worktreeMissingForegroundColor"?: string;
  /**
   * Specifies the color for the first commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane1Color"?: string;
  /**
   * Specifies the color for the second commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane2Color"?: string;
  /**
   * Specifies the color for the third commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane3Color"?: string;
  /**
   * Specifies the color for the fourth commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane4Color"?: string;
  /**
   * Specifies the color for the fifth commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane5Color"?: string;
  /**
   * Specifies the color for the sixth commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane6Color"?: string;
  /**
   * Specifies the color for the seventh commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane7Color"?: string;
  /**
   * Specifies the color for the eighth commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane8Color"?: string;
  /**
   * Specifies the color for the ninth commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane9Color"?: string;
  /**
   * Specifies the color for the tenth commit lane of the _Commit Graph_ visualization
   */
  "gitlens.graphLane10Color"?: string;
  /**
   * Specifies the color for denoting lines added in the _Changes_ column on the _Commit Graph_
   */
  "gitlens.graphChangesColumnAddedColor"?: string;
  /**
   * Specifies the color for denoting lines deleted in the _Changes_ column on the _Commit Graph_
   */
  "gitlens.graphChangesColumnDeletedColor"?: string;
  /**
   * Specifies the color marking HEAD on the minimap of the _Commit Graph_
   */
  "gitlens.graphMinimapMarkerHeadColor"?: string;
  /**
   * Specifies the color marking HEAD on the scrollbar of the _Commit Graph_
   */
  "gitlens.graphScrollMarkerHeadColor"?: string;
  /**
   * Specifies the color marking HEAD's upstream on the minimap of the _Commit Graph_
   */
  "gitlens.graphMinimapMarkerUpstreamColor"?: string;
  /**
   * Specifies the color marking HEAD's upstream on the scrollbar of the _Commit Graph_
   */
  "gitlens.graphScrollMarkerUpstreamColor"?: string;
  /**
   * Specifies the color marking highlights (matches) on the minimap of the _Commit Graph_
   */
  "gitlens.graphMinimapMarkerHighlightsColor"?: string;
  /**
   * Specifies the color marking highlights (matches) on the scrollbar of the _Commit Graph_
   */
  "gitlens.graphScrollMarkerHighlightsColor"?: string;
  /**
   * Specifies the color marking local branches on the minimap of the _Commit Graph_
   */
  "gitlens.graphMinimapMarkerLocalBranchesColor"?: string;
  /**
   * Specifies the color marking local branches on the scrollbar of the _Commit Graph_
   */
  "gitlens.graphScrollMarkerLocalBranchesColor"?: string;
  /**
   * Specifies the color marking remote branches on the minimap of the _Commit Graph_
   */
  "gitlens.graphMinimapMarkerRemoteBranchesColor"?: string;
  /**
   * Specifies the color marking remote branches on the scrollbar of the _Commit Graph_
   */
  "gitlens.graphScrollMarkerRemoteBranchesColor"?: string;
  /**
   * Specifies the color marking stashes on the minimap of the _Commit Graph_
   */
  "gitlens.graphMinimapMarkerStashesColor"?: string;
  /**
   * Specifies the color marking stashes on the scrollbar of the _Commit Graph_
   */
  "gitlens.graphScrollMarkerStashesColor"?: string;
  /**
   * Specifies the color marking tags on the minimap of the _Commit Graph_
   */
  "gitlens.graphMinimapMarkerTagsColor"?: string;
  /**
   * Specifies the color marking tags on the scrollbar of the _Commit Graph_
   */
  "gitlens.graphScrollMarkerTagsColor"?: string;
  /**
   * The color used for the assignees and labels fields in a new issue editor.
   */
  "issues.newIssueDecoration"?: string;
  /**
   * The color used for indicating that an issue is open.
   */
  "issues.open"?: string;
  /**
   * The color used for indicating that an issue is closed.
   */
  "issues.closed"?: string;
  /**
   * The color used for indicating that a pull request is merged.
   */
  "pullRequests.merged"?: string;
  /**
   * The color used for indicating that a pull request is a draft.
   */
  "pullRequests.draft"?: string;
  /**
   * The color used for indicating that a pull request is open.
   */
  "pullRequests.open"?: string;
  /**
   * The color used for indicating that a pull request is closed.
   */
  "pullRequests.closed"?: string;
  /**
   * The color used for indicating a notification on a pull request
   */
  "pullRequests.notification"?: string;
  /**
   * Background color of the editor error decoration
   */
  "testExplorer.errorDecorationBackground"?: string;
  /**
   * Color of the border displayed in the Rust source code for the selected syntax node (see "Show Syntax Tree" command)
   */
  "rust_analyzer.syntaxTreeBorder"?: string;
  /**
   * Background color of the entire line containing error.
   */
  "errorLens.errorBackground"?: string;
  /**
   * Background color of the error message.
   */
  "errorLens.errorMessageBackground"?: string;
  /**
   * Background color of the entire line containing error (Only in light themes).
   */
  "errorLens.errorBackgroundLight"?: string;
  /**
   * Text color used to highlight lines containing errors.
   */
  "errorLens.errorForeground"?: string;
  /**
   * Text color used to highlight lines containing errors (Only in light themes).
   */
  "errorLens.errorForegroundLight"?: string;
  /**
   * Background color used to highlight lines containing warnings.
   */
  "errorLens.warningBackground"?: string;
  /**
   * Background color of the warning message.
   */
  "errorLens.warningMessageBackground"?: string;
  /**
   * Background color used to highlight lines containing warnings (Only in light themes).
   */
  "errorLens.warningBackgroundLight"?: string;
  /**
   * Text color used to highlight lines containing warnings.
   */
  "errorLens.warningForeground"?: string;
  /**
   * Text color used to highlight lines containing warnings (Only in light themes).
   */
  "errorLens.warningForegroundLight"?: string;
  /**
   * Background color used to highlight lines containing info.
   */
  "errorLens.infoBackground"?: string;
  /**
   * Background color of the info message.
   */
  "errorLens.infoMessageBackground"?: string;
  /**
   * Background color used to highlight lines containing info (Only in light themes).
   */
  "errorLens.infoBackgroundLight"?: string;
  /**
   * Text color used to highlight lines containing info.
   */
  "errorLens.infoForeground"?: string;
  /**
   * Text color used to highlight lines containing info (Only in light themes).
   */
  "errorLens.infoForegroundLight"?: string;
  /**
   * Background color used to highlight lines containing hints.
   */
  "errorLens.hintBackground"?: string;
  /**
   * Background color of the hint message.
   */
  "errorLens.hintMessageBackground"?: string;
  /**
   * Background color used to highlight lines containing hints (Only in light themes).
   */
  "errorLens.hintBackgroundLight"?: string;
  /**
   * Text color used to highlight lines containing hints.
   */
  "errorLens.hintForeground"?: string;
  /**
   * Text color used to highlight lines containing hints (Only in light themes).
   */
  "errorLens.hintForegroundLight"?: string;
  /**
   * Status bar icon item error color. Foreground is used when the `errorLens.statusBarIconsUseBackground` setting is disabled.
   */
  "errorLens.statusBarIconErrorForeground"?: string;
  /**
   * Status bar icon item error color. Foreground is used when the `errorLens.statusBarIconsUseBackground` setting is disabled.
   */
  "errorLens.statusBarIconWarningForeground"?: string;
  /**
   * Status bar item error color.
   */
  "errorLens.statusBarErrorForeground"?: string;
  /**
   * Status bar item warning color.
   */
  "errorLens.statusBarWarningForeground"?: string;
  /**
   * Status bar item info color.
   */
  "errorLens.statusBarInfoForeground"?: string;
  /**
   * Status bar item hint color.
   */
  "errorLens.statusBarHintForeground"?: string;
}
