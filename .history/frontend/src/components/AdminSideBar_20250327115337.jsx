import React ,{useState}from 'react'
import { assetsAdmin } from '../assets/admin_assets/assets'

import { useAdminStore } from '../stores/useAdminStore'

function AdminSideBar() {
  const{selected,changeSelect}=useAdminStore()
   
  return (
    <div  className='ml-32 pt-[20px] border-r-[1px] border-gray-400 w-52 min-h-screen flex flex-col gap-5'>
      <div onClick={()=>changeSelect("additems")} className= {selected!=="additems"? 'flex gap-3 border-[1px] border-gray-400 p-2 px-4 border-r-0 cursor-pointer':'flex gap-3 border-[1px] border-gray-400 p-2 px-4 border-r-0 cursor-pointer bg-pink-500'}>
        <img className='w-6' src={assetsAdmin.add_icon} alt="" />
<p>Add Items</p>
      </div>
      <div onClick={()=>changeSelect("listitems")} className= {selected!=="listitems"? 'flex gap-3 border-[1px] border-gray-400 p-2 px-4 border-r-0 cursor-pointer':'flex gap-3 border-[1px] border-gray-400 p-2 px-4 border-r-0 cursor-pointer bg-pink-500'}>
        <img src={assetsAdmin.order_icon} className='w-6' alt="" />
<p>List Items</p>
      </div>
      <div onClick={()=>changeSelect("orders")} className= {selected!=="orders"? 'flex gap-3 border-[1px] border-gray-400 p-2 px-4 border-r-0 cursor-pointer':'flex gap-3 border-[1px] border-gray-400 p-2 px-4 border-r-0 cursor-pointer bg-pink-500'}>
        <img src={assetsAdmin.order_icon} className='w-6' alt="" />
<p>Orders</p>
      </div>


    </div>
   
  

  )
}

export default AdminSideBar
