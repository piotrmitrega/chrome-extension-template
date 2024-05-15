import { ContentCommandType } from "@src/consts/commands";
import { ExtensionCommand } from "@src/types/commands/base";

export class EnableSelectionModeContentCommand extends ExtensionCommand {
  constructor() {
    super(ContentCommandType.ENABLE_SELECTION_MODE);
  }
}

export class DisableSelectionModeContentCommand extends ExtensionCommand {
  constructor() {
    super(ContentCommandType.DISABLE_SELECTION_MODE);
  }
}
