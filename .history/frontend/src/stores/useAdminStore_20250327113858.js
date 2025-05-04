import { create } from "zustand"



export const useAdminStore = create((set, get) => ({
    selected: "additems"
}))