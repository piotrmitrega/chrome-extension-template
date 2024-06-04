import { create } from "zustand";
import { DbProductDocument } from "@src/types/db/product";
import { getUserProducts } from "@src/firebase/db/product";

type ProductsState = {
  products: DbProductDocument[];
  isLoading: boolean;
  hasFailed: boolean;

  reset: () => void;
  setProducts: (products: DbProductDocument[]) => void;
  setFailed: (hasFailed: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  fetchProducts: (uid: string) => Promise<void>;
  addProduct: (product: DbProductDocument) => void;
};

const initialState = {
  products: [],
  isLoading: false,
  hasFailed: false,
};

export const useProductsState = create<ProductsState>((set) => ({
  ...initialState,
  reset: () => set(initialState),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setFailed: (hasFailed: boolean) => set({ hasFailed }),
  setProducts: (products: DbProductDocument[]) => set({ products }),
  addProduct: (product: DbProductDocument) =>
    set((state) => ({ products: [...state.products, product] })),
  fetchProducts: async (uid: string) => {
    set({ isLoading: true });

    try {
      const products = await getUserProducts(uid);
      set({ products, isLoading: false });
    } catch {
      set({ hasFailed: true, isLoading: false });
    }
  },
}));
