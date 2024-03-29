import React, { useEffect, useState } from "react";
import { getHighlighter, bundledLanguages, type ThemeInput } from "shiki";
import "@catppuccin/palette/css/catppuccin.css";
import mocha from "catppuccin-vsc/themes/mocha.json";
import macchiato from "catppuccin-vsc/themes/macchiato.json";
import frappe from "catppuccin-vsc/themes/frappe.json";
import latte from "catppuccin-vsc/themes/latte.json";

const themes = [mocha, macchiato, frappe, latte].map((theme, index) => {
  return {
    ...theme,
    name: ["mocha", "macchiato", "frappe", "latte"][index],
  } as unknown as ThemeInput;
});
const shiki = getHighlighter({
  themes,
  langs: Object.keys(bundledLanguages),
});

export const Syntax = ({
  code = "",
  language = "",
}: {
  code: string;
  language: string;
}) => {
  const [rendered, setRendered] = useState<string>("");
  useEffect(() => {
    (async () => {
      const highlighted = await shiki;
      setRendered(
        highlighted.codeToHtml(await fetch(code).then((data) => data.text()), {
          lang: language,
          themes: {
            light: "latte",
            frappe: "frappe",
            macchiato: "macchiato",
            dark: "mocha",
          },
        }),
      );
    })();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "100rem",
          margin: "0 auto",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: rendered }} />
      </div>
    </div>
  );
};
