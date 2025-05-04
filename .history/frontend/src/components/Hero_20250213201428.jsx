import React from 'react'
import {assets} from'../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='flex justify-between mx-32 border-[1px] border-gray-400' >
        <div className=' text-hero'>
            <div className=' flex items-center gap-2'>
                <div className='h-[0.5px] bg-[#414141]'></div>
                <p>our bestsellers</p>
        
            </div>
            <h1>Latest Arrivals</h1>
            <div>
            <p>Shop Now</p>
            <div className='h-[0.5px] bg-[#414141]'></div>
           

            </div>
            </div>
            <img className='w-[50%]' src={assets.hero_img} alt="" />
      
    </div>
  )
}

export default Hero
