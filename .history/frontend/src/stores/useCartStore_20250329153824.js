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
            toast.error(error.response.data.error || "An error occured")

        }
    },
    removeFromCart: async (productId) => {
        await axios.delete(`/cart`, { data: { productId } });
        set((prevState) => ({ cart: prevState.cart.filter((item) => item._id !== productId) }));
        get().calculateTotals();
    },
    addTo



    calculateTotals: () => {
        const { cart, TVA } = get();
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);



        set({ subtotal, total: subtotal + TVA });
    },






}))