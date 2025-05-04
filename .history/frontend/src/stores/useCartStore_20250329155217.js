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
    removeFromCart: async (productid) => {
        try {
            await axios.delete(`/cart`, { data: { productid, size } });
            set((prevState) => ({ cart: prevState.cart.filter((item) => item._id !== productid && item.size != size) }));
            get().calculateTotals();

        } catch (error) {
            toast.error(error.response.data.error || "An error occured")

        }

    },

    addToCart: async (productid, size) => {
        try {
            await axios.post("/cart", { productid, size });
            toast.success("Product added to cart");

            set((prevState) => {
                const existingItem = prevState.cart.find((item) => item._id === productid &&);
                const newCart = existingItem
                    ? prevState.cart.map((item) =>
                        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                    : [...prevState.cart, { ...product, quantity: 1 }];
                return { cart: newCart };
            });
            get().calculateTotals();
        } catch (error) {
            toast.error(error.response.data.message || "An error occurred");
        }
    },




    calculateTotals: () => {
        const { cart, TVA } = get();
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);



        set({ subtotal, total: subtotal + TVA });
    },






}))