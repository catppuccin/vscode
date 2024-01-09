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
          return entry.length === 1
            ? {
                [k]: accent,
              }
            : {
                [k]: opacity(accent, Number(entry[1])),
              };
        }

        // allow custom hex colors
        if (v.startsWith("#")) {
          return {
            [k]: v,
          };
        }

        //check if the entry is a "color opacity" mapping
        const entry = v.split(" ");
        v =
          entry.length === 1
            ? // resolve to the palette color
              palette[v as keyof CatppuccinPalette]
            : // call the opacity function
              opacity(
                palette[entry[0] as keyof CatppuccinPalette],
                Number(entry[1]),
              );

        return {
          [k]: v,
        };
      })
      // TODO: rework this to get rid of the reduce
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce((previous, current) => ({ ...previous, ...current }), {}),
  };
};

export default customNamedColors;
