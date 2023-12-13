import React, { useEffect, useState } from "react";
import { getHighlighter, bundledLanguages } from "shikiji";
import "@catppuccin/palette/style";
import mocha from "catppuccin-vsc/themes/mocha.json";
import macchiato from "catppuccin-vsc/themes/macchiato.json";
import frappe from "catppuccin-vsc/themes/frappe.json";
import latte from "catppuccin-vsc/themes/latte.json";

const themes = [mocha, macchiato, frappe, latte] as any[];
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
      setRendered(
        (await shiki).codeToHtml(
          await fetch(code).then((data) => data.text()),
          {
            lang: language,
            themes: {
              light: "Catppuccin Latte",
              frappe: "Catppuccin Frappe",
              macchiato: "Catppuccin Macchiato",
              dark: "Catppuccin Mocha",
            },
          },
        ),
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
          maxWidth: "54rem",
          margin: "0 auto",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: rendered }} />
      </div>
    </div>
  );
};
