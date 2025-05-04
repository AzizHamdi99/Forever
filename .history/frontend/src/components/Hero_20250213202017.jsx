import React from 'react'
import {assets} from'../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='flex justify-between mx-32 border-[1px] border-gray-400' >
        <div className=' text-hero flex flex-col items-center justify-center'>
            <div className=' flex gap-3 items-center'>
                <div className='h-[2px] bg-[#414141] w-[42px]'></div>
                <p className='text-[18px] font-[500] uppercase'>our bestsellers</p>
        
            </div>
            <h1>Latest Arrivals</h1>
            <div className=' grid grid-cols-2 items-center'>
            <p  className='text-[18px] font-[600] uppercase'>Shop Now</p>
            <div className='w-10 h-[0.5px] bg-[#414141]'></div>
           

            </div>
            </div>
            <img className='w-[50%]' src={assets.hero_img} alt="" />
      
    </div>
  )
}

export default Hero
