import { ThemeContext } from "../../types";
import errorLens from "./error-lense";

export default function (context: ThemeContext) {
  return {
    ...errorLens(context),
  };
}
