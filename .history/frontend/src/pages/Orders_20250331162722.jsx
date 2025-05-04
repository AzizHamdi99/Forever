import React from 'react'
import { useCartStore } from '../stores/useCartStore'

function Orders() {
  const{total,subTotal,TVA}=useCartStore()
  return (
    <div className='mx-32'>
      <div className="flex gap-2  items-center justify-start ">
    <h1 className=" my-12 text-[22px] font-[600] text-[#707070] uppercase">Delivery <span className="font-[600] text-[#171717]">Information</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div>
<div className='flex items-center justify-between'>
    <div className=''>
      <div>
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
      </div>
      <input type="email" placeholder='Email address' />
      <input type="text" placeholder='Street' />
      <div>
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State' />
      </div>
      <div>
      <input type="number" placeholder='Zip code' />
      <input type="text" placeholder='Country' />
      </div>
      <input type="number"  placeholder='Phone' />
    </div>
    <div className='w-1/3 flex flex-col ml-auto relative'>
    <div className="flex gap-2  items-center justify-start ">
    <h1 className=" my-12 text-[22px] font-[600] text-[#707070] uppercase">Cart <span className="font-[600] text-[#171717]">Totals</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div className='flex flex-col gap-3'>
    <div className='text-[16px] text-[#555555] flex items-center justify-between font-medium'>
      <p>Subtotal</p>
      <p>${subTotal}</p>
    </div>
    <hr />
    <div className='text-[16px] text-[#555555] flex items-center justify-between font-medium'>
      <p>TVA</p>
      <p>${TVA}</p>
    </div>
    <hr />
    <div className='text-[18px] text-[#454545] flex items-center justify-between font-bold'>
      <p>Total</p>
      <p>${total}</p>
    </div>
    <button onClick={()=>navigate('/orders')} className='text-[14px] ml-auto mt-2 font-[500]  bg-black text-white w-1/2 py-3 uppercase items-center '> Proceed to checkout</button>
    </div>



    </div>



    </div>
    </div>

      
    </div>
  )
}

export default Orders
