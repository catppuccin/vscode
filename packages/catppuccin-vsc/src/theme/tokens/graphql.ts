import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "GraphQL variables",
      scope: "variable.graphql",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "GraphQL aliases",
      scope: "string.unquoted.alias.graphql",
      settings: {
        foreground: palette.flamingo,
      },
    },
    {
      name: "GraphQL enum members",
      scope: "constant.character.enum.graphql",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "GraphQL field in types",
      scope:
        "meta.objectvalues.graphql constant.object.key.graphql string.unquoted.graphql",
      settings: {
        foreground: palette.flamingo,
      },
    },
  ];
};

export default tokens;
