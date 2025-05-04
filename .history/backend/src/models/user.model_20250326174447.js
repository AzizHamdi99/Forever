import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    cartItems: [{


        quantity: {
            type: Number,
            default: 1

        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    }

    ],
    role: {
        type: String,
        enum: ["customer", "admin"],
        default:

    }



}, { timestamps: true })

export const User = mongoose.model("User", userSchema)