import { shade } from "@/theme/utils";
import { ThemeContext, WorkbenchColors } from "@/types";

type PickStartsWith<T extends object, S extends string> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T as K extends `${S}${infer R}` ? K : never]: T[K];
};

type BracketHLs = keyof PickStartsWith<
  WorkbenchColors,
  "editorBracketHighlight"
>;

const brackets = (context: ThemeContext): Record<BracketHLs, string> => {
  const { isLatte, options, palette } = context;

  // invert the shade if current theme is latte
  const L = isLatte ? -1 : 1;
  const styles = {
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
        -0.6 * L,
      ),
    },
    monochromatic: {
      "editorBracketHighlight.foreground1": palette.subtext1,
      "editorBracketHighlight.foreground2": palette.subtext0,
      "editorBracketHighlight.foreground3": palette.overlay2,
      "editorBracketHighlight.foreground4": palette.overlay1,
      "editorBracketHighlight.foreground5": palette.overlay0,
      "editorBracketHighlight.foreground6": palette.surface2,
      "editorBracketHighlight.unexpectedBracket.foreground": palette.maroon,
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

  return styles[options.bracketMode];
};

export default brackets;
