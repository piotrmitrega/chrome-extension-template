import { ExtensionCommand, PayloadExtensionCommand } from "@src/types/commands/base";
import { BackgroundCommandType } from "@src/consts/commands";
import { PageProductDataKey } from "@src/types/pageProductData";
import { ElementSelector } from "@src/types/selectors";

export type CacheProductDataSelectorBackgroundCommandPayload = {
  key: PageProductDataKey;
  selector: ElementSelector;
};

export class CachePageProductSelectorBackgroundCommand extends PayloadExtensionCommand<CacheProductDataSelectorBackgroundCommandPayload> {
  constructor(key: PageProductDataKey, selector: ElementSelector) {
    super(BackgroundCommandType.CACHE_PAGE_PRODUCT_SELECTOR, { key, selector });
  }
}

export class PersistProductDataSelectorBackgroundCommand extends ExtensionCommand {
  constructor() {
    super(BackgroundCommandType.PERSIST_PAGE_PRODUCT_SELECTORS);
  }
}
