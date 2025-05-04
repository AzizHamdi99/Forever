import { create } from "zustand"
import { assets } from "../assets/frontend_assets/assets"
import { axiosInstance } from "../libs/axios.js"


export const useAdminStore = create((set, get) => ({
    selected: "additems",

    changeSelect: (toChangeTo) => {
        set({ selected: toChangeTo })
    },
    addProduct: async (data) => {
        try {
            const res = await axiosInstance.post("/addProdcut", data)


        } catch (error) {

        }

    }

}))