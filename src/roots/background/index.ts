import { authenticateFromCache } from "@src/auth/authenticateFromCache";
import { BackgroundCommandType } from "@src/consts/commands";
import { CachePageProductSelectorBackgroundCommand } from "@src/types/commands/background";
import { getCachedProductSelectors, setCachedProductSelectors } from "@src/chrome/cachedSelectors";
import { getActiveTab } from "@src/chrome/tabs";
import { ProductSelectors } from "@src/types/selectors";
import { validateProductSelectors } from "@src/utils/validateProductSelectors";
import { upsertPageProductSelectorDocument } from "@src/firebase/db/pageProductSelector";
import { getFirebaseAuth } from "@src/firebase/getFirebaseAuth";
import * as url from "node:url";

console.log("background script loaded", new Date().toString());

authenticateFromCache();

chrome.runtime.onMessage.addListener(async (message) => {
  console.log("Message received in background", message);

  switch (message.type) {
    case BackgroundCommandType.CACHE_PAGE_PRODUCT_SELECTOR: {
      const { payload } = message as CachePageProductSelectorBackgroundCommand;
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

    case BackgroundCommandType.PERSIST_PAGE_PRODUCT_SELECTORS: {
      const activeTab = await getActiveTab();
      const { origin, pathname } = new URL(activeTab.url!);
      const urlWithoutQuery = `${origin}${pathname}`;

      const existingSelector = await getCachedProductSelectors(urlWithoutQuery);
      if (!validateProductSelectors(existingSelector)) {
        console.error(
          "Current cached selectors are incompleted. Aborting persist",
          existingSelector,
        );

        return;
      }

      const auth = getFirebaseAuth();
      await auth.authStateReady();

      const { currentUser } = auth;
      if (!currentUser) {
        throw new Error("Not signed in");
      }

      await upsertPageProductSelectorDocument(urlWithoutQuery, existingSelector, currentUser);

      console.log("Saved page product selectors", urlWithoutQuery, existingSelector);
      break;
    }

    default: {
      console.warn("Unknown message received in background script", message);
      return;
    }
  }
});
