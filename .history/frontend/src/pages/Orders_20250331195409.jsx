import React, { useEffect } from 'react'

import { useOrderStore } from '../stores/useOrderStore'
import { assetsAdmin } from '../assets/admin_assets/assets'
import { useAdminStore } from '../stores/useAdminStore'
function Orders() {
  const{orders,getUserOrders}=useOrderStore()
  const{products}=useAdminStore()
  useEffect(()=>{
getUserOrders()
  },[getUserOrders])
  console.log(orders)
  return (
   <div className='mx-32'>

<div className="flex gap-2  items-center justify-start mt-20 ">
  <h1 className="  text-[30px] font-[600] text-[#707070] uppercase">My <span className="font-[600] text-[#171717]">orders</span></h1>
  <div className="h-[2px] bg-black w-10">

  </div>
  </div>

  {orders.map((order,indeex)=>{
    order.products.map((product,ind)=>{
      const prd=product.find((p)=>p._id=== product._id)

    })
  })}


   </div>
  )
}

export default Orders
