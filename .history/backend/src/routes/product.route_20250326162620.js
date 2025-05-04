import express from "express"
import { getAllProducts }
const router = express.Router()

router.get("/getAppProducts", getAllProducts)
router.get("/:id", getProduct)
router.post("/addProdcut", addProduct)
router.post("/:id", deleteProduct)
export default router



