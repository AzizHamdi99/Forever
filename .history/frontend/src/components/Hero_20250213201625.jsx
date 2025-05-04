import React from 'react'
import {assets} from'../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='flex justify-between mx-32 border-[1px] border-gray-400' >
        <div className=' text-hero flex flex-col'>
            <div className=' grid grid-cols-2 items-center'>
                <div className='h-[0.5px] bg-[#414141]'></div>
                <p>our bestsellers</p>
        
            </div>
            <h1>Latest Arrivals</h1>
            <div className=' grid grid-cols-2 items-center'>
            <p>Shop Now</p>
            <div className='w-10 h-[0.5px] bg-[#414141]'></div>
           

            </div>
            </div>
            <img className='w-[50%]' src={assets.hero_img} alt="" />
      
    </div>
  )
}

export default Hero
