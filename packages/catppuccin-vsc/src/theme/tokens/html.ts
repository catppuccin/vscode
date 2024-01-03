import type { TextmateColors, ThemeContext } from "@/types";

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
        "constant.character.entity.xml",
        "constant.character.entity.xml punctuation",
        // ditto for JSX / TSX
        "constant.character.entity.js.jsx",
        "constant.charactger.entity.js.jsx punctuation",
        "constant.character.entity.tsx",
        "constant.character.entity.tsx punctuation",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "HTML/XML tag attribute values",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Components",
      scope: [
        "support.class.component",
        "support.class.component.jsx",
        "support.class.component.tsx",
        "support.class.component.vue",
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: "",
      },
    },
  ];
};

export default tokens;
