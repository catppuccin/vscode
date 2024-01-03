import { ThemeContext, WorkbenchColors } from "@/types";
import { opacity } from "@/theme/utils";

type WorkbenchPartial = Partial<Record<keyof WorkbenchColors, string>>;

const workbench = (context: ThemeContext): WorkbenchPartial => {
  const { options, palette } = context;

  const styles = {
    default: {},
    flat: {
      "activityBar.background": palette.mantle,
      "breadcrumb.background": palette.base,
      "commandCenter.background": palette.mantle,
      "debugToolBar.background": palette.mantle,
      "editorGroupHeader.tabsBackground": palette.mantle,
      "minimap.background": opacity(palette.base, 0.5),
      "statusBar.background": palette.mantle,
      "statusBar.noFolderBackground": palette.mantle,
      "tab.border": palette.base,
      "titleBar.activeBackground": palette.mantle,
      "titleBar.inactiveBackground": palette.mantle,
      "scrollbar.shadow": palette.mantle,
    },
    minimal: {
      "activityBar.background": palette.base,
      "breadcrumb.background": palette.base,
      "commandCenter.background": palette.base,
      "debugToolBar.background": palette.base,
      "editor.background": palette.base,
      "editorWidget.background": palette.base,
      "editorGroupHeader.tabsBackground": palette.base,
      "minimap.background": opacity(palette.base, 0.5),
      "statusBar.background": palette.base,
      "statusBar.noFolderBackground": palette.base,
      "sideBar.background": palette.base,
      "sideBarSectionHeader.background": palette.base,
      "tab.border": palette.base,
      "tab.inactiveBackground": palette.base,
      "titleBar.activeBackground": palette.base,
      "titleBar.inactiveBackground": palette.base,
    },
  };

  return styles[options.workbenchMode];
};

export default workbench;
