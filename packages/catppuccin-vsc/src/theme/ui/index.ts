import { ThemeContext } from "@/types";

import azureDataStudio from "./azureDataStudio";
import brackets from "./brackets";
import workbench from "./workbench";

import customNamedColors from "./customNames";

const uiCustomizations = (context: ThemeContext) => {
  return {
    ...brackets(context),
    ...workbench(context),
    ...customNamedColors(context),
    ...azureDataStudio(context),
  };
};

export default uiCustomizations;
