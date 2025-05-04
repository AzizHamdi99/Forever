import React, { useEffect } from 'react'
import { useCartStore } from '../stores/useCartStore'

import { assets } from '../assets/frontend_assets/assets'

function Cart() {
  const {cart,getCartItems}=useCartStore()
  useEffect(()=>{
getCartItems()
  },[getCartItems])
  console.log(cart)
  return (
    <div className='ml-32'>
      <div className="flex gap-2  items-center justify-start ">
    <h1 className=" my-12 text-[30px] font-[600] text-[#707070] uppercase">YOUR <span className="font-[600] text-[#171717]">CART</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div>
      {cart.map((product)=>(
        <div>
          <hr />
          <div className='flex justify-between items-center'>
            <img className='w-' src={product?.images[0]} alt="" />
            <div>
              <p>{product?.name}</p>
              <div>
              <p>${product?.price}</p>
              <p>{product?.size}</p>
              
              </div>
            </div>

            <div>
            <p>{product?.quantity}</p>
          </div>
          <img src={assets.bin_icon} alt="" />
          </div>
         
        </div>
      ))}
    </div>


      
    </div>
  )
}

export default Cart
