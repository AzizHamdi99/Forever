import cloudinary from "../libs/cloudinary"
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
        const { name, description, price, images, category, subcategory, bestseller, sizes } = req.body

        if (!name || !description || !price || !images || !category || !subcategory || !bestseller || !sizes) {
            res.status(400).json({ message: "All fileds are required" })
        }
        let uploadedImages = []

        if (images && images.length > 0) {
            for (let image in images) {
                const cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" })

            }
        }




    } catch (error) {

    }

}
export const deleteProduct = async () => {

}