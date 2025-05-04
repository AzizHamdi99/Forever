
import { User } from "../models/user.model"
import { Product } from "../models/product.model"


export const getCartProducts = async (req, res) => {
    try {
        const products = await Product.find({ _id: { $in: req.user.cartItems } })

        const cartItems = products.map((product) => {
            const item = req.user.cartItems.find((cartItem) => cartItem.id === product.)
        })


    } catch (error) {

    }


}
export const addProduct = async (req, res) => {


}
export const deleteProducts = async (req, res) => {


}
export const updateQuantity = async (req, res) => {


}