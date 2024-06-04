import { useEffectAsync } from "@src/common/hooks/useEffectAsync";
import { usePageProductSelectorsState } from "@src/roots/popup/state/pageProductSelectors";
import { PageProductData } from "@src/types/pageProductData";
import { getProductDataFromPage } from "@src/chrome/getProductDataFromPage";
import { getActiveTab } from "@src/chrome/tabs";
import { validatePageProductData } from "@src/utils/validatePageProductData";
import { convertPageProductToDocumentData } from "@src/utils/convertPageProductToDocumentData";
import { usePageProductDataState } from "@src/roots/popup/state/pageProductData";

export const useGetPageProductData = () => {
  const selectors = usePageProductSelectorsState((state) => state.selectors);
  const setData = usePageProductDataState((state) => state.setData);

  const setLoading = usePageProductDataState((state) => state.setLoading);
  const setFailed = usePageProductDataState((state) => state.setFailed);

  useEffectAsync(async () => {
    const tab = await getActiveTab();

    try {
      const stringifiedProductData = await getProductDataFromPage(tab.id!, selectors!);
      const rawProductData = JSON.parse(stringifiedProductData) as Partial<PageProductData>;

      if (!validatePageProductData(rawProductData)) {
        console.error("Could not fetch page product data", rawProductData, selectors);
        setFailed(true);
        return;
      }

      console.log("Fetched valid raw product data!", rawProductData);
      const documentData = convertPageProductToDocumentData(rawProductData, tab.url!);
      console.log("Document data", documentData);
      setData(documentData);
    } catch (error) {
      console.log("Failed to get product data", error);
      setFailed(true);
    }

    setLoading(false);
  }, []);
};
