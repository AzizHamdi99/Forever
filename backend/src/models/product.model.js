import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true

    },

    category: {
        type: String,
        required: true

    }, subcategory: {
        type: String,
        required: true
    },
    bestseller: {
        type: Boolean,
        required: true
    },
    images: [

        {
            type: String,
            required: true
        }

    ],
    sizes: [
        {
            type: String,
            required: true
        }

    ]

}, { timestamps: true })


export const Product = new mongoose.model("Product", productSchema)