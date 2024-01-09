/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 * Instead, run `yarn run updateVSCtypes` to regenerate this file.
 */

export interface SemanticTokens {
  /**
   * Style for comments.
   */
  comment?: string | Style;
  /**
   * Style for strings.
   */
  string?: string | Style;
  /**
   * Style for keywords.
   */
  keyword?: string | Style;
  /**
   * Style for numbers.
   */
  number?: string | Style;
  /**
   * Style for expressions.
   */
  regexp?: string | Style;
  /**
   * Style for operators
   */
  operator?: string | Style;
  /**
   * Style for namespaces.
   */
  namespace?: string | Style;
  /**
   * Style for types.
   */
  type?: string | Style;
  /**
   * Style for structs.
   */
  struct?: string | Style;
  /**
   * Style for classes.
   */
  class?: string | Style;
  /**
   * Style for interfaces.
   */
  interface?: string | Style;
  /**
   * Style for enums.
   */
  enum?: string | Style;
  /**
   * Style for type parameters.
   */
  typeParameter?: string | Style;
  /**
   * Style for functions
   */
  function?: string | Style;
  /**
   * Style for member functions
   */
  member?: string | Style;
  /**
   * Style for method (member functions)
   */
  method?: string | Style;
  /**
   * Style for macros.
   */
  macro?: string | Style;
  /**
   * Style for variables.
   */
  variable?: string | Style;
  /**
   * Style for parameters.
   */
  parameter?: string | Style;
  /**
   * Style for properties.
   */
  property?: string | Style;
  /**
   * Style for enum members.
   */
  enumMember?: string | Style;
  /**
   * Style for events.
   */
  event?: string | Style;
  /**
   * Style for decorators & annotations.
   */
  decorator?: string | Style;
  /**
   * Style for labels
   */
  label?: string | Style;
  /**
   * Style for all symbol declarations.
   */
  "*.declaration"?: string | Style;
  /**
   * Style to use for references in documentation.
   */
  "*.documentation"?: string | Style;
  /**
   * Style to use for symbols that are static.
   */
  "*.static"?: string | Style;
  /**
   * Style to use for symbols that are abstract.
   */
  "*.abstract"?: string | Style;
  /**
   * Style to use for symbols that are deprecated.
   */
  "*.deprecated"?: string | Style;
  /**
   * Style to use for write accesses.
   */
  "*.modification"?: string | Style;
  /**
   * Style for async functions and the `async` and `await` keywords
   */
  "*.async"?: string | Style;
  /**
   * Style to use for symbols that are read-only.
   */
  "*.readonly"?: string | Style;
  /**
   * module
   */
  module?: string | Style;
  /**
   * intrinsic
   */
  intrinsic?: string | Style;
  /**
   * self parameter
   */
  selfParameter?: string | Style;
  /**
   * cls parameter
   */
  clsParameter?: string | Style;
  /**
   * magic aka dunder function
   */
  magicFunction?: string | Style;
  /**
   * constants like True, False, None, or __debug__
   */
  builtinConstant?: string | Style;
  /**
   * Style for ( or )
   */
  parenthesis?: string | Style;
  /**
   * Style for [ or ]
   */
  bracket?: string | Style;
  /**
   * {} curly brace
   */
  curlybrace?: string | Style;
  /**
   * Style for :
   */
  colon?: string | Style;
  /**
   * Style for ;
   */
  semicolon?: string | Style;
  /**
   * arrow token
   */
  arrow?: string | Style;
  /**
   * Style for C++/CLI reference types.
   */
  referenceType?: string | Style;
  /**
   * Style for C++/CLI properties.
   */
  cliProperty?: string | Style;
  /**
   * Style for C++/CLI generic types.
   */
  genericType?: string | Style;
  /**
   * Style for C++/CLI value types.
   */
  valueType?: string | Style;
  /**
   * Style for C++ template functions.
   */
  templateFunction?: string | Style;
  /**
   * Style for C++ template types.
   */
  templateType?: string | Style;
  /**
   * Style for C++ overloaded operators.
   */
  operatorOverload?: string | Style;
  /**
   * Style for C++ overloaded operator member functions.
   */
  memberOperatorOverload?: string | Style;
  /**
   * Style for C++ `new` or `delete` operators.
   */
  newOperator?: string | Style;
  /**
   * Style for C++ user-defined literals.
   */
  customLiteral?: string | Style;
  /**
   * Style for C++ user-defined literal numbers.
   */
  numberLiteral?: string | Style;
  /**
   * Style for C++ user-defined literal strings.
   */
  stringLiteral?: string | Style;
  /**
   * A boolean literal
   */
  bool?: string | Style;
  /**
   * Punctuation in code
   */
  punct?: string | Style;
  /**
   * Escape sequence
   */
  escape?: string | Style;
  /**
   * Hyperlink
   */
  link?: string | Style;
  /**
   * Raw text
   */
  raw?: string | Style;
  /**
   * Reference to a label
   */
  ref?: string | Style;
  /**
   * Heading
   */
  heading?: string | Style;
  /**
   * List, enum, or term list marker
   */
  marker?: string | Style;
  /**
   * Term in a term list
   */
  term?: string | Style;
  /**
   * Delimiter of a different type of markup
   */
  delim?: string | Style;
  /**
   * Interpolated variable
   */
  pol?: string | Style;
  /**
   * Syntax error
   */
  error?: string | Style;
  /**
   * Text
   */
  text?: string | Style;
  /**
   * Style for < or >
   */
  angle?: string | Style;
  /**
   * Style for arithmetic operators
   */
  arithmetic?: string | Style;
  /**
   * Style for attributes
   */
  attribute?: string | Style;
  /**
   * Style for attribute invocation brackets, that is the `#[` and `]` tokens
   */
  attributeBracket?: string | Style;
  /**
   * Style for bitwise operators
   */
  bitwise?: string | Style;
  /**
   * Style for boolean literals
   */
  boolean?: string | Style;
  /**
   * Style for { or }
   */
  brace?: string | Style;
  /**
   * Style for builtin attributes
   */
  builtinAttribute?: string | Style;
  /**
   * Style for builtin types
   */
  builtinType?: string | Style;
  /**
   * Style for character literals
   */
  character?: string | Style;
  /**
   * Style for ,
   */
  comma?: string | Style;
  /**
   * Style for comparison operators
   */
  comparison?: string | Style;
  /**
   * Style for const generics
   */
  constParameter?: string | Style;
  /**
   * Style for derives
   */
  derive?: string | Style;
  /**
   * Style for derive helpers
   */
  deriveHelper?: string | Style;
  /**
   * Style for .
   */
  dot?: string | Style;
  /**
   * Style for char or byte escapes in strings
   */
  escapeSequence?: string | Style;
  /**
   * Style for {} placeholders in format strings
   */
  formatSpecifier?: string | Style;
  /**
   * Style for invalid char or byte escapes in strings
   */
  invalidEscapeSequence?: string | Style;
  /**
   * Style for lifetimes
   */
  lifetime?: string | Style;
  /**
   * Style for logic operators
   */
  logical?: string | Style;
  /**
   * Style for the ! token of macro calls
   */
  macroBang?: string | Style;
  /**
   * Style for generic punctuation
   */
  punctuation?: string | Style;
  /**
   * Style for the self keyword
   */
  selfKeyword?: string | Style;
  /**
   * Style for the self type keyword
   */
  selfTypeKeyword?: string | Style;
  /**
   * Style for type aliases
   */
  typeAlias?: string | Style;
  /**
   * Style for C-style untagged unions
   */
  union?: string | Style;
  /**
   * Style for names which can not be resolved due to compilation errors
   */
  unresolvedReference?: string | Style;
  /**
   * Keys of regular arrays.
   */
  tomlArrayKey?: string | Style;
  /**
   * Keys of inline tables.
   */
  tomlTableKey?: string | Style;
  /**
   * inside a type annotation
   */
  "*.typeHint"?: string | Style;
  /**
   * inside a comment style type annotation
   */
  "*.typeHintComment"?: string | Style;
  /**
   * inside a decorator
   */
  "*.decorator"?: string | Style;
  /**
   * built-in identifier
   */
  "*.builtin"?: string | Style;
  /**
   * overridden token
   */
  "*.overridden"?: string | Style;
  /**
   * Style to use for symbols that are global.
   */
  "*.global"?: string | Style;
  /**
   * Style to use for symbols that are local.
   */
  "*.local"?: string | Style;
  /**
   * Math mode markup
   */
  "*.math"?: string | Style;
  /**
   * Strong (usually bolded) text
   */
  "*.strong"?: string | Style;
  /**
   * Emphasized (usually italicized) text
   */
  "*.emph"?: string | Style;
  /**
   * Style for elements within attributes
   */
  "*.attribute"?: string | Style;
  /**
   * Style for locals whose types implements one of the `Fn*` traits
   */
  "*.callable"?: string | Style;
  /**
   * Style for compile-time constants
   */
  "*.constant"?: string | Style;
  /**
   * Style for locals that are being consumed when use in a function call
   */
  "*.consuming"?: string | Style;
  /**
   * Style for control-flow related tokens, this includes the `?` operator
   */
  "*.controlFlow"?: string | Style;
  /**
   * Style for names resolving to a crate root
   */
  "*.crateRoot"?: string | Style;
  /**
   * Style for doc-string injected highlighting like rust source blocks in documentation
   */
  "*.injected"?: string | Style;
  /**
   * Style for intra doc links in doc-strings
   */
  "*.intraDocLink"?: string | Style;
  /**
   * Style for items that are defined outside of the current crate
   */
  "*.library"?: string | Style;
  /**
   * Style for mutable locals and statics as well as functions taking `&mut self`
   */
  "*.mutable"?: string | Style;
  /**
   * Style for items that are from the current crate and are `pub`
   */
  "*.public"?: string | Style;
  /**
   * Style for locals behind a reference and functions taking `self` by reference
   */
  "*.reference"?: string | Style;
  /**
   * Style for associated trait items
   */
  "*.trait"?: string | Style;
  /**
   * Style for unsafe operations, like unsafe function calls, as well as the `unsafe` token
   */
  "*.unsafe"?: string | Style;
  /**
   * This interface was referenced by `SemanticTokens`'s JSON-Schema definition
   * via the `patternProperty` "^(\w+[-_\w+]*|\*)(\.\w+[-_\w+]*)*(:\w+[-_\w+]*)?$".
   */
  [k: string]: string | Style;
}
/**
 * Colors and styles for the token.
 */
export interface Style {
  /**
   * Foreground color for the token.
   */
  foreground?: string;
  background?: string;
  /**
   * Sets the all font styles of the rule: 'italic', 'bold', 'underline' or 'strikethrough' or a combination. All styles that are not listed are unset. The empty string unsets all styles.
   */
  fontStyle?: string;
  /**
   * Sets or unsets the font style to bold. Note, the presence of 'fontStyle' overrides this setting.
   */
  bold?: boolean;
  /**
   * Sets or unsets the font style to italic. Note, the presence of 'fontStyle' overrides this setting.
   */
  italic?: boolean;
  /**
   * Sets or unsets the font style to underline. Note, the presence of 'fontStyle' overrides this setting.
   */
  underline?: boolean;
  /**
   * Sets or unsets the font style to strikethrough. Note, the presence of 'fontStyle' overrides this setting.
   */
  strikethrough?: boolean;
}
