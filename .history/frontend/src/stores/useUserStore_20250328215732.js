import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";
import { persist } from "zustand/middleware"

export const useUserStore = create(persist((set, get) => ({
    user: null,
    isSigningUp: false,
    isLoggingIn: false,
    isChekingAuth: true,
    chekingAuth: async () => {
        try {
            const res = await axiosInstance.get("/user/check")
            set({ user: res.data })
        } catch (error) {
            console.log("error in check auth ", error)
            set({ user: null })

        }
        finally {
            set({ isChekingAuth: false })
        }

    },


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
    logout: async () => {
        try {
            await axiosInstance.post("/user/logout")
            set({ user: null })
            toast.success("Logout successfully")

        } catch (error) {
            toast.error(error.response.message.data)

        }

    }

}), {
    name: "user-storage", // key for the local storage
    getStorage: () => localStorage, // storage method (localStorage or sessionStorage)
}))