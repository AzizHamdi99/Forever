import React, { useState } from 'react'
import{assets} from'../assets/frontend_assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { assetsAdmin } from '../assets/admin_assets/assets.js'
import { useLocation } from 'react-router-dom'

function Navbar() {

    const[login,setLogin]=useState(false)
    const [selected,setSelected]=useState('')
    const navigate=useNavigate()
    const[showSearch,setShowSearch]=useState(false)
    const location = useLocation();

    const [showLogout,setShowLogout]=useState(false)

  
    const isAdminPage = location.pathname === '/admin';

    const routing=(dir)=>{
      
      navigate(`/${dir}`)
      setSelected(dir)
      
      
      
    }

  return (
    <div >
      <div className='flex justify-between items-center px-32 py-4 '>
        <img className='w-[161px] h-[47px] cursor-pointer ' onClick={()=>navigate('/')} src={!isAdminPage? assets.logo:assetsAdmin.logo} alt="" />
        <div className='flex gap-7 text-nav text-[16px] font-[500] cursor-pointer'>
            <p  onClick={()=>routing("")}>Home</p>
            <p  onClick={()=>routing("collection")}>Collection</p>
            <p  onClick={()=>routing("about")}>About</p>
            <p  onClick={()=>routing("contact")}>Contact</p>
        </div>
       {login?
       <div className='text-white cursor-pointer bg-black py-2 px-4 rounded-full' onClick={()=>navigate("/login")}>
        <p>Se connecter</p>



       </div> 
        : 
        <div className='flex gap-4'>
            <img onClick={()=>setShowSearch(true)} className=' w-[24px] h-[24px] cursor-pointer' src={assets.search_icon} alt="" />
            <img className='w-[24px] h-[24px] cursor-pointer' src={assets.profile_icon} alt="" />
            <img  className='w-[24px] h-[24px] cursor-pointer' src={assets.cart_icon} alt="" />
        
        </div>  }
        </div>
        {showSearch?
        <div className='mx-32 bg-[#f9fbfc] flex items-center justify-center py-8 gap-3'>
          <div className='flex border-[1px] items-center justify-between rounded-3xl bg-[#f9fbfc]  border-gray-400 px-4 py-2 w-[600px] '>
            <input className='outline-none w-full text-gray-400 bg-[#f9fbfc] ' placeholder='Search' type="text" name="" id="" />
            <img className='w-[20px] h-[20px] cursor-pointer' src={assets.search_icon} alt="" />
          </div>
          <img onClick={()=>setShowSearch(false)}  src={assets.cross_icon} alt="" className=' w-[15px] cursor-pointer h-[15px]' />
        </div>:<></>}
        <div className='h-[1px] bg-[#ADADAD] mx-32'>

        </div>
        <div className='text-[18px] text-[#5B5B5B] absolute right-40 bg-[#F8F8F8] w-[150px] h-[100px] text-left'>
          <p className='mt-10'>Orders</p>
          <p>logout</p>
        </div>
       


      
    </div>
  )
}

export default Navbar
