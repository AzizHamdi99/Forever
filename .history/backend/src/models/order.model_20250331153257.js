import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
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
            ref: "Product"
        }
    }

    ],
    total: {
        type: Number,
        required: true
    },
    proccess: {
        type: String,
        required: true,
        default: "Order Placed"
    }









}, { timestamps: true })

export const Order = new mongoose.model('Order', orderSchema)