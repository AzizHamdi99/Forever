import { Product } from "../models/product.model"

export const getAllProdcuts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(400).json({})

    } catch (error) {

    }

}
export const getProduct = async () => {

}
export const addProduct = async () => {

}
export const deleteProduct = async () => {

}