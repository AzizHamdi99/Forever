import React ,{useState}from 'react'
import { assetsAdmin } from '../assets/admin_assets/assets'

function AdminSideBar() {
   
  return (
    <div className='ml-32 mt-[20px] border-r-[1px] border-gray-400 w-48'>
      <div className='flex gap-3 border-[1px] border-gray-400'>
        <img className='w-6' src={assetsAdmin.add_icon} alt="" />
<p>Add Items</p>
      </div>
      <div className='flex gap-3'>
        <img src={assetsAdmin.order_icon} className='w-6' alt="" />
<p>List Items</p>
      </div>
      <div className='flex gap-3'>
        <img src={assetsAdmin.order_icon} className='w-6' alt="" />
<p>Orders</p>
      </div>


    </div>
   
  

  )
}

export default AdminSideBar
