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
        </div>
        <div>
            <img src={assets.support_img} alt="" />
        </div>

      
    </div>
  )
}

export default Info
