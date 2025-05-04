import express from "express"
import { adminRoute, protectRoute } from "../middlewares/auth.middleware"
import { getAllOrders, getUserOrders, addOrder, updateProcess } from "../controllers/order.controller"
const router = express.Router()

router.get('/', adminRoute, getAllOrders)

router.get('/myorders', protectRoute, getUserOrders)

router.post("/", protectRoute, addOrder)

router.put('/', adminRoute, updateProcess)



export default router