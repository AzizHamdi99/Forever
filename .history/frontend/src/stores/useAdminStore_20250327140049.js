import { create } from "zustand"
import { assets } from "../assets/frontend_assets/assets"



export const useAdminStore = create((set, get) => ({
    selected: "additems",

    changeSelect: (toChangeTo) => {
        set({ selected: toChangeTo })
    },
    addProduct: async (data) => {
        try {
            const res =

        } catch (error) {

        }

    }

}))