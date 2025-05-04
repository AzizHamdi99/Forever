import React from 'react'
import {assets} from'../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='flex mx-32 border-1 border-gray-400'>
        <div>
            <div>
                <div className='h-1 bg-black'></div>
                <p>our bestsellers</p>
        
            </div>
            <h1>Latest Arrivals</h1>
            <div>
            <p>Shop Now</p>
            <div className='h-1 bg-black'></div>
           

            </div>
            </div>
            <img src={assets.hero_img} alt="" />
      
    </div>
  )
}

export default Hero
