import express from 'express'

const router = express.Router()

router.get('/', protectRoute, getCartProducts)




export default router