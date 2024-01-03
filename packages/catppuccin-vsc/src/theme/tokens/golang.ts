import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Comment keywords",
      scope: "comment meta.annotation.go",
      settings: {
        foreground: palette.maroon,
      },
    },
    {
      name: "go:embed, go:build, etc.",
      scope: "comment meta.annotation.parameters.go",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Go constants (nil, true, false)",
      // nil should be peach, but TextMate doesn't offer a fine-grained enough scope
      scope: "constant.language.go",
      settings: {
        foreground: palette.peach,
      },
    },
  ];
};

export default tokens;
