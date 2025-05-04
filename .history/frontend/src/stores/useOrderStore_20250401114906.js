import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useOrderStore = create((set, get) => ({
    allOrders: [],

    orders: [],


    getAllorders: async () => {
        try {
            const res = await axiosInstance.get('/order')
            set({ allOrders: res.data })
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error || "An error occured")


        }
    },
    addOrder: async (data) => {
        try {
            const res = await axiosInstance.post('/order', data)
            set((prevstate) => ({
                orders: [...prevstate.orders, res.data]
            }))

            toast.success("Order added ")
        } catch (error) {
            toast.error(error.response.data.error)

        }
    },

    getUserOrders: async () => {
        try {
            const res = await axiosInstance.get('/order/myorders')
            //console.log(res.data)
            set({ orders: res.data })
        } catch (error) {
            toast.error(error.response.data.error)


        }
    },
    updateProcess: async (data) => {
        try {

        } catch (error) {

        }

    }



}))