import { Product } from "../models/product.model"

export const getAllProdcuts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(400).json({ products })

    } catch (error) {
        console.log("error in getAllProducts controller", error)
        res.status(500).json({ message: "internal server errro" })

    }

}
export const getProduct = async (req, res) => {

}
export const addProduct = async (req, res) => {
    try {
        const { name, description, }
    } catch (error) {

    }

}
export const deleteProduct = async () => {

}