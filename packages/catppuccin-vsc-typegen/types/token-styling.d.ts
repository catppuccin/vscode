export interface SemanticTokens {
  /**
   * Style to use for symbols that are abstract.
   */
  "*.abstract"?: Style | string;
  /**
   * Style to use for symbols that are async.
   */
  "*.async"?: Style | string;
  /**
   * Style for all symbol declarations.
   */
  "*.declaration"?: Style | string;
  /**
   * Style to use for symbols that are deprecated.
   */
  "*.deprecated"?: Style | string;
  /**
   * Style to use for references in documentation.
   */
  "*.documentation"?: Style | string;
  /**
   * Style to use for write accesses.
   */
  "*.modification"?: Style | string;
  /**
   * Style to use for symbols that are read-only.
   */
  "*.readonly"?: Style | string;
  /**
   * Style to use for symbols that are static.
   */
  "*.static"?: Style | string;
  /**
   * Style for classes.
   */
  class?: Style | string;
  /**
   * Style for comments.
   */
  comment?: Style | string;
  /**
   * Style for decorators & annotations.
   */
  decorator?: Style | string;
  /**
   * Style for enums.
   */
  enum?: Style | string;
  /**
   * Style for enum members.
   */
  enumMember?: Style | string;
  /**
   * Style for events.
   */
  event?: Style | string;
  /**
   * Style for functions
   */
  function?: Style | string;
  /**
   * Style for interfaces.
   */
  interface?: Style | string;
  /**
   * Style for keywords.
   */
  keyword?: Style | string;
  /**
   * Style for labels.
   */
  label?: Style | string;
  /**
   * Style for macros.
   */
  macro?: Style | string;
  /**
   * Style for member functions
   */
  member?: Style | string;
  /**
   * Style for method (member functions)
   */
  method?: Style | string;
  /**
   * Style for namespaces.
   */
  namespace?: Style | string;
  /**
   * Style for numbers.
   */
  number?: Style | string;
  /**
   * Style for operators.
   */
  operator?: Style | string;
  /**
   * Style for parameters.
   */
  parameter?: Style | string;
  /**
   * Style for properties.
   */
  property?: Style | string;
  /**
   * Style for expressions.
   */
  regexp?: Style | string;
  /**
   * Style for strings.
   */
  string?: Style | string;
  /**
   * Style for structs.
   */
  struct?: Style | string;
  /**
   * Style for types.
   */
  type?: Style | string;
  /**
   * Style for type parameters.
   */
  typeParameter?: Style | string;
  /**
   * Style for variables.
   */
  variable?: Style | string;
  /**
   * This interface was referenced by `SemanticTokens`'s JSON-Schema definition
   * via the `patternProperty` "^(\w+[-_\w+]*|\*)(\.\w+[-_\w+]*)*(:\w+[-_\w+]*)?$".
   */
  [k: string]: Style | string;
}

/**
 * Colors and styles for the token.
 */
export interface Style {
  background?: string;
  /**
   * Sets or unsets the font style to bold. Note, the presence of 'fontStyle' overrides this
   * setting.
   */
  bold?: boolean;
  /**
   * Sets the all font styles of the rule: 'italic', 'bold', 'underline' or 'strikethrough' or
   * a combination. All styles that are not listed are unset. The empty string unsets all
   * styles.
   */
  fontStyle?: string;
  /**
   * Foreground color for the token.
   */
  foreground?: string;
  /**
   * Sets or unsets the font style to italic. Note, the presence of 'fontStyle' overrides this
   * setting.
   */
  italic?: boolean;
  /**
   * Sets or unsets the font style to strikethrough. Note, the presence of 'fontStyle'
   * overrides this setting.
   */
  strikethrough?: boolean;
  /**
   * Sets or unsets the font style to underline. Note, the presence of 'fontStyle' overrides
   * this setting.
   */
  underline?: boolean;
}
