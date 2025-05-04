import { Order } from "../models/order.model.js"

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})

        return res.status(200).json(orders)

    } catch (error) {
        console.log("error in get all orders controller", error)
        res.status(500).json({ message: "Internal server error" })

    }



}
export const getUserOrders = async (req, res) => {

    try {
        const user = req.user
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const orders = await Order.find({ clientId: user._id })

        res.status(200).json(orders)



    } catch (error) {
        console.log("error in getUserOrders controller", error)
        res.status(500).json({ message: "Internal server error" })

    }




}
export const addOrder = async (req, res) => {
    const { clientId, firstName, lastName, email, address, phone, products, total }



}
export const updateProcess = async (req, res) => {



}