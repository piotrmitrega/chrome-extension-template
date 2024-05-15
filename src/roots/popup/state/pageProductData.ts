import { create } from "zustand";
import { PageProductData } from "@src/types/pageProductData";

type PageProductDataState = {
  data: PageProductData | null;
  isPanelOpen: boolean;
  setData: (data?: PageProductData) => void;
  setPanelOpen: (isOpen: boolean) => void;
};

export const usePageProductData = create<PageProductDataState>((set) => ({
  data: null,
  isPanelOpen: false,
  setData: (data?: PageProductData) => set({ data }),
  setPanelOpen: (isOpen: boolean) => set({ isPanelOpen: isOpen }),
}));
