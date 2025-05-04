import { create } from "zustand";

export const useCartStore = create((set, get) => ({

    cart: [],

    subTotal: 0,
    total: 0,
    TVA: 10






}))