import express from "express"
import dotenv from "dotenv"
dotenv.config({ path: "./.env" })
const app = express()

app.use(express.json())

const port = process.env.PORT







app.listen(port, () => {
    console.log(`server connected on port :${port}`)
})