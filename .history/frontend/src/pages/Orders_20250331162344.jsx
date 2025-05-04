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

    <div>
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
      <input type="text" placeholder='State' />
      </div>
    </div>




    </div>

      
    </div>
  )
}

export default Orders
