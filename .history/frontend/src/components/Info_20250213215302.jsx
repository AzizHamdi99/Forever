import React from 'react'
import {assets} from'../assets/frontend_assets/assets'

function Info() {
  return (
    <div>
        <div>
            <img src={assets.exchange_icon} alt="" />
        </div>
        <div>
            <img src={assets.quality_icon} alt="" />
        </div>
        <div>
            <img src={assets.menu_icon} alt="" />
        </div>

      
    </div>
  )
}

export default Info
