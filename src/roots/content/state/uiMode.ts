import { create } from "zustand";

type UiModeState = {
  isSelectionMode: boolean;
  setSelectionMode: (isSelectionMode: boolean) => void;
};

export const useUiMode = create<UiModeState>((set) => ({
  isSelectionMode: false,
  setSelectionMode: (isSelectionMode: boolean) => set({ isSelectionMode }),
}));
