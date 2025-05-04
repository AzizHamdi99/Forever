import React, { useEffect } from 'react'
import { useOrderStore } from '../stores/useOrderStore'
import { assetsAdmin } from '../assets/admin_assets/assets'
import { useAdminStore } from '../stores/useAdminStore'
function AdminOrders() {
  const {allOrders,getAllorders}=useOrderStore()
  useEffect(()=>{
    getAllorders()

  },[getAllorders])
  const {products}=useAdminStore()
  return (
    <div>
      <p>Order Page</p>


      <div className='flex  flex-col gap-5 text-[#494949]'>
        {allOrders.map((order,index)=>{
           const formattedDate = new Date(order.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });
          
          return (
          <div key={index} className='border-[1px] flex justify-between items-center p-6'>
            <img src={assetsAdmin.parcel_icon} alt="" />
            <div className='flex gap-1 flex-col'>
          {order.products.map((product,ind)=>{
            const prd=products.find((p)=>p._id=== product.product)
          //  console.log(prd?.name)
            return ( 
              <div>
              <div key={ind} className='flex gap-1 text-[#494949]   '>
      
              <p onClick={()=>navigate(`/product/${product.product}`)} className='font-medium'>{prd?.name}</p>
              <p>x{product.quantity}</p>
              <p>{product.size}</p>
      
      
      
              </div>

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

export default AdminOrders
