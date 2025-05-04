import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
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
    removeFromCart: async ({ productid, size }) => {
        try {
            await axios.delete(`/cart`, { productid, size });
            set((prevState) => ({ cart: prevState.cart.filter((item) => item._id !== productid && item.size != size) }));
            get().calculateTotals();

        } catch (error) {
            toast.error(error.response.data.error || "An error occured")

        }

    },

    addToCart: async ({ productid, size }) => {
        try {
            await axiosInstance.post("/cart", { productid, size });
            toast.success("Product added to cart");
            console.log("added")

            set((prevState) => {
                const existingItem = prevState.cart.find((item) => item._id === productid && item.size === size);
                const newCart = existingItem
                    ? prevState.cart.map((item) =>
                        item._id === productid ? { ...item, quantity: item.quantity + 1 } : item
                    )
                    : [...prevState.cart, { _id: productid, size, quantity: 1 }];
                return { cart: newCart };
            });
            get().calculateTotals();
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        }
    },




    calculateTotals: () => {
        const { cart, TVA } = get();
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);



        set({ subtotal, total: subtotal + TVA });
    },

    decreaseQuantity: async ({ productId, size }) => {
        try {
            // Send request to backend to decrease quantity
            await axiosInstance.post("/cart/decrease", { productId, size });

            set((prevState) => {
                const existingItem = prevState.cart.find(
                    (item) => item._id === productId && item.size === size
                );

                if (!existingItem) return prevState; // If item not found, return current state

                // If quantity is 1, remove the item completely
                if (existingItem.quantity === 1) {
                    return {
                        cart: prevState.cart.filter(
                            (item) => !(item._id === productId && item.size === size)
                        ),
                    };
                }

                // Otherwise, decrease quantity by 1
                return {
                    cart: prevState.cart.map((item) =>
                        item._id === productId && item.size === size
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                };
            });

            get().calculateTotals();
            toast.success("Quantity decreased");
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
        }
    },







}))