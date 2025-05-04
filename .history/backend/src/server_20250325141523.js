import express from "express"
import dotenv from "dotenv"
dotenv.config({ path })
const app = express()

app.use(express.json())

const port = process.env.PORT || 5000







app.listen(port, () => {
    console.log(`server connected on port :${port}`)
})