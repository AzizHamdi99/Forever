import React from 'react'
import "../App.css"
function Login() {
  return (
    <div>
         <div className="flex gap-2 items-center justify-center ">
    <h1 className=" prata-regular text-center my-12 text-[30px] font-[600] text-[#414141] uppercase">Login </h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div>
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <div>
            <p>Forget your password</p>
            <p>create accout </p>
        </div>
    </div>
      
    </div>
  )
}

export default Login
