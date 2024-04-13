import type { ThemeContext } from "@/types";
import errorLens from "./error-lens";
import gitHubPullRequest from "./github-pull-request";
import gitLens from "./gitlens";

export default function extensions(context: ThemeContext) {
  return {
    ...errorLens(context),
    ...gitHubPullRequest(context),
    ...gitLens(context),
  };
}
