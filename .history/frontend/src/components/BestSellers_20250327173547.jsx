import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { useAdminStore } from '../stores/useAdminStore';

function BestSellers() {
    
    const navigate=useNavigate()
    const {products}=useAdminStore()
  return (
<div className='mt-16'>
    <div className=' text-center font-outfit'>
        <div className='text-[35px] uppercase flex gap-3 items-center justify-center '>
            <p className='text-[#707070] font-[400]'>Best <span className='font-[600] text-[#171717]'> Seller</span></p>
            <div className='h-[2px] bg-[#414141] w-[42px]'></div>

        </div>
        <p className='text-[18px] font-[400] text-[#868686]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
    </div>
    <div className='grid grid-cols-5 mx-44 gap-5 mt-10 font-outfit'>
    {products.filter((item)=>item.bestseller==true).slice(0,5).map((item,index)=>{
        return(
            <div key={index} className='text-[#494949] cursor-pointer' onClick={()=>navigate(`/product/${item._id}`)}>
                <img className='w-[280px] h-[280px] mb-4' src={item.images[0]} alt="" />
                <p className=' text-[13px] font-[500] '>{item.name}</p>
                <p className='text-[16px] font-[600]'>${item.price}</p>

            </div>
        )
    })}



    </div>

    
</div>
  )
}

export default BestSellers
