import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useCartStore = create((set, get) => ({

    cart: [],

    subTotal: 0,
    total: 0,
    TVA: 10,

    getCartItems: async () => {
        try {
            const res = await axiosInstance.get('/cart')
            set({ cart: res.data })
            get().calculateTotals()
        } catch (error) {
            set({ cart: [] })
            toast.error(error.response.data.error || "An error")

        }
    }






}))