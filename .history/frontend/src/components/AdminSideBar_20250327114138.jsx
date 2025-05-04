import React ,{useState}from 'react'
import { assetsAdmin } from '../assets/admin_assets/assets'

import { useAdminStore } from '../stores/useAdminStore'

function AdminSideBar() {
  const{selected,changeSelect}=useAdminStore()
   
  return (
    <div className='ml-32 pt-[20px] border-r-[1px] border-gray-400 w-52 min-h-screen flex flex-col gap-5'>
      <div className='flex gap-3 border-[1px] border-gray-400 p-2 px-4 border-r-0 cursor-pointer'>
        <img className='w-6' src={assetsAdmin.add_icon} alt="" />
<p>Add Items</p>
      </div>
      <div className='flex gap-3  border-[1px] border-gray-400 p-2 cursor-pointer px-4 border-r-0'>
        <img src={assetsAdmin.order_icon} className='w-6' alt="" />
<p>List Items</p>
      </div>
      <div className='flex gap-3  border-[1px] border-gray-400 p-2 px-4 border-r-0 cursor-pointer'>
        <img src={assetsAdmin.order_icon} className='w-6' alt="" />
<p>Orders</p>
      </div>


    </div>
   
  

  )
}

export default AdminSideBar
