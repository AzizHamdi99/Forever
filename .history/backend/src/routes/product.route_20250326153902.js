import express from "express"

const router = express.Router()

router.get("/getAppProducts", getAllProducts)
router.get("/:id", getProduct)
router.post("/addProdcut", addProduct)
router.post("/deleteProduct", deleteProduct)
router.("/deleteProduct", deleteProduct)


