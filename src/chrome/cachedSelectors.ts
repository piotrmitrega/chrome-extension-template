import { getStorageItem, setStorageItem } from "@src/chrome/storage";
import { ProductSelectors } from "@src/types/selectors";

const getProductSelectorCacheKey = (urlWithoutQuery: string) =>
  `product-selector-${encodeURIComponent(urlWithoutQuery)}`;

export const getCachedProductSelectors = async (
  urlWithoutQuery: string,
): Promise<Partial<ProductSelectors> | undefined> => {
  const key = getProductSelectorCacheKey(urlWithoutQuery);
  return getStorageItem<ProductSelectors>(key);
};

export const setCachedProductSelectors = async (
  urlWithoutQuery: string,
  value: Partial<ProductSelectors>,
): Promise<void> => {
  const key = getProductSelectorCacheKey(urlWithoutQuery);

  await setStorageItem(key, value);
};
