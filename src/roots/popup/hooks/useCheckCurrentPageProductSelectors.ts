import { getActiveTab } from "@src/chrome/tabs";
import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { usePageProductSelectors } from "@src/roots/popup/state/hostConfiguration";
import { getCachedProductSelector } from "@src/chrome/cachedSelectors";
import { ProductSelectors } from "@src/types/selectors";

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
const performLookupInDb = async (hostname: string) => Promise.resolve(fakeSelectors);

export const useCheckCurrentPageProductSelectors = () => {
  const setSelectors = usePageProductSelectors((state) => state.setSelectors);

  // TODO: Listen to url changes
  useEffectAsync(async () => {
    const activeTab = await getActiveTab();

    console.log("ACTIVE TAB", activeTab);

    const url = new URL(activeTab.url!);
    const { hostname } = url;

    const storedProductSelectors = await performLookupInDb(hostname);
    if (storedProductSelectors) {
      setSelectors(storedProductSelectors);
      return;
    }

    const { origin, pathname } = url;

    const cachedSelectors = await getCachedProductSelector(`${origin}${pathname}`);
    setSelectors(cachedSelectors);
  }, []);
};
