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
  ];
};

export default tokens;
