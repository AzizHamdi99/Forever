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
    card: [
        product: {

        }

    ]

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)