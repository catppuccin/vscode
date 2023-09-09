import type { TextmateColors, ThemeContext } from "../types";
import tokens from "./tokens";

export const getTokenColors = (context: ThemeContext): TextmateColors => {
  const { options } = context;

  return tokens(context).map((token) => {
    if (token.name === "Comments") return token;

    token = {
      ...token,
      settings: {
        ...token.settings,
        fontStyle: options.italicKeywords
          ? token.settings.fontStyle
          : (token.settings.fontStyle ?? "").replace("italic", ""),
      },
    };
    return token;
  });
};
