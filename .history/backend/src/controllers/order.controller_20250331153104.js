import { Order } from "../models/order.model"

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})

        return res.status(200).json(orders)

    } catch (error) {
        console.log("error in get all orders controllers", error)
        res.status(500).json({ message: "Internal server error" })

    }



}
export const getUserOrders = async (req, res) => {

    try {
        const user = req.user

        const orders = await Order.find({ clientId: user._id })

        res.status(200).json(orders)



    } catch (error) {
        console.log("error in get all orders controllers", error)
        res.status(500).json({ message: "Internal server error" })

    }




}
export const addOrder = async (req, res) => {



}
export const updateProcess = async (req, res) => {



}