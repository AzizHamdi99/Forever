import React ,{useState}from 'react'
import { assetsAdmin } from '../assets/admin_assets/assets'

function AdminSideBar() {
   
  return (
    <div>
      <div className='flex gap-1'>
        <img className='w-5' src={assetsAdmin.add_icon} alt="" />
<p>Add Items</p>
      </div>
      <div>
        <img src={assetsAdmin.order_icon} alt="" />
<p>List Items</p>
      </div>
      <div>
        <img src={assetsAdmin.order_icon} alt="" />
<p>Orders</p>
      </div>


    </div>
   
  

  )
}

export default AdminSideBar
