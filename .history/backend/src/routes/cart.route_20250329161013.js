import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware.js'
import { getCartProducts, addProduct, deleteProducts, updateQuantity } from '../controllers/cart.controller.js'
const router = express.Router()

router.get('/', protectRoute, getCartProducts)

router.post('/', protectRoute, addProduct)
router.delete('/', protectRoute, deleteProducts)
router.post('/decrease', protectRoute, updateQuantity)



export default router