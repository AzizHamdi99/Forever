import React from 'react'
import { useCartStore } from '../stores/useCartStore'
import { assets } from '../assets/frontend_assets/assets'
function Delivery() {
    const{total,subTotal,TVA}=useCartStore()
  return (
    <div className='mx-32'>
    <div className="flex gap-2  items-center justify-start mt-20 ">
  <h1 className="  text-[22px] font-[600] text-[#707070] uppercase">Delivery <span className="font-[600] text-[#171717]">Information</span></h1>
  <div className="h-[2px] bg-black w-10">

  </div>
  </div>
  <div>
<div className='flex justify-between mt-5'>
  <div className=' flex flex-col gap-4 '>
    <div className='flex items-center gap-4'>
      <input type="text" placeholder='First name' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]' />
      <input type="text" placeholder='Last name' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    </div >
    <input type="email" placeholder='Email address' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]' />
    <input type="text" placeholder='Street'  className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    <div className=' flex items-center gap-4 '>
    <input type="text" placeholder='City'  className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    <input type="text" placeholder='State'  className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    </div>
    <div className=' flex items-center gap-4 '>
    <input type="number" placeholder='Zip code'  className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    <input type="text" placeholder='Country' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]' />
    </div>
    <input type="number"  placeholder='Phone' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
  </div>
  <div className='w-1/3 flex flex-col ml-auto relative'>
  <div className="flex gap-2  items-center justify-start ">
  <h1 className=" my-5 text-[22px] font-[600] text-[#707070] uppercase">Cart <span className="font-[600] text-[#171717]">Totals</span></h1>
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
  <div>
  <div className="flex gap-2  items-center justify-start ">
  <h1 className=" my-5 text-[17px] font-[600] text-[#707070] uppercase">Payement <span className="font-[600] text-[#171717]">method</span></h1>
  <div className="h-[2px] bg-black w-10">

  </div>
  </div>
  <div className='flex items-center justify-between'>
    <div className='flex items-center border-[1px] border-[#B3B3B3] py-2'>
        <input type="checkbox" />
        <img className='w-[55px] h-[23px]' src={assets.stripe_logo} alt="" />
    </div>
    <div className='flex items-center border-[1px] border-[#B3B3B3]'> 
        <input type="checkbox" />
    <img className='w-[97px] h-[23px]' src={assets.razorpay_logo} alt="" />
    </div>
    <div className='flex items-center border-[1px] border-[#B3B3B3]'> 
        <input type="checkbox" />
    <p>cash for delivery</p>
    </div>
  </div>

  </div>
  <button onClick={()=>navigate('/orders')} className='text-[14px] ml-auto mt-2 font-[500]  bg-black text-white w-1/2 py-3 uppercase items-center '> Proceed to checkout</button>
  </div>



  </div>



  </div>
  </div>

    
  </div>
  )
}

export default Delivery
