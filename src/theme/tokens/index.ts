import type { ThemeContext } from "../../types";

import cpp from "./cpp";
import data from "./data";
import golang from "./golang";
import html from "./html";
import javascript from "./javascript";
import python from "./python";
import rust from "./rust";
import shell from "./shell";

export default (c: ThemeContext) => {
  return [cpp, data, golang, html, javascript, python, rust, shell].flatMap(
    (el) => el(c),
  );
};
