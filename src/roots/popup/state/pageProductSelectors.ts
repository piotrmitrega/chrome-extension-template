import { create } from "zustand";
import { ProductSelectors } from "@src/types/selectors";

type PageProductSelectorsState = {
  selectors: ProductSelectors | null;
  setSelectors: (selectors?: ProductSelectors) => void;
  isLoading: boolean;
};

export const usePageProductSelectorsState = create<PageProductSelectorsState>((set) => ({
  selectors: null,
  isLoading: true,
  setSelectors: (selectors?: ProductSelectors) => set({ selectors, isLoading: false }),
}));
