import express from "express"

const router = express.Router()

router.get('/', getAllOrders)

router.get('/:id', getUserOrders)

router.post("/", addOrder)

router.put('/', updateProcces)



export default router