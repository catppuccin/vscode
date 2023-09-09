import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Comment keywords",
      scope: "comment meta.annotation.go",
      settings: {
        foreground: palette.maroon,
        fontStyle: "",
      },
    },
    {
      name: "go:embed, go:build, etc.",
      scope: "comment meta.annotation.parameters.go",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "Go constants (nil, true, false)",
      // nil should be peach, but TextMate doesn't offer a fine-grained enough scope
      scope: "constant.language.go",
      settings: {
        foreground: palette.peach,
        fontStyle: "",
      },
    },
    {
      name: "Go functions",
      // nil should be peach, but TextMate doesn't offer a fine-grained enough scope
      scope: "support.function.go",
      settings: {
        foreground: palette.blue,
        fontStyle: "italic",
      },
    },
  ];
};

export default tokens;
