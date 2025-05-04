import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import { connectDB } from "./libs/db.js"
dotenv.config()
const app = express()

app.use(express.json())

const port = process.env.PORT || 5000

app.use("/api/user", userRouter)





app.listen(port, () => {
    console.log(`server connected on port :${port}`)
    connectDB()
})