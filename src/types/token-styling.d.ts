/* eslint-disable */
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
   * Style for operators.
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
   * Style for labels.
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
   * Style to use for symbols that are async.
   */
  "*.async"?: string | Style;
  /**
   * Style to use for symbols that are read-only.
   */
  "*.readonly"?: string | Style;
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
