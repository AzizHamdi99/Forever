import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware'
import { getCartProducts, addProduct, deleteProducts, updateQuantity } from '../controllers/cart.controller'
const router = express.Router()

router.get('/', protectRoute, getCartProducts)

router.post('/', protectRoute, addProduct)
router.delete('/', protectRoute, deleteProducts)
router.put('/:id', protectRoute, updateQuantity)



export default router