import React from 'react'
import {assets} from'../assets/frontend_assets/assets'

function Info() {
  return (
    <div className='mx-44'>
        <div>
            <img className='w-[52px] h-[52px]' src={assets.exchange_icon} alt="" />
            <p className='text-[18px] text-[#373737] font-[600]'>Easy Exchange Policy</p>
            <p className='text-[16px] text-[#898989] font-[400]'>We offer hassle free  exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt="" className='w-[52px] h-[52px]' />
            <p className='text-[18px] text-[#373737] font-[600]'>7 Days Return Policy</p>
            <p className='text-[16px] text-[#898989] font-[400]'>We provide 7 days free return policy </p>
        </div>
        <div>
            <img src={assets.support_img} alt=""  className='w-[52px] h-[52px]'/>
            <p className='text-[18px] text-[#373737] font-[600]'>Best Customer Support</p>
            <p className='text-[16px] text-[#898989] font-[400]'>We provide 24/7 customer support</p>
        </div>

      
    </div>
  )
}

export default Info
