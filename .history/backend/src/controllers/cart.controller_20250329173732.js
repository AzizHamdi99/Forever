
import { User } from "../models/user.model.js"
import { Product } from "../models/product.model.js"
const mongoose = require('mongoose');


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
        const { productid, size } = req.body;
        const user = req.user;
        const productObjectId = mongoose.Types.ObjectId(productid);


        // Check if the product with the same size already exists in the cart
        const existingItem = user.cartItems.find(
            (item) => item.product.toString() === productid && item.size === size
        );

        if (existingItem) {
            // If it exists, increase quantity
            existingItem.quantity += 1;
        } else {
            // If not, add a new item to the cart
            user.cartItems.push({ product: productid, quantity: 1, size });
        }

        // Save the updated user cart
        await user.save();

        return res.json(user.cartItems);
    } catch (error) {
        console.log("Error in addProduct controller:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deleteProducts = async (req, res) => {
    try {
        const { productId, size } = req.body

        const user = req.user
        if (!productId) {
            user.cartItem = []

        }
        else {
            user.cartItems = user.cartItems.filter((item) => item.id !== productId && item.size !== size)
        }
        await user.save()
        return res.json(user.cartItems)

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });

    }


}
export const updateQuantity = async (req, res) => {
    try {
        const { productId, size } = req.body;
        const user = req.user;

        // Find the item with the matching productId and size
        const existingItem = user.cartItems.find(
            (item) => item.product.toString() === productId && item.size === size
        );

        if (!existingItem) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        // If quantity is greater than 1, decrease it
        if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        } else {
            // If quantity is 1, remove the item from the cart
            user.cartItems = user.cartItems.filter(
                (item) => !(item.product.toString() === productId && item.size === size)
            );
        }

        await user.save(); // Save the updated cart

        return res.json(user.cartItems);
    } catch (error) {
        console.error("Error in updateQuantity controller:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};
