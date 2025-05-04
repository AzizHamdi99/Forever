import React, { useEffect } from 'react'

import { useOrderStore } from '../stores/useOrderStore'
import { assetsAdmin } from '../assets/admin_assets/assets'
import { useAdminStore } from '../stores/useAdminStore'
import { useNavigate } from 'react-router-dom'
function Orders() {
  const{orders,getUserOrders}=useOrderStore()
  const{products}=useAdminStore()
  const navigate=useNavigate()
  useEffect(()=>{
getUserOrders()
  },[getUserOrders])
  console.log(orders)
  return (
   <div className='mx-32'>

<div className="flex gap-2 mb-8 items-center justify-start mt-20 ">
  <h1 className="  text-[30px] font-[600] text-[#707070] uppercase">My <span className="font-[600] text-[#171717]">orders</span></h1>
  <div className="h-[2px] bg-black w-10">

  </div>
  </div>
<div className='flex  flex-col gap-5 text-[#494949]'>
  {orders.map((order,index)=>{
     const formattedDate = new Date(order.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    
    return (
    <div key={index} className='border-[1px] grid grid-cols-[1fr_2fr_2fr_1fr_1fr] p-6'>
      <img src={assetsAdmin.parcel_icon} alt="" />
      <div className='flex gap-1 flex-col'>
    {order.products.map((product,ind)=>{
      const prd=products.find((p)=>p._id=== product.product)
    //  console.log(prd?.name)
      return (
        <div key={ind} className='flex gap-1 text-[#494949]   '>

        <p onClick={()=>navigate(`/product/${product.product}`)} className='font-medium'>{prd?.name}</p>
        <p>x{product.quantity}</p>
        <p>{product.size}</p>



        </div>
        
        
      )

    })}
    </div>
    <div>
      <p><span className='text-[#494949] font-medium'>Items :</span> {order.products.length}</p>
      <p> <span className='font-medium'>Date : </span> {formattedDate}</p>
    </div>
    <div>
      <p className='font-medium'>${order.total}</p>
    </div>
    <div className='flex items-center justify-center gap-2'>
      <div className='h-[12px] w-[12px] bg-[#00A625] rounded-full'>

      </div>
      <p>{order.process}</p>
    </div>
    </div>
)})}
  </div>


   </div>
  )
}

export default Orders
