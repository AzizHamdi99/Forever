import jwt from "jsonwebtoken"

import { User } from "../models/user.model"

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookie.jwt
        if (!token) {
            res.status(401).json({ message: "Unothorized no token provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            res.status(401).json({ message: "Unothorized invalid token" })

        }

        const user = await User.findById(decoded.userid).select("-password")

        if (!user) {
            res.status(404).json({ message: "user not found" })
        }
        req.user = user
        next()

    } catch (error) {
        console.log("error in auth middleware", error.message)
        res.status(500).json({ message: "internal error" })
    }


}