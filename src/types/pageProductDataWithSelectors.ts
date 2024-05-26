import { PageProductData } from "@src/types/pageProductData";
import { ElementSelector } from "@src/types/selectors";

export type PageProductDataFieldSelectors = {
  readValue: string;
  selector: ElementSelector;
};

export type PageProductDataSelectors = Record<keyof PageProductData, PageProductDataFieldSelectors>;
