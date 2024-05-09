import { create } from "zustand";
import { User } from "@src/types/user";
import { createStore } from "zustand/vanilla";

type UserStoreApi = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStoreApi>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
}));
