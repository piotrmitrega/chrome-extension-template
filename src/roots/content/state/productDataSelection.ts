import { create } from "zustand";
import { PageProductDataSelectors } from "@src/types/pageProductDataWithSelctors";
import { PageProductData } from "@src/types/pageProductData";
import { ElementSelector } from "@src/types/selectors";

type ProductDataSelection = {
  values: Partial<PageProductDataSelectors>;
  setValue: (key: keyof PageProductData, readValue: string, selector: ElementSelector) => void;
};

export const useProductDataSelection = create<ProductDataSelection>((set, getState) => ({
  values: {},
  setValue: (key: keyof PageProductData, readValue: string, selector: ElementSelector) => {
    const { values } = getState();

    values[key] = {
      readValue,
      selector,
    };

    set({ values: { ...values } });
  },
}));
