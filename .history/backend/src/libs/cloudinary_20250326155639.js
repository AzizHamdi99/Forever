import { v2 as cloudinary } from "cloudinary"

import dotenv from "dotenv"

dotenv.config()

cloudinary.config({
    cloud_name: process.env.COULDINARY_CLOUD_NAME,
    api_key: process.env.COULDINARY_API_KEY,

})