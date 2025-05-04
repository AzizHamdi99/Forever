import React from 'react'
import { useCartStore } from '../stores/useCartStore'

function Orders() {
  const{total,subTotal,TVA}=useCartStore()
  return (
    <div>
      <div className="flex gap-2  items-center justify-start ">
    <h1 className=" my-12 text-[22px] font-[600] text-[#707070] uppercase">Delevery <span className="font-[600] text-[#171717]">Totals</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>

      
    </div>
  )
}

export default Orders
