import React, { useEffect } from 'react'
import { useOrderStore } from '../stores/useOrderStore'
import { assetsAdmin } from '../assets/admin_assets/assets'
import { useAdminStore } from '../stores/useAdminStore'
function AdminOrders() {
  const {allOrders,getAllorders}=useOrderStore()
  const process=["Order Placed", "Packing", "Shipped", "Out for delivery", "Delivered"]
  useEffect(()=>{
    getAllorders()

  },[getAllorders])
  const {products}=useAdminStore()
  return (
    <div className=''>
     <div className="flex gap-2 mb-8 items-center justify-start mt-10 ">
  <h1 className="  text-[30px] font-[600] text-[#707070] uppercase">Orders <span className="font-[600] text-[#171717]">Page</span></h1>
  <div className="h-[2px] bg-black w-10">

  </div>
  </div>


      <div className='flex  flex-col gap-5 text-[#494949] mt-5'>
        {allOrders.map((order,index)=>{
          const formattedDate = new Date(order.createdAt).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });
          
          
          return (
          <div key={index} className='border-[1px] flex justify-between p-6 w-[1000px] shadow-sm'>
            <img src={assetsAdmin.parcel_icon} alt="" />
            
            <div className='flex gap-1 flex-col'>
              
          {order.products.map((product,ind)=>{
            const prd=products.find((p)=>p._id=== product.product)
          //  console.log(prd?.name)
            return ( 
              
              <div key={ind} className='flex gap-1 text-[#494949] text-[14px]   '>
      
              <p onClick={()=>navigate(`/product/${product.product}`)} className=''>{prd?.name}</p>
              <p>x{product.quantity}</p>
              <p>{product.size}</p>
      
      
      
              </div>
             

              
              
              
            )
      
          })}
          <div className='mt-3'>
          
                <p className='font-medium mb-2'>{order.firstName} {order.lastName}</p>
                <p>{order.address.state},{order.address.city},{order.address.street},{order.address.zipCode}</p>
                <p className='font-medium'>{order.phone}</p>
              
          </div>
          </div>
          <div>
            <p className='mb-4 font-medium'><span className='text-[#494949] '>Items :</span> {order.products.length}</p>
            <p ><span className='font-medium'>Methode : </span>COD</p>
            <p><span className='font-medium'>Payement</span> {order.process==="Delivered"? "Done":"Pending"}</p>
            <p> <span className='font-medium'>Date : </span> {formattedDate}</p>
          </div>
          <div>
            <p className='font-medium'>${order.total}</p>
          </div>
          <div className=''>
            <select className='font-medium border-[1px] p-2' name="" id="">
              {process.map((p,i)=>{
                return(
                  <option key={i} value="">{p}</option>
                )
              })}
            </select>
          </div>
          </div>
      )})}
        </div>
      
    </div>
  )
}

export default AdminOrders
