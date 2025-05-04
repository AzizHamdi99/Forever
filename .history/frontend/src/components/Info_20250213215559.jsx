import React from 'react'
import {assets} from'../assets/frontend_assets/assets'

function Info() {
  return (
    <div>
        <div>
            <img className='w-[52px] h-[52px]' src={assets.exchange_icon} alt="" />
            <p>Easy Exchange Policy</p>
            <p>We offer hassle free  exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-[52px] h-[52px]' />
            <p>7 Days Return Policy</p>
            <p>We provide 7 days free return policy </p>
        </div>
        <div>
            <img src={assets.support_img} alt=""  className='w-[52px] h-[52px]'/>
            <p>Best Customer Support</p>
            <p>We provide 24/7 customer support</p>
        </div>

      
    </div>
  )
}

export default Info
