import { CatppuccinPalette, ThemeOptions } from "../../types";

import c_cpp from "./c_cpp";
import golang from "./golang";
import java from "./java";
import js_ts from "./js_ts";
import json from "./json";
import lua from "./lua";
import markdown from "./markdown";
import php from "./php";
import python from "./python";
import ruby from "./ruby";
import rust from "./rust";
import shell from "./shell";

export default function (palette: CatppuccinPalette, options: ThemeOptions) {
  return [
    ...c_cpp(palette, options),
    ...golang(palette, options),
    ...java(palette, options),
    ...json(palette, options),
    ...js_ts(palette, options),
    ...lua(palette, options),
    ...markdown(palette, options),
    ...php(palette, options),
    ...python(palette, options),
    ...rust(palette, options),
    ...ruby(palette, options),
    ...shell(palette, options),
  ];
}
