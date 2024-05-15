import { getActiveTab } from "@src/chrome/tabs";
import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { usePageProductSelectors } from "@src/roots/popup/state/pageProductSelectors";
import { getCachedProductSelector } from "@src/chrome/cachedSelectors";
import { ProductSelectors } from "@src/types/selectors";
import { validateProductSelectors } from "@src/utils/validateProductSelectors";

const fakeSelectors: ProductSelectors = {
  price: {
    xPath: "",
    cssSelector: "",
  },
  unit: {
    xPath: "",
    cssSelector: "",
  },
  title: {
    xPath: "",
    cssSelector: "",
  },
};

// TODO: Implement searching for stored selectors in db for given host
const performLookupInDb = async (hostname: string) => Promise.resolve(undefined);

export const useCheckCurrentPageProductSelectors = () => {
  const setSelectors = usePageProductSelectors((state) => state.setSelectors);

  // TODO: Listen to url changes
  useEffectAsync(async () => {
    try {
      const activeTab = await getActiveTab();

      const url = new URL(activeTab.url!);
      const { hostname } = url;

      const storedProductSelectors = await performLookupInDb(hostname);
      if (storedProductSelectors) {
        setSelectors(storedProductSelectors);
        return;
      }

      const { origin, pathname } = url;

      const cachedSelectors = await getCachedProductSelector(`${origin}${pathname}`);
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
