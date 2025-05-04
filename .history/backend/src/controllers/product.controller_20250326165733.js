import cloudinary from "../libs/cloudinary.js"
import { Product } from "../models/product.model.js"

export const getAllProdcuts = async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(200).json({ products })

    } catch (error) {
        console.log("error in getAllProducts controller", error)
        return res.status(500).json({ message: "internal server errro" })

    }

}
export const getProduct = async (req, res) => {

}
export const addProduct = async (req, res) => {
    try {
        const { name, description, price, images, category, subcategory, bestseller, sizes } = req.body

        if (!name || !description || !price || !images || !category || !subcategory || !bestseller || !sizes) {
            return res.status(400).json({ message: "All fileds are required" })
        }
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
            sizes: sizes ? sizes.split(",") : []


        })
        return res.status(200).json({ product })




    } catch (error) {
        console.log("Error in createProduct controller", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });

    }

}
export const deleteProduct = async () => {

}



// Test upload a single image to Cloudinary
const testImageUpload = async () => {
    const image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgE...";  // Replace with your Base64 image string

    try {
        const cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "test" });
        console.log(cloudinaryResponse.secure_url);  // This should log the image URL
    } catch (error) {
        console.log("Cloudinary upload error:", error);
    }
};

testImageUpload();
