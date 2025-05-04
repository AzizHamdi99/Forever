import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";

export const useUserStore = create((set, get) => ({
    user: null,
    isSigningUp: false,
    isLoggingIn: false,


    login: async (data) => {
        set({ isLoggingIn: true })
        try {
            const res = await axiosInstance.post("/user/login", data)
            set({ user: res.data })
            toast.success("Logged in")

        } catch (error) {
            toast.error(error.response.data.messsage)


        }
        finally {
            set({ isLoggingIn: false })
        }
    },
    signUp: async (data) => {
        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post("/user/signup", data)
            set({ user: res.data })
            toast.success("Account created successfully")

        } catch (error) {
            toast.error(error.response.data.messsage)


        }
        finally {
            set({ isSigningUp: false })
        }
    },
    logou

}))