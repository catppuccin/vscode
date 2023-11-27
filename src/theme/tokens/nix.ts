import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "Nix attribute names",
      scope: [
        "entity.other.attribute-name.multipart.nix",
        "entity.other.attribute-name.single.nix",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Nix parameter names",
      scope: "variable.parameter.name.nix",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "Nix interpolated parameter names",
      scope: "meta.embedded variable.parameter.name.nix",
      settings: {
        foreground: palette.lavender,
        fontStyle: "",
      },
    },
    {
      name: "Nix paths",
      scope: "string.unquoted.path.nix",
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
