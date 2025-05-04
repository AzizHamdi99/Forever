import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },



})