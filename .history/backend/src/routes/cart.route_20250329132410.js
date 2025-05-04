import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware'

const router = express.Router()

router.get('/', protectRoute, getCartProducts)

router.post('/', protectRoute, addProduct)
router.delete('/', protectRoute, deleteProducts)
router.put('/:id', protectRoute, update)



export default router