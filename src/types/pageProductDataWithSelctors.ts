import { PageProductData } from "@src/types/pageProductData";
import { ProductSelectors } from "@src/types/selectors";

export type PageProductDataFieldWithSelectors = {
  readValue: string;
  selectors: ProductSelectors;
};

export type PageProductDataWithSelectors = Record<
  keyof PageProductData,
  PageProductDataFieldWithSelectors
>;
