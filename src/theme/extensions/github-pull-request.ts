import type { GitHubPullRequestColors, ThemeContext } from "@/types";

export default function colors(
  context: ThemeContext,
): Partial<GitHubPullRequestColors> {
  const { palette } = context;

  return {
    "issues.closed": palette.mauve,
    "issues.newIssueDecoration": palette.rosewater,
    "issues.open": palette.green,
    "pullRequests.closed": palette.red,
    "pullRequests.draft": palette.overlay2,
    "pullRequests.merged": palette.mauve,
    "pullRequests.notification": palette.text,
    "pullRequests.open": palette.green,
  };
}
