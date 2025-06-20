import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/frontend_assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { assetsAdmin } from '../assets/admin_assets/assets.js'
import { useLocation } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore.js'
import { ShieldUser } from "lucide-react"
import { Loader } from "lucide-react"
import { useCartStore } from '../stores/useCartStore.js'
import { useAdminStore } from '../stores/useAdminStore.js'

function Navbar() {
  
    const navigate = useNavigate()
    const [showSearch, setShowSearch] = useState(false)
    const location = useLocation();
    const [showLogout, setShowLogout] = useState(false)
    const logoutRef = useRef(null);

    const { cart } = useCartStore()
    const isAdminPage = location.pathname === '/admin';

   
    const { logout, user, isChekingAuth, chekingAuth } = useUserStore()
    console.log(user)
    const loginout = () => {
        logout()
        setShowLogout(false)
    }

    const { searchTerm, setSearchTerm } = useAdminStore();
    const search=()=>{
        setShowSearch(false)
        setSearchTerm("")

    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (logoutRef.current && !logoutRef.current.contains(event.target)) {
                setShowLogout(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className='flex justify-between items-center px-32 py-4 '>
                <img className='w-[161px] h-[47px] cursor-pointer ' onClick={() => navigate('/')} src={!isAdminPage ? assets.logo : assetsAdmin.logo} alt="" />
                <div className='flex gap-7 text-nav text-[16px] font-[500] cursor-pointer'>
                    {["", "collection", "about", "contact"].map((path, index) => (
                        <p key={index} 
                           onClick={() => navigate(`/${path}`)}
                           className={`relative ${location.pathname === `/${path}` ? 'text-black font-bold' : ''}`}>
                            {path === "" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1)}
                            {location.pathname === `/${path}` && <span className='absolute left-0 bottom-[-4px] w-full h-[2px] bg-black'></span>}
                        </p>
                    ))}
                </div>
                {!user ?
                    <div className='text-white cursor-pointer bg-black py-2 px-4 rounded-full' onClick={() => navigate("/login")}>
                        <p>Se connecter</p>
                    </div>
                    :
                    <div className='flex gap-4'>
                        {user.role === "admin" && <ShieldUser className=' cursor-pointer' onClick={() => navigate('/admin')} />}
                        <img onClick={() => setShowSearch(true)} className=' w-[24px] h-[24px] cursor-pointer' src={assets.search_icon} alt="" />
                        <img onClick={() => setShowLogout(!showLogout)} className='w-[24px] h-[24px] cursor-pointer' src={assets.profile_icon} alt="" />
                        <div onClick={() => navigate("/cart")} className=' cursor-pointer'>
                            {cart.length > 0 &&
                                <p className='bg-black rounded-full w-[15px] h-[15px] text-[13px] text-center text-white right-32 top-10 absolute flex items-center justify-center'>{cart.length}</p>
                            }
                            <img className='w-[24px] h-[24px] cursor-pointer' src={assets.cart_icon} alt="" />
                        </div>
                    </div>}
            </div>
            {showSearch ?
                <div className='mx-32 bg-[#f9fbfc] flex items-center justify-center py-8 gap-3'>
                    <div className='flex border-[1px] items-center justify-between rounded-3xl bg-[#f9fbfc] border-gray-400 px-4 py-2 w-[600px] '>
                        <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className='outline-none w-full text-gray-400 bg-[#f9fbfc] ' placeholder='Search' type="text" name="" id="" />
                        <img className='w-[20px] h-[20px] cursor-pointer' src={assets.search_icon} alt="" />
                    </div>
                    <img onClick={search} src={assets.cross_icon} alt="" className=' w-[15px] cursor-pointer h-[15px]' />
                </div> : <></>}
            <div className='h-[1px] bg-[#ADADAD] mx-32'></div>
            {showLogout &&
               <div 
               ref={logoutRef} 
               className='absolute right-40 top-16 bg-white shadow-lg rounded-lg w-[180px] py-3 px-4 text-gray-700'
             >
                 <p 
                   className='py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer transition duration-200'
                   onClick={() => navigate("/orders")}
                 >
                   Orders
                 </p>
                 <hr className="border-gray-200 my-2" />
                 <p 
                   className='py-2 px-3 hover:bg-red-100 text-red-500 rounded-md cursor-pointer transition duration-200'
                   onClick={loginout}
                 >
                   Logout
                 </p>
             </div>
             
            }
        </div>
    )
}

export default Navbar
