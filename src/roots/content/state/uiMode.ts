import { create } from "zustand";
import { PageProductData } from "@src/types/pageProductData";

type UiModeState = {
  isSelectionMode: boolean;
  setSelectionMode: (isSelectionMode: boolean) => void;
  activeSelector: keyof PageProductData | null;
  setActiveSelector: (activeSelector: keyof PageProductData | null) => void;
};

export const useUiMode = create<UiModeState>((set) => ({
  isSelectionMode: false,
  activeSelector: null,
  setSelectionMode: (isSelectionMode: boolean) => set({ isSelectionMode }),
  setActiveSelector: (activeSelector: keyof PageProductData | null) => set({ activeSelector }),
}));
