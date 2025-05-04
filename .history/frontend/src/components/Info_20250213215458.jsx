import React from 'react'
import {assets} from'../assets/frontend_assets/assets'

function Info() {
  return (
    <div>
        <div>
            <img src={assets.exchange_icon} alt="" />
            <p>Easy Exchange Policy</p>
            <p>We offer hassle free  exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" />
            <p>7 Days Return Policy</p>
            <p>We provide 7 days free return policy </p>
        </div>
        <div>
            <img src={assets.support_img} alt="" />
            <p>Best Customer Support</p>
            <p>We offer hassle free  exchange policy</p>
        </div>

      
    </div>
  )
}

export default Info
