import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    products: [{
        quantity: {
            type: Number,
            default: 1

        },
        size: {
            type: String,
            required: true

        },

        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }
    }

    ],
    total: {
        type: Number,
        required: true,
        min: 0,
    },
    process: {
        type: String,
        required: true,
        default: "Order Placed",
        enum: ["Order Placed", "Packing", "Shipped", "Out for delivery", "Delivered"]
    }









}, { timestamps: true })

export const Order = new mongoose.model('Order', orderSchema)