import type { ThemeContext } from "@/types";
import errorLens from "./error-lens";
import gitLens from "./gitlens";

export default function (context: ThemeContext) {
  return {
    ...errorLens(context),
    ...gitLens(context),
  };
}
