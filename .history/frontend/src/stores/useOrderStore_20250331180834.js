import { create } from "zustand";
import { axiosInstance } from "../libs/axios";

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
            const res = await axiosInstance.post('/order')
        } catch (error) {

        }
    }


}))