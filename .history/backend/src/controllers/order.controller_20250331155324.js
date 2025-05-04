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
    try {
        const { clientId, firstName, lastName, email, address, phone, products, total } = req.body

        if (!clientId || !firstName || !lastName || !email || !phone || !address || !products || !total) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const { city, street, state, zipCode } = address;
        if (!city || !street || !state || !zipCode) {
            return res.status(400).json({ message: "Incomplete address information" });
        }

        if (!Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ message: "Products must be a non-empty array" });
        }

        const newOrder = new Order({
            clientId,
            firstName,
            lastName,
            email,
            phone,
            address: { city, street, state, zipCode },
            products,
            total
        })
        await newOrder.save()
        return res.status(200).json(newOrder)

    } catch (error) {
        console.log("error in addOrder controller", error)
        res.status(500).json({ message: "Internal server error" })

    }





}
export const updateProcess = async (req, res) => {
    try {

        const { orderId, process } = req.body

        if (!orderId || !process) {
            return res.status(400).json({ message: "Missing required fields" })
        }


        const updatedOrder = await Order.findByIdAndUpdate(orderId, { process }, { new: true })

    } catch (error) {

    }



}