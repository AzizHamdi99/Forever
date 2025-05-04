import express from "express"
const dotenv = require("dotenv");
dotenv.config();

const app = express()

app.use(express.json())

const port = process.env.PORT || 5000







app.listen(port, () => {
    console.log(`server connected on port :${port}`)
})