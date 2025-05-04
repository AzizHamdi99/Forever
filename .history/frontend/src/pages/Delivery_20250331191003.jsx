import React, { useEffect, useState } from 'react'
import { useCartStore } from '../stores/useCartStore'
import { assets } from '../assets/frontend_assets/assets'
import { useUserStore } from '../stores/useUserStore'
import { useOrderStore } from '../stores/useOrderStore'
function Delivery() {
    const{total,subTotal,TVA,calculateTotals,cart,getCartItems}=useCartStore()
    const{user}=useUserStore()
    const{addOrder}=useOrderStore()
    useEffect(()=>{
        getCartItems()
        calculateTotals();

    },[getCartItems,  calculateTotals])
    
    console.log(cart)
    console.log(user)
    
    const [info,setInfo]=useState({
        clientId: user?._id||"",
        firstName: "",
        lastName: "",
        email: "",
        phone: null,
        address: {
          city: "",
          street: "",
          state: "",
          zipCode: null
        },
        products: [],
        total:total

    })
    useEffect(() => {
        const updatedProducts = cart.map(item => ({
            product: item._id,
            quantity: item.quantity,
            size: item.size
        }));

        setInfo(prevInfo => ({
            ...prevInfo,
            products: updatedProducts,
            total: total
        }));
    }, [cart, total]);
    console.log(info)

    const handelSubmiForm=(e)=>{
        e.preventDefault()
        
        setInfo({...info,clientId:user?._id})
        addOrder(info)

        setInfo({
            clientId: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: null,
            address: {
              city: "",
              street: "",
              state: "",
              zipCode: null
            },
            products: [],
            total:total
    
        })


        
    }
  return (
    <form onSubmit={handelSubmiForm} className='mx-32'>
    <div className="flex gap-2  items-center justify-start mt-20 ">
  <h1 className="  text-[22px] font-[600] text-[#707070] uppercase">Delivery <span className="font-[600] text-[#171717]">Information</span></h1>
  <div className="h-[2px] bg-black w-10">

  </div>
  </div>
  <div>
<div className='flex justify-between mt-5'>
  <div className=' flex flex-col gap-4 '>
    <div className='flex items-center gap-4'>
      <input type="text" onChange={(e)=>setInfo({...info,firstName:e.target.value})} placeholder='First name' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]' />
      <input type="text" onChange={(e)=>setInfo({...info,lastName:e.target.value})} placeholder='Last name' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    </div >
    <input type="email" onChange={(e)=>setInfo({...info,email:e.target.value})} placeholder='Email address' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]' />
   
    <div className=' flex items-center gap-4 '>
    <input type="text"  onChange={(e)=>setInfo({...info,address:{...info.address,city:e.target.value}})}  placeholder='City'  className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    <input type="text" onChange={(e)=>setInfo({...info,address:{...info.address,street:e.target.value}})} placeholder='Street'  className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    </div>
    <div className=' flex items-center gap-4 '>
    <input type="number"  onChange={(e)=>setInfo({...info,address:{...info.address,zipCode:e.target.value}})} placeholder='Zip code'  className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    <input type="text" placeholder='State' onChange={(e)=>setInfo({...info,address:{...info.address,state:e.target.value}})}  className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
    </div>
    <input type="number"  onChange={(e)=>setInfo({...info,phone:e.target.value})}  placeholder='Phone' className='h-[50px] border-[1px] border-[#C5C5C5] px-3 rounded-[4px] text-[#8B8B8B] text-[18px]'/>
  </div>
  <div className='w-1/2 flex flex-col ml-auto relative'>
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
  <div className='flex items-center justify-between gap-3'>
    <div className='flex items-center border-[1px] border-[#B3B3B3] py-2 px-14'>
        <input className='mr-2' type="checkbox" />
        <img className=' flex  justify-center flex-grow w-[55px] h-[23px]' src={assets.stripe_logo} alt="" />
    </div>
    <div className='flex items-center border-[1px] border-[#B3B3B3] py-2 px-14'> 
        <input type="checkbox" />
    <img className='w-[97px] h-[23px]' src={assets.razorpay_logo} alt="" />
    </div>
    <div className='flex items-center border-[1px] border-[#B3B3B3] py-2 px-14'> 
        <input type="checkbox" />
    <p className='text-[#A6A6A6] uppercase'>cash for delivery</p>
    </div>
  </div>

  </div>
  <button type='submit' onClick={()=>navigate('/orders')} className='text-[14px] ml-auto mt-2 font-[500]  bg-black text-white w-1/2 py-4 uppercase items-center '> Place Order</button>
  </div>



  </div>



  </div>
  </div>

    
  </form>
  )
}

export default Delivery
