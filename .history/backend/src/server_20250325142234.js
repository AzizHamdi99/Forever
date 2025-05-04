import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()

app.use(express.json())

const port = process.env.PORT || 5000



//frxxb0HeTjKH1gFm



app.listen(port, () => {
    console.log(`server connected on port :${port}`)
})