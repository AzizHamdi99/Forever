
import { User } from "../models/user.model.js"
import { Product } from "../models/product.model.js"


export const getCartProducts = async (req, res) => {
    try {
        // Ensure cartItems exists and is not empty
        if (!req.user.cartItems || req.user.cartItems.length === 0) {
            return res.json([]); // Return an empty array if no items are in the cart
        }

        // Extract product IDs from cartItems
        const productIds = req.user.cartItems.map((item) => item.product);

        // Fetch product details from the database
        const products = await Product.find({ _id: { $in: productIds } });

        // Map products with their quantity & size
        const cartItems = products.map((product) => {
            const cartItem = req.user.cartItems.find(
                (item) => item.product.toString() === product._id.toString()
            );

            return {
                ...product.toObject(), // Convert MongoDB document to JSON
                quantity: cartItem.quantity,
                size: cartItem.size
            };
        });

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