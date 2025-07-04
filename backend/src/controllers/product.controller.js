import cloudinary from "../libs/cloudinary.js"
import { Product } from "../models/product.model.js"

export const getAllProdcuts = async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(200).json(products)

    } catch (error) {
        console.log("error in getAllProducts controller", error)
        return res.status(500).json({ message: "internal server errro" })

    }

}
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        return res.status(200).json(product)

    } catch (error) {
        console.log("error in getProduct controller", error.message)
        return res.status(500).json({ message: "internal server errro" })

    }

}
export const addProduct = async (req, res) => {
    try {
        const { name, description, price, images, category, subcategory, bestseller, sizes } = req.body


        let uploadedImages = []

        if (images && images.length > 0) {
            for (let image of images) {
                const cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" })

                uploadedImages.push(cloudinaryResponse.secure_url)

            }
        }

        const product = await Product.create({
            name,
            description,
            price,
            images: uploadedImages,
            category,
            subcategory,
            bestseller,
            sizes


        })
        return res.status(200).json({ product })




    } catch (error) {
        console.log("Error in createProduct controller", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });

    }

}
export const deleteProduct = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        if (product.images && product.images.length > 0) {
            for (let image of product.images) {
                const publicId = image.split("/").pop().split(".")[0]
                try {
                    await cloudinary.uploader.destroy(`products/${publicId}`)
                    console.log("deleting image from cloudinary")

                } catch (error) {
                    console.log("error deleting from cloudinary ", error)

                }
            }

        }

        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ messsage: "Product deleted successfully" })


    } catch (error) {
        console.log("error in deleteProduct controller", error.message)
        return res.status(500).json({ message: "internal server error" })
    }

}




