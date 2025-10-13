import type { TextmateColors, ThemeContext } from "@/types";

/*

STYLING CHOICES
---------------

  language element     ->color    ->fontStyle
  -----------------    -------    -----------
  functions            blue       italic
  data constructors    blue       -
  types                yellow     italic
  typeclasses [1]      yellow     -

It would be preferrable for each listed language element to appear visually distinct from the other. With choices above, that is also achieved, granted setting `italicKeywords` is active.

[1]: typeclasses are not distinguishable from types with only textMate scopes; requires semantic tokens


GRAMMAR REF.
------------

https://github.com/JustusAdam/language-haskell

- is the only Haskell textMate grammar in use
- (is the upstream of the Haskell VS Code extension)
- generated listing of all assigned scopes: https://github.com/JustusAdam/language-haskell/blob/master/scope-lists/haskell.scope-db.yaml

*/

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "data constructors",
      scope: [
        "meta.declaration.data constant.other.haskell",
        "constant.other.haskell", // to hit data constr. if no semantic tokens
        "meta.declaration.pattern constant.other.haskell", // pattern synonyms
        "constant.language.unit.haskell punctuation",
        "constant.language.unit.unboxed.haskell punctuation",
      ],
      settings: {
        foreground: palette.blue,
        fontStyle: "",
      },
    },
    {
      name: "types",
      scope: ["storage.type.haskell"],
      settings: {
        foreground: palette.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "`()` unit type (not italicized)",
      scope: [
        "support.constant.unit.haskell punctuation",
        "support.constant.unit.haskell keyword.operator.hash",
        "support.constant.unit.unboxed.haskell punctuation",
        "support.constant.unit.unboxed.haskell keyword.operator.hash",
      ],
      settings: {
        foreground: palette.yellow,
        fontStyle: "",
      },
    },
    {
      name: "type parameters",
      scope: ["variable.other.generic-type.haskell"],
      settings: {
        foreground: palette.maroon,
        fontStyle: "",
      },
    },
    {
      name: "special words (builtin constants-like)",
      scope: [
        "keyword.other.default.haskell",
        "keyword.other.role.nominal.haskell",
        "keyword.other.role.representational.haskell",
        "keyword.other.role.phantom.haskell",
      ],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "pragma specifiers",
      scope: [
        "keyword.other.preprocessor.haskell",
        "keyword.other.preprocessor.pragma.haskell",
      ],
      settings: {
        foreground: palette.rosewater,
      },
    },
    {
      name: "pragma arguments",
      scope: ["keyword.other.preprocessor.extension.haskell"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "C preprocessor directives",
      scope: [
        "source.haskell meta.preprocessor.c",
        "source.haskell meta.preprocessor.c punctuation.definition.preprocessor.c",
      ],
      settings: {
        foreground: palette.rosewater,
      },
    },
    {
      name: "Haskell preprocessor directives",
      scope: ["meta.preprocessor.haskell"],
      settings: {
        foreground: palette.overlay2,
        // the enclosing block comment definitions ({-#, #-}) are scoped only with the `meta` scope -> using the comment color is the best-looking choice (also, the whole thing _is_ technically a block comment)
      },
    },
    {
      name: "getters in data constructors/records",
      scope: [
        "variable.other.member.haskell",
        "variable.other.member.definition.haskell",
      ],
      settings: {
        foreground: palette.lavender,
        fontStyle: "italic",
      },
    },
    {
      name: "fix else keyword",
      scope: ["keyword.control.else.haskell"],
      settings: {
        foreground: palette.mauve,
      },
      // catppuccin default sets to yellow considering it preprocessor-like, which it is not for Haskell
    },
    {
      name: "char literals (are enum variants)",
      scope: [
        "string.quoted.single.haskell",
        "string.quoted.single.haskell punctuation.definition.string",
      ],
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "operators",
      scope: [
        "storage.type.operator.haskell",
        "storage.type.operator.infix.haskell",
        "entity.name.function.infix.haskell", // op. in parens, e g: (+)
        "punctuation.backtick.haskell", // e g: x `op` y
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
    },
    {
      name: "the , in `(,)`",
      scope: [
        "support.constant.tuple.haskell",
        "support.constant.tuple.unboxed.haskell",
      ],
      settings: {
        foreground: palette.teal,
        fontStyle: "",
      },
      // the scoping doesn't allow distinguishing `(,)` in types (= type function) and terms (= data constructor) -> color as an operator since that works OK for both
    },
    {
      name: "a few special symbols",
      scope: [
        "keyword.operator.lambda.haskell",
        "keyword.operator.pipe.haskell",
        "keyword.operator.double-dot.haskell",
        "variable.other.member.wildcard.haskell",
      ],
      settings: {
        foreground: palette.red,
      },
      // neither operators nor delimiters, and should preferrably appear distinct from both
    },
    {
      name: "delimiter-like",
      scope: [
        "meta.type-application keyword.operator.prefix.at.haskell",
        // symbols in pattern-matching:
        "keyword.operator.infix.tight.at.haskell", // @ in pair@(x,y)
        "keyword.operator.prefix.tilde.haskell", // ~ in ~(x,y)
        "keyword.operator.prefix.bang.haskell",
        // delimiters in type signatures:
        "keyword.operator.double-colon.haskell",
        "keyword.operator.big-arrow.haskell",
        // delimiters in type signatures - the . after `forall`:
        "meta.function.type-declaration keyword.operator.period.haskell",
        "meta.type-declaration keyword.operator.period.haskell",
        "meta.declaration.type keyword.operator.period.haskell",
      ],
      settings: {
        foreground: palette.overlay2,
        fontStyle: "",
      },
      // these are not operators, but are either delimiter-like, or punctuation that benefits from not drawing visual attention
      // -> color as delimiters/overlay2 since: closer to style guide + looks better + improves code readability
    },
    {
      name: "TemplateHaskell and QuasiQuoter (macros)",
      scope: [
        "keyword.operator.prefix.dollar.haskell",
        "keyword.operator.quasi-quotation.begin.haskell",
        "keyword.operator.quasi-quotation.end.haskell",
      ],
      settings: {
        foreground: palette.pink, // like macros in rust
      },
    },
    {
      name: "minus sign in negative num literals",
      scope: ["keyword.operator.prefix.minus.haskell"],
      settings: {
        foreground: palette.peach,
      },
    },
  ];
};

export default tokens;
