import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "GraphQL variables",
      scope: "variable.graphql",
      settings: {
        foreground: palette.text,
        fontStyle: "",
      },
    },
    {
      name: "GraphQL aliases",
      scope: "string.unquoted.alias.graphql",
      settings: {
        foreground: palette.flamingo,
        fontStyle: "",
      },
    },
    {
      name: "GraphQL enum members",
      scope: "constant.character.enum.graphql",
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "GraphQL field in types",
      scope:
        "meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql",
      settings: {
        foreground: palette.flamingo,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
