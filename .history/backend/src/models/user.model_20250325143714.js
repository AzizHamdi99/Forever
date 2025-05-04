import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: STRING,
        require: true,
    },


})