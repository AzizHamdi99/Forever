import { create } from "zustand";
import { axiosInstance } from "../libs/axios";

export const useCartStore = create((set, get) => ({

    cart: [],

    subTotal: 0,
    total: 0,
    TVA: 10,

    getCartItems: async () => {
        try {
            const res = await axiosInstance.get('/cart')
            set({ cart: res.data })
            get().cal
        } catch (error) {

        }
    }






}))