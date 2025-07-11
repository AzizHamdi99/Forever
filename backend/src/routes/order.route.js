import express from "express"
import { adminRoute, protectRoute } from "../middlewares/auth.middleware.js"
import { getAllOrders, getUserOrders, addOrder, updateProcess } from "../controllers/order.controller.js"
const router = express.Router()

router.get('/', protectRoute, adminRoute, getAllOrders)

router.get('/myorders', protectRoute, getUserOrders)

router.post("/", protectRoute, addOrder)

router.post('/updateProcess', protectRoute, adminRoute, updateProcess)



export default router