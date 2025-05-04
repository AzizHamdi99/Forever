import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'
function Signup() {
     const navigate=useNavigate()
  return (
    <form className='my-24 mb-64'>
    <div className="flex gap-2 items-center justify-center ">
<h1 className=" prata-regular text-center my-12 text-[30px] font-[600] text-[#414141] uppercase">Sign Up </h1>
<div className="h-[2px] bg-black w-10">

</div>
</div>
<div className='flex justify-center items-center flex-col '>
   <input className='border-[1px] border-black  w-[420px] px-5 py-2 mb-4 text-[#6A6A6A] text-[18px] ' type="text" placeholder='Name' />
   <input className='border-[1px] border-black  w-[420px] px-5 py-2 mb-4 text-[#6A6A6A] text-[18px] ' type="email" placeholder='Email' />
   <input className='border-[1px] border-black  w-[420px] px-5 py-2  text-[#6A6A6A] text-[18px] ' type="password" placeholder='Password' />
   <div className='  mt-2 text-[#3C3C3C] text-[16px] font-[400] ml-24'>
       
       <p className=' cursor-pointer' onClick={()=>navigate("/login")}> You have already an account </p>
   </div>
   <button className='bg-black text-white py-3 px-10 mt-7'>Create</button>
</div>
 
</form>
  )
}

export default Signup
