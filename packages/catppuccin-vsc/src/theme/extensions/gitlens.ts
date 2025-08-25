import type { GitLensColors, ThemeContext } from "@/types";
import { opacity, shade, transparent } from "@/theme/utilities";

export default function colors(context: ThemeContext): Partial<GitLensColors> {
  const { palette, options } = context;

  const graphLaneColors = [
    palette.mauve,
    palette.yellow,
    palette.blue,
    palette.flamingo,
    palette.green,
    palette.lavender,
    palette.rosewater,
    palette.red,
    palette.teal,
    palette.pink,
    palette.peach,
    palette.sapphire,
    palette.maroon,
    palette.sky,
  ];

  const accentIndex = graphLaneColors.indexOf(palette[options.accent]);

  return {
    "gitlens.gutterBackgroundColor": opacity(palette.surface0, 0.3),
    "gitlens.gutterForegroundColor": palette.text,
    "gitlens.gutterUncommittedForegroundColor": palette[options.accent],
    "gitlens.trailingLineBackgroundColor": transparent,
    "gitlens.trailingLineForegroundColor": opacity(palette.text, 0.3),
    "gitlens.lineHighlightBackgroundColor": opacity(
      palette[options.accent],
      0.15,
    ),
    "gitlens.lineHighlightOverviewRulerColor": opacity(
      palette[options.accent],
      0.8,
    ),
    "gitlens.openAutolinkedIssueIconColor": palette.green,
    "gitlens.closedAutolinkedIssueIconColor": palette.mauve,
    "gitlens.closedPullRequestIconColor": palette.red,
    "gitlens.openPullRequestIconColor": palette.green,
    "gitlens.mergedPullRequestIconColor": palette.mauve,
    "gitlens.unpublishedChangesIconColor": palette.green,
    "gitlens.unpublishedCommitIconColor": palette.green,
    "gitlens.unpulledChangesIconColor": palette.peach,
    // "gitlens.decorations.addedForegroundColor": "", // (default: gitDecoration.addedResourceForeground)
    // "gitlens.decorations.copiedForegroundColor": "", // (default: gitDecoration.renamedResourceForeground)
    // "gitlens.decorations.deletedForegroundColor": "", // (default: gitDecoration.deletedResourceForeground)
    // "gitlens.decorations.ignoredForegroundColor": "", // (default: gitDecoration.ignoredResourceForeground)
    // "gitlens.decorations.modifiedForegroundColor": "", // (default: gitDecoration.modifiedResourceForeground)
    // "gitlens.decorations.untrackedForegroundColor": "", // (default: gitDecoration.untrackedResourceForeground)
    // "gitlens.decorations.renamedForegroundColor": "", // (default: gitDecoration.renamedResourceForeground)
    "gitlens.decorations.branchAheadForegroundColor": palette.green,
    "gitlens.decorations.branchBehindForegroundColor": palette.peach,
    "gitlens.decorations.branchDivergedForegroundColor": palette.yellow,
    // "gitlens.decorations.branchUpToDateForegroundColor": palette.text, // (default: sideBar.foreground)
    "gitlens.decorations.branchUnpublishedForegroundColor": palette.green,
    "gitlens.decorations.branchMissingUpstreamForegroundColor": palette.peach,
    "gitlens.decorations.statusMergingOrRebasingConflictForegroundColor":
      palette.maroon,
    "gitlens.decorations.statusMergingOrRebasingForegroundColor":
      palette.yellow,
    "gitlens.decorations.workspaceRepoMissingForegroundColor": palette.subtext0,
    "gitlens.decorations.workspaceCurrentForegroundColor":
      palette[options.accent],
    "gitlens.decorations.workspaceRepoOpenForegroundColor":
      palette[options.accent],
    "gitlens.decorations.worktreeHasUncommittedChangesForegroundColor":
      palette.peach,
    "gitlens.decorations.worktreeMissingForegroundColor": palette.maroon,
    "gitlens.graphLane1Color": graphLaneColors[accentIndex],
    "gitlens.graphLane2Color":
      graphLaneColors[(accentIndex + 1) % graphLaneColors.length],
    "gitlens.graphLane3Color":
      graphLaneColors[(accentIndex + 2) % graphLaneColors.length],
    "gitlens.graphLane4Color":
      graphLaneColors[(accentIndex + 3) % graphLaneColors.length],
    "gitlens.graphLane5Color":
      graphLaneColors[(accentIndex + 4) % graphLaneColors.length],
    "gitlens.graphLane6Color":
      graphLaneColors[(accentIndex + 5) % graphLaneColors.length],
    "gitlens.graphLane7Color":
      graphLaneColors[(accentIndex + 6) % graphLaneColors.length],
    "gitlens.graphLane8Color":
      graphLaneColors[(accentIndex + 7) % graphLaneColors.length],
    "gitlens.graphLane9Color":
      graphLaneColors[(accentIndex + 8) % graphLaneColors.length],
    "gitlens.graphLane10Color":
      graphLaneColors[(accentIndex + 9) % graphLaneColors.length],
    "gitlens.graphChangesColumnAddedColor": palette.green,
    "gitlens.graphChangesColumnDeletedColor": palette.red,
    "gitlens.graphMinimapMarkerHeadColor": palette.green,
    "gitlens.graphScrollMarkerHeadColor": palette.green,
    "gitlens.graphMinimapMarkerUpstreamColor": shade(palette.green, -0.05),
    "gitlens.graphScrollMarkerUpstreamColor": shade(palette.green, -0.05),
    "gitlens.graphMinimapMarkerHighlightsColor": palette.yellow,
    "gitlens.graphScrollMarkerHighlightsColor": palette.yellow,
    "gitlens.graphMinimapMarkerLocalBranchesColor": palette.blue,
    "gitlens.graphScrollMarkerLocalBranchesColor": palette.blue,
    "gitlens.graphMinimapMarkerRemoteBranchesColor": shade(palette.blue, -0.05),
    "gitlens.graphScrollMarkerRemoteBranchesColor": shade(palette.blue, -0.05),
    "gitlens.graphMinimapMarkerStashesColor": palette.mauve,
    "gitlens.graphScrollMarkerStashesColor": palette.mauve,
    "gitlens.graphMinimapMarkerTagsColor": palette.flamingo,
    "gitlens.graphScrollMarkerTagsColor": palette.flamingo,
  };
}
