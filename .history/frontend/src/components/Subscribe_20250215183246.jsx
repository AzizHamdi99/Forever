import React from 'react'

function Subscribe() {
  return (
    <div className='flex flex-col items-center justify-center mt-32'>
        <p className='font-[500] text-[34px] text-[#373737]'>Subscribe now & get 20% off</p>
        <p className='text-[18px] text-[#9A9A9A] font-[400]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className='flex border-[1px] justify-between items-center border-[#C7C7C7] w-[723px] h-[62px] my-10 '>
            <input type="email" placeholder='Enter your email id' className='outline-none px-5 text-[#9A9A9A] text-[14px] font-[400] '/>
            <button className='text-[18px] '>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Subscribe
