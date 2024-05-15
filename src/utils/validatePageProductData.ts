import { PageProductData } from "@src/types/pageProductData";

export const validatePageProductData = (
  productData: Partial<PageProductData>,
): productData is PageProductData => {
  const { price, title, unit } = productData;

  return Boolean(price && title && unit);
};
