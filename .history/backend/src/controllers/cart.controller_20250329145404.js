
import { User } from "../models/user.model.js"
import { Product } from "../models/product.model.js"


export const getCartProducts = async (req, res) => {
    try {

        if (!req.user.cartItems || req.user.cartItems.length === 0) {
            return res.json([]);
        }


        const productIds = req.user.cartItems.map((item) => item.product);


        const products = await Product.find({ _id: { $in: productIds } });


        const cartItems = req.user.cartItems.map((cartItem) => {
            const product = products.find(
                (p) => p._id.toString() === cartItem.product.toString()
            );

            if (!product) return null;

            return {
                ...product.toObject(),
                quantity: cartItem.quantity,
                size: cartItem.size
            };
        }).filter(Boolean);

        return res.json(cartItems);
    } catch (error) {
        console.error("Error in getCartProducts controller:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};


export const addProduct = async (req, res) => {
    try {
        const { productId, size } = req.body

        const user = req.user

        const existingItem = user.cartItems.find((item) => item.product.toString() === productId)
        if (existingItem) {
            existingItem.quantity += 1
            if (existingItem.size !== size) {
                user.cartItems.push({ product: productId, quantity: 1, size });
            }

        }
        else {
            user.cartItems.push({ product: productId, quantity: 1, size });
        }

        await user.save()

        return res.json(user.cartItems)



    } catch (error) {
        console.log("Error in addToCart controller", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });

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
            user.cartItem = user.cartItem.filter((item) => item.id !== productId)
        }
        await user.save()
        return res.json(user.cartItem)

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });

    }


}
export const updateQuantity = async (req, res) => {



}