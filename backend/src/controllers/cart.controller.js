
import { User } from "../models/user.model.js"
import { Product } from "../models/product.model.js"
import mongoose from "mongoose";


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
        console.log(productid)
        if (!mongoose.Types.ObjectId.isValid(productid)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }
        const productObjectId = new mongoose.Types.ObjectId(productid);



        const existingItem = user.cartItems.find(
            (item) => item.product.toString() === productObjectId.toString() && item.size === size
        );

        if (existingItem) {

            existingItem.quantity += 1;
        } else {

            user.cartItems.push({ product: productObjectId, quantity: 1, size });
        }


        await user.save();

        return res.json(user.cartItems);
    } catch (error) {
        console.log("Error in addProduct controller:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deleteProducts = async (req, res) => {
    try {
        const { productid, size } = req.body;
        const user = req.user;


        if (!productid) {
            user.cartItems = [];
            await user.save();
            return res.json({ message: "Cart cleared", cartItems: user.cartItems });
        }


        user.cartItems = user.cartItems.filter((item) => !(item.product.toString() === productid.toString() && item.size === size));

        await user.save();
        return res.json({ message: "Item removed", cartItems: user.cartItems });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const updateQuantity = async (req, res) => {
    try {
        const { productid, size } = req.body;
        const user = req.user;


        const existingItem = user.cartItems.find(
            (item) => item.product.toString() === productid && item.size === size
        );

        if (!existingItem) {
            return res.status(404).json({ message: "Product not found in cart" });
        }


        if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        } else {

            user.cartItems = user.cartItems.filter(
                (item) => !(item.product.toString() === productid && item.size === size)
            );
        }

        await user.save();

        return res.json(user.cartItems);
    } catch (error) {
        console.error("Error in updateQuantity controller:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};
