import jwt from "jsonwebtoken"

import { User } from "../models/user.model"

export const protectRoute = async (req, res, next) => {

    const token = res.cookie.jwt

}