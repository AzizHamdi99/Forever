import { create } from "zustand"
import { assets, products } from "../assets/frontend_assets/assets"
import { axiosInstance } from "../libs/axios.js"

import toast from "react-hot-toast";
export const useAdminStore = create((set, get) => ({
    selected: "additems",
    products: [],
    singleProduct: null,

    changeSelect: (toChangeTo) => {
        set({ selected: toChangeTo })
    },
    addProduct: async (data) => {
        try {
            const res = await axiosInstance.post("/products/addProdcut", data)
            set((prevState) => ({
                products: [...prevState.products, res.data]
            }))
            toast.success("Product added")


        } catch (error) {
            toast.error(error.response.data.error)

        }

    },
    getProducts: async () => {
        try {
            const res = await axiosInstance.get("/products/getAllProducts")
            set({ products: res.data })

        } catch (error) {
            console.log("error fetching data")

        }
    },
    deleteProduct: async (id) => {
        try {
            const res = await axiosInstance.post(`/products/delete/${id}`)
            set((prevsate) => ({
                products: prevsate.products.filter((product) => product._id !== id)
            }))
            console.log(res)
            toast.success("Product deleted")
        } catch (error) {
            toast.error(error.response.data.error)

        }
    },
    getSingleProduct: async (id) => {
        try {
            const res = await axiosInstance.get(`/products/${id}`)
            set({ singleProduct: res.data })

        } catch (error) {
            console.log("error geting product")

        }

    }

}))