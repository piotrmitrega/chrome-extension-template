import { create } from "zustand";
import { DbProductData } from "@src/types/db/product";

type PageProductDataState = {
  data: DbProductData | null;
  isPanelOpen: boolean;
  isLoading: boolean;
  hasFailed: boolean;

  reset: () => void;
  setData: (data?: DbProductData) => void;
  setFailed: (hasFailed: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  setPanelOpen: (isOpen: boolean) => void;
};

const initialState = {
  data: null,
  isPanelOpen: false,
  isLoading: false,
  hasFailed: false,
};

export const usePageProductData = create<PageProductDataState>((set) => ({
  ...initialState,
  reset: () => set(initialState),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setFailed: (hasFailed: boolean) => set({ hasFailed }),
  setData: (data?: DbProductData) => set({ data }),
  setPanelOpen: (isOpen: boolean) => set({ isPanelOpen: isOpen }),
}));
