import { create } from "zustand";
import { PageProductDataWithSelectors } from "@src/types/pageProductDataWithSelctors";
import { PageProductData } from "@src/types/pageProductData";
import { ProductSelectors } from "@src/types/selectors";

type ProductDataSelection = {
  values: Partial<PageProductDataWithSelectors>;
  setValue: (key: keyof PageProductData, readValue: string, selectors: ProductSelectors) => void;
};

export const useProductDataSelection = create<ProductDataSelection>((set, getState) => ({
  values: {},
  setValue: (key: keyof PageProductData, readValue: string, selectors: ProductSelectors) => {
    const { values } = getState();

    values[key] = {
      readValue,
      selectors,
    };

    set({ values: { ...values } });
  },
}));
