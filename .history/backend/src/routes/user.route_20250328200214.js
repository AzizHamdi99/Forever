import express from "express"
import { login, logout, signUp } from "../controllers/user.controller.js"

const router = express.Router()

router.post("/signup", signUp)

router.post("/login", login)

router.post("/logout", logout)
router.get('/check', protectRoute, checkAuth)



export default router