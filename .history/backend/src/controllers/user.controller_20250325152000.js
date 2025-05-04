import { User } from "../models/user.model.js"
import { genrateToken } from "../libs/utils.js"

import bcrypt from "bcryptjs"

export const login = async (req, res) => {

    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All fileds are required" })
        }
        const user = User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalide credentials" })
        }

        const matchPassword = await bcrypt.compare(password, user.password)

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalide credentials" })

        }
        genrateToken(user._id, res)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } catch (error) {
        console.log("error in login controller", error.message)
        res.status(500).json({ message: "internal error" })

    }

}
export const signUp = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fileds are required" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 charaters" })

        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "invalide information" })
        }
        const salt = bcrypt.genSalt(10)

        const hachedPassword = bcrypt.hash(password, salt)
        const newUser = new User({
            name,
            email,
            password: hachedPassword
        })
        if (newUser) {
            genrateToken(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            })
        }
        else {
            res.status(400).json({ message: "invalide user data" })
        }

    } catch (error) {
        console.log("error in signUp controller", error.message)

        res.status(500).json({ message: "internal server error" })

    }


}
export const logout = async (req, res) => {

    try {
        res.cookie("jwt", "", {
            maxAge: 0
        })
        res.status(201).json({ message: "logout succeessfully" })

    } catch (error) {
        console.log("errror in logout controller ", error.message)
        res.status(500).json({ message: "internal error" })

    }

}

