import { ProductSelectors } from "@src/types/selectors";

export const validateProductSelectors = (
  productData?: Partial<ProductSelectors>,
): productData is ProductSelectors => {
  const { price, title } = productData || {};

  return Boolean(price && title);
};
