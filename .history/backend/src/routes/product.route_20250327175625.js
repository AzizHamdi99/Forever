import express from "express"
import { getAllProdcuts, deleteProduct, getProduct, addProduct } from "../controllers/product.controller.js"
const router = express.Router()

router.get("/getAllProducts", getAllProdcuts)
router.get("/:id", getProduct)
router.post("/addProdcut", addProduct)
router.post("/delete/:id", deleteProduct)
export default router



