import { getActiveTab } from "@src/chrome/tabs";
import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { usePageProductSelectors } from "@src/roots/popup/state/pageProductSelectors";
import { getCachedProductSelectors } from "@src/chrome/cachedSelectors";
import { validateProductSelectors } from "@src/utils/validateProductSelectors";
import { getPageProductSelectorDocument } from "@src/firebase/db/pageProductSelector";

export const useCheckCurrentPageProductSelectors = () => {
  const setSelectors = usePageProductSelectors((state) => state.setSelectors);

  // TODO: Listen to url changes
  useEffectAsync(async () => {
    try {
      const activeTab = await getActiveTab();

      const url = new URL(activeTab.url!);
      const { hostname } = url;

      const storedProductSelectors = await getPageProductSelectorDocument(hostname);
      if (storedProductSelectors) {
        console.log("Found valid product selectors in db", storedProductSelectors);

        setSelectors(storedProductSelectors.selectors);
        return;
      }

      const { origin, pathname } = url;

      const cachedSelectors = await getCachedProductSelectors(`${origin}${pathname}`);
      if (!validateProductSelectors(cachedSelectors)) {
        console.warn("Cached selectors are incomplete. Will ask user to fill them in");
        setSelectors(undefined);
      } else {
        console.log("Found valid product selectors in cache");
        setSelectors(cachedSelectors);
      }
    } catch (error) {
      console.error("Failed to get product selectors", error);
      setSelectors(undefined);
    }
  }, []);
};
