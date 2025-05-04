
import { User } from "../models/user.model"
import { Product } from "../models/product.model"


export const getCartProducts = async (req, res) => {
    try {
        const products = await Product.find({ _id: { $in: req.user.cartItems } })

        const cartItems = products.map((product) => {
            const item = req.user.cartItems.find((cartItem) => cartItem.id === product.id)
            return { ...product.toJSON(), quantity: item.quantity, size: item.size }
        })
        res.json(cartItems)


    } catch (error) {
        console.log("Error in getCartProducts controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });

    }


}
export const addProduct = async (req, res) => {
    try {
        const { productId } = req.body

        const user = req.user

        const existingItem = user.cartItem.find((item) => item.id === productId)
        if (existingItem) {
            existingItem.quantity += 1

        }
        else {
            user.cartItem.push(productId)
        }

        await user.save()

        res.json(user.cartItem)



    } catch (error) {
        console.log("Error in addToCart controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });

    }





}
export const deleteProducts = async (req, res) => {
    try {
        const { productId } = req.body

        const user = req.user
        if (!productId) {
            user.cartItem = []

        }
        else {
            user.cartItem = user
        }

    } catch (error) {

    }


}
export const updateQuantity = async (req, res) => {


}