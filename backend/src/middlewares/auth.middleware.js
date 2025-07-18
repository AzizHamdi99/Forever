import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { User } from "../models/user.model.js"
dotenv.config();

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({ message: "Unothorized no token provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return res.status(401).json({ message: "Unothorized invalid token" })

        }

        const user = await User.findById(decoded.userid).select("-password")

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        req.user = user
        next()

    } catch (error) {
        console.log("error in protected route auth middleware", error.message)
        return res.status(500).json({ message: "internal server error" })
    }


}

export const adminRoute = async (req, res, next) => {
    try {
        if (req.user && req.user.role === "admin") {
            return next()
        }
        else {
            return res.status(403).json({ message: "Access denied - Admin only" })
        }

    } catch (error) {
        console.log("error in admin route auth middleware", error.message)
        res.status(500).json({ message: "internal server error" })

    }

}