import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware'

const router = express.Router()

router.get('/', protectRoute, getCartProducts)

router.post('/', protectRoute, addProduct)
router.post('/delete', protectRoute, deleteProducts)
router.post('/', protectRoute, addProduct)



export default router