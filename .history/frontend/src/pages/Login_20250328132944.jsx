import React from 'react'
import "../App.css"
function Login() {
  return (
    <div className='my-24 mb-60'>
         <div className="flex gap-2 items-center justify-center ">
    <h1 className=" prata-regular text-center my-12 text-[30px] font-[600] text-[#414141] uppercase">Login </h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div className='flex justify-center items-center flex-col '>
        <input className='border-[1px] border-black outline-none w-[420px] px-5 py-3 mb-4 ' type="text" placeholder='Email' />
        <input className='border-[1px] border-black outline-none w-[420px] px-5 py-3 ' type="password" placeholder='Password' />
        <div className='flex gap-44 mt-3'>
            <p>Forget your password</p>
            <p>create accout </p>
        </div>
        <button>Sign in</button>
    </div>
      
    </div>
  )
}

export default Login
