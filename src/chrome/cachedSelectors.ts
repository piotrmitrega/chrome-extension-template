import { getStorageItem, setStorageItem } from "@src/chrome/storage";
import { ProductSelectors } from "@src/types/selectors";

const getProductSelectorCacheKey = (urlWithoutQuery: string) =>
  `product-selector-${encodeURIComponent(urlWithoutQuery)}`;

export const getCachedProductSelector = async (
  urlWithoutQuery: string,
): Promise<ProductSelectors | undefined> => {
  const key = getProductSelectorCacheKey(urlWithoutQuery);
  return getStorageItem<ProductSelectors>(key);
};

export const setCachedProductSelector = async (
  urlWithoutQuery: string,
  value: ProductSelectors,
): Promise<void> => {
  const key = getProductSelectorCacheKey(urlWithoutQuery);

  await setStorageItem(key, value);
};
