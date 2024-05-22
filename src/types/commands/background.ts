import { PayloadExtensionCommand } from "@src/types/commands/base";
import { BackgroundCommandType } from "@src/consts/commands";
import { PageProductDataKey } from "@src/types/pageProductData";
import { ElementSelector } from "@src/types/selectors";

export type SaveProductDataSelectorBackgroundCommandPayload = {
  key: PageProductDataKey;
  selector: ElementSelector;
};

export class SaveProductDataSelectorBackgroundCommand extends PayloadExtensionCommand<SaveProductDataSelectorBackgroundCommandPayload> {
  constructor(key: PageProductDataKey, selector: ElementSelector) {
    super(BackgroundCommandType.SAVE_PRODUCT_DATA_SELECTOR, { key, selector });
  }
}
