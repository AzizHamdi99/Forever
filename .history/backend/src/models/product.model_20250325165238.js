import mongoose from "mongoose";

const productScheme = new mongoose.Schema({
    name: {
        type: String,
        require: true

    },
    description: {
        type: String,
        require: true

    },
    price: {
        type: Number,
        require: true

    },

    category: {
        type: String,
        require: true

    }, subCategory: {
        type: String,
        require: true
    },
    bestseller: {
        type: Boolean,
        require: true
    }

})