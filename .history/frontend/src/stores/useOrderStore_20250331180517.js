import { create } from "zustand";
import { axiosInstance } from "../libs/axios";

export const useOrderStore = create((set, get) => ({
    allOrders: [],

    orders: [],


    getAllorders: async () => {
        try {
            const res = await axiosInstance.get('/order')
        } catch (error) {

        }
    }


}))