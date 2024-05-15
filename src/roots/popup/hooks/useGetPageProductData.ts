import { useState } from "react";
import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { usePageProductSelectors } from "@src/roots/popup/state/pageProductSelectors";
import { PageProductData } from "@src/types/pageProductData";
import { getProductDataFromPage } from "@src/chrome/getProductDataFromPage";
import { getActiveTab } from "@src/chrome/tabs";
import { validatePageProductData } from "@src/utils/validatePageProductData";

type UseGetPageProductData = {
  isLoading: boolean;
  hasFailed: boolean;
  pageProductData?: PageProductData;
};

export const useGetPageProductData = (): UseGetPageProductData => {
  const selectors = usePageProductSelectors((state) => state.selectors);

  const [isLoading, setLoading] = useState(true);
  const [hasFailed, setFailed] = useState(false);
  const [pageProductData, setPageProductData] = useState<PageProductData>();

  useEffectAsync(async () => {
    const tab = await getActiveTab();
    const stringifiedProductData = await getProductDataFromPage(tab.id!, selectors!);

    const rawProductData = JSON.parse(stringifiedProductData) as Partial<PageProductData>;

    if (!validatePageProductData(rawProductData)) {
      console.error("Could not fetch page product data", rawProductData, selectors);
      setFailed(true);
    } else {
      console.log("Fetched valid product data!", rawProductData);

      setPageProductData(rawProductData);
    }

    setLoading(false);
  }, []);

  return {
    isLoading,
    hasFailed,
    pageProductData,
  };
};
