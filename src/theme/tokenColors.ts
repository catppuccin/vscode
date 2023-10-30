import type { TextmateColors, ThemeContext } from "@/types";
import tokens from "./tokens";

export const getTokenColors = (context: ThemeContext): TextmateColors => {
  const { options } = context;

  return tokens(context).map((token) => {
    if (token.name === "Comments") return token;

    let fontStyle = token.settings.fontStyle;
    if (!options.italicKeywords && fontStyle !== undefined) {
      fontStyle = fontStyle?.replace("italic", "");
    }
    if (
      !options.boldKeywords &&
      fontStyle !== undefined &&
      token.scope !== "markup.bold"
    ) {
      fontStyle = fontStyle?.replace("bold", "");
    }

    token = {
      ...token,
      settings: { ...token.settings, fontStyle },
    };
    return token;
  });
};
