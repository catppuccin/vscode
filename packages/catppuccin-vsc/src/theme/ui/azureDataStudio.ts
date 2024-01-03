import type { ThemeContext } from "@/types";

/**
 * Contains extra keys used in Azure Data Studio that might be missing or
 * deprecated in VSCode.
 */
const azureDataStudio = (context: ThemeContext): Record<string, string> => {
  const { options, palette } = context;
  const accent = palette[options.accent];

  return {
    "button.secondaryBorder": accent,
    "table.headerBackground": palette.surface0,
    "table.headerForeground": palette.text,
    "list.focusAndSelectionBackground": palette.surface1,
  };
};

export default azureDataStudio;
