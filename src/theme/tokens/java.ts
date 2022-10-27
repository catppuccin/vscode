import { CatppuccinPalette, ThemeOptions } from "../../types";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    {
      name: "java type",
      scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "java source",
      scope: "source.java",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "java modifier.import",
      scope: [
        "punctuation.section.block.begin.java",
        "punctuation.section.block.end.java",
        "punctuation.definition.method-parameters.begin.java",
        "punctuation.definition.method-parameters.end.java",
        "meta.method.identifier.java",
        "punctuation.section.method.begin.java",
        "punctuation.section.method.end.java",
        "punctuation.terminator.java",
        "punctuation.section.class.begin.java",
        "punctuation.section.class.end.java",
        "punctuation.section.inner-class.begin.java",
        "punctuation.section.inner-class.end.java",
        "meta.method-call.java",
        "punctuation.section.class.begin.bracket.curly.java",
        "punctuation.section.class.end.bracket.curly.java",
        "punctuation.section.method.begin.bracket.curly.java",
        "punctuation.section.method.end.bracket.curly.java",
        "punctuation.separator.period.java",
        "punctuation.bracket.angle.java",
        "punctuation.definition.annotation.java",
        "meta.method.body.java",
      ],
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "java modifier.import",
      scope: "meta.method.java",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "java modifier.import",
      scope:
        "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "java instanceof",
      scope: "keyword.operator.instanceof.java",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "java variable.name",
      scope: "meta.definition.variable.name.java",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Java Variables",
      scope: "token.variable.parameter.java",
      settings: {
        foreground: palette.text,
      },
    },
    {
      name: "Java Imports",
      scope: "import.storage.java",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Java Storage",
      scope: "token.storage.type.java",
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Groovy import names",
      scope: ["storage.modifier.import.groovy"],
      settings: {
        foreground: palette.peach,
      },
    },
    {
      name: "Groovy Methods",
      scope: ["meta.method.groovy"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Groovy Variables",
      scope: ["meta.definition.variable.name.groovy"],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Groovy Inheritance",
      scope: ["meta.definition.class.inherited.classes.groovy"],
      settings: {
        foreground: palette.green,
      },
    },
  ];
}
