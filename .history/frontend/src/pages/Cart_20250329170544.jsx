import React, { useEffect } from 'react'
import { useCartStore } from '../stores/useCartStore'

import { assets } from '../assets/frontend_assets/assets'

import{Plus} from"lucide-react"

function Cart() {
  const {cart,getCartItems}=useCartStore()
  useEffect(()=>{
getCartItems()
  },[getCartItems])
  console.log(cart)
  return (
    <div className='mx-32'>
      <div className="flex gap-2  items-center justify-start ">
    <h1 className=" my-12 text-[30px] font-[600] text-[#707070] uppercase">YOUR <span className="font-[600] text-[#171717]">CART</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div>
      {cart.map((product)=>(
        <div className='flex flex-col gap-3'>
          <hr />
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 '>
          <img className='w-[100px] h-[110px]' src={product?.images[0]} alt="" />
            <div className='flex flex-col gap-3 '>
              
           
              <p className='text-[#494949] text-[17px] font-medium'>{product?.name}</p>
              <div className='flex gap-7 ml-2 '>
              <p className='text-[#494949]'>${product?.price}</p>
              <p className='w-[30px] h-[30px] text-center bg-[#FBFBFB] boreder-[#494949] border-[1px]'>{product?.size}</p>
              
              </div>
            </div>
            </div>

            <div className='flex items-center justify-center'>
            <Minus />
            <p className=''>{product?.quantity}</p>
            <Plus />
          </div>
          <img className='w-[20px] h-[20px]' src={assets.bin_icon} alt="" />
          </div>
         
        </div>
      ))}
    </div>


      
    </div>
  )
}

export default Cart
