import type { TextmateColors, ThemeContext } from "../../types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "HTML/XML DOCTYPE as keyword",
      scope: [
        "keyword.other.doctype",
        "meta.tag.sgml.doctype punctuation.definition.tag",
        "meta.tag.metadata.doctype entity.name.tag",
        "meta.tag.metadata.doctype punctuation.definition.tag",
      ],
      settings: {
        foreground: palette.mauve,
        fontStyle: "",
      },
    },
    {
      name: "HTML/XML-like <tags/>",
      scope: ["entity.name.tag"],
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "Special characters like &amp;",
      scope: [
        "text.html constant.character.entity",
        "text.html constant.character.entity punctuation",
      ],
      settings: {
        foreground: palette.red,
        fontStyle: "",
      },
    },
    {
      name: "HTML/XML tag attribute values",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "Components",
      scope: ["meta.tag support.class.component"],
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
