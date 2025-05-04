import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import productRouter from "./routes/product.route.js"
import { connectDB } from "./libs/db.js"
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}
))

const port = process.env.PORT || 5000

app.use("/api/user", userRouter)
app.use("/api/products", productRouter)





app.listen(port, () => {
    console.log(`server connected on port :${port}`)
    connectDB()
})