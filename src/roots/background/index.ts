import { authenticateFromCache } from "@src/auth/authenticateFromCache";
import { BackgroundCommandType } from "@src/consts/commands";
import { SaveProductDataSelectorBackgroundCommand } from "@src/types/commands/background";
import { getCachedProductSelectors, setCachedProductSelectors } from "@src/chrome/cachedSelectors";
import { getActiveTab } from "@src/chrome/tabs";
import { ProductSelectors } from "@src/types/selectors";

console.log("background script loaded", new Date().toString());

authenticateFromCache();

chrome.storage.sync.get((items) => console.log(items));

chrome.runtime.onMessage.addListener(async (message) => {
  console.log("Message received in background", message);

  switch (message.type) {
    case BackgroundCommandType.SAVE_PRODUCT_DATA_SELECTOR: {
      const { payload } = message as SaveProductDataSelectorBackgroundCommand;
      const { selector, key } = payload;

      const activeTab = await getActiveTab();
      const { origin, pathname } = new URL(activeTab.url!);
      const urlWithoutQuery = `${origin}${pathname}`;

      const existingSelector: Partial<ProductSelectors> =
        (await getCachedProductSelectors(urlWithoutQuery)) || {};

      existingSelector[key] = selector;

      await setCachedProductSelectors(urlWithoutQuery, existingSelector);
      break;
    }

    default: {
      console.warn("Unknown message received in background script", message);
      return;
    }
  }
});
