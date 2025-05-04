import React from 'react'
import "../App.css"
function Login() {
  return (
    <form className='my-24 mb-64'>
         <div className="flex gap-2 items-center justify-center ">
    <h1 className=" prata-regular text-center my-12 text-[30px] font-[600] text-[#414141] uppercase">Login </h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div className='flex justify-center items-center flex-col '>
        <input className='border-[1px] border-black  w-[420px] px-5 py-2 mb-4 text-[#6A6A6A] text-[18px] ' type="text" placeholder='Email' />
        <input className='border-[1px] border-black  w-[420px] px-5 py-2  text-[#6A6A6A] text-[18px] ' type="password" placeholder='Password' />
        <div className='flex gap-40 mt-2 text-[#3C3C3C] text-[16px] font-[400]'>
            <p className=' cursor-pointer'>Forget your password?</p>
            <p className=' cursor-pointer'>create accout </p>
        </div>
        <button className='bg-black text-white py-3 px-10'>Sign in</button>
    </div>
      
    </form>
  )
}

export default Login
