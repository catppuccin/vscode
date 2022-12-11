import { ThemeContext } from "../../types";
import { opacity } from "../utils";

export default function colors(context: ThemeContext) {
  const { palette } = context;

  return {
    "errorLens.errorBackground": opacity(palette.red, 0.15),
    "errorLens.errorMessageBackground": opacity(palette.red, 0.15),
    "errorLens.errorBackgroundLight": opacity(palette.red, 0.15),
    "errorLens.errorForeground": palette.red,
    "errorLens.errorForegroundLight": palette.red,
    "errorLens.warningBackground": opacity(palette.peach, 0.15),
    "errorLens.warningMessageBackground": opacity(palette.peach, 0.15),
    "errorLens.warningBackgroundLight": opacity(palette.peach, 0.15),
    "errorLens.warningForeground": palette.peach,
    "errorLens.warningForegroundLight": palette.peach,
    "errorLens.infoBackground": opacity(palette.blue, 0.15),
    "errorLens.infoMessageBackground": opacity(palette.blue, 0.15),
    "errorLens.infoBackgroundLight": opacity(palette.blue, 0.15),
    "errorLens.infoForeground": palette.blue,
    "errorLens.infoForegroundLight": palette.blue,
    "errorLens.hintBackground": opacity(palette.green, 0.15),
    "errorLens.hintMessageBackground": opacity(palette.green, 0.15),
    "errorLens.hintBackgroundLight": opacity(palette.green, 0.15),
    "errorLens.hintForeground": palette.green,
    "errorLens.hintForegroundLight": palette.green,
    "errorLens.statusBarIconErrorForeground": palette.red,
    "errorLens.statusBarIconWarningForeground": palette.peach,
    "errorLens.statusBarErrorForeground": palette.red,
    "errorLens.statusBarWarningForeground": palette.peach,
    "errorLens.statusBarInfoForeground": palette.blue,
    "errorLens.statusBarHintForeground": palette.green,
  };
}
