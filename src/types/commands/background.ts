import { ExtensionCommand } from "@src/types/commands/base";
import { BackgroundCommandType } from "@src/consts/commands";

export class SaveProductTitleSelectorBackgroundCommand extends ExtensionCommand {
  constructor() {
    super(BackgroundCommandType.SAVE_PRODUCT_TITLE_SELECTOR);
  }
}

export class SaveProductPriceSelectorBackgroundCommand extends ExtensionCommand {
  constructor() {
    super(BackgroundCommandType.SAVE_PRODUCT_PRICE_SELECTOR);
  }
}

export class SaveProductUnitSelectorBackgroundCommand extends ExtensionCommand {
  constructor() {
    super(BackgroundCommandType.SAVE_PRODUCT_UNIT_SELECTOR);
  }
}
