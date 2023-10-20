import type { ThemeContext } from "../../types";
import errorLens from "./error-lens";

export default function (context: ThemeContext) {
  return {
    ...[errorLens].map((el) => el(context)),
  };
}
