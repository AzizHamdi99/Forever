import express from "express"
import { login, logout, signUp, checkAuth } from "../controllers/user.controller.js"
import { protectRoute } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/signup", signUp)

router.post("/login", login)

router.post("/logout", logout)
router.get('/check', protectRoute, checkAuth)



export default router