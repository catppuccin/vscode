import { CatppuccinPalette, ThemeContext } from "@/types";
import { opacity } from "@/theme/utils";

type CustomNamedColors = Record<string, string>;

const customNamedColors = (context: ThemeContext): CustomNamedColors => {
  const { flavor, palette, options } = context;
  const accent = palette[options.accent];

  return {
    ...Object.entries({
      // collect the options, overwrite the "all" config with the current palette config
      ...options.customUIColors.all,
      ...options.customUIColors[flavor],
    })
      .map(([k, v]) => {
        // deal with accents
        if (v.startsWith("accent")) {
          const entry = v.split(" ");
          if (entry.length !== 1) {
            return {
              [k]: opacity(accent, Number(entry[1])),
            };
          } else {
            return {
              [k]: accent,
            };
          }
        }

        // allow custom hex colors
        if (v.startsWith("#")) {
          return {
            [k]: v,
          };
        }

        //check if the entry is a "color opacity" mapping
        const entry = v.split(" ");
        if (entry.length !== 1) {
          // call the opacity function
          v = opacity(
            palette[entry[0] as keyof CatppuccinPalette],
            Number(entry[1]),
          );
        } else {
          // resolve to the palette color
          v = palette[v as keyof CatppuccinPalette];
        }

        return {
          [k]: v,
        };
      })
      .reduce((prev, cur) => ({ ...prev, ...cur }), {}),
  };
};

export default customNamedColors;
