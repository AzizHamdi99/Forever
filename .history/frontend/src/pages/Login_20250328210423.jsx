import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore'
function Login() {
  const {login,user}=useUserStore()
  const navigate=useNavigate()
  const [data,setData]=useState({
    email:"",
    password:""
  })
console.log(data)
  const handelSubmit=(e)=>{
    e.preventDefault()
    login(data)
    setData({
      email:"",
      password:""
    })
    if(user){
      navigate("/")

    }
  
  }
 
  return (
    <form onSubmit={handelSubmit} className='my-24 mb-64'>
         <div className="flex gap-2 items-center justify-center ">
    <h1 className=" prata-regular text-center my-12 text-[30px] font-[600] text-[#414141] uppercase">Login </h1>
    <div className="h-[2px] bg-[#414141] w-10">

    </div>
    </div>
    <div className='flex justify-center items-center flex-col '>
        <input onChange={(e)=>setData({...data,email: e.target.value})} className='border-[1px] border-black  w-[420px] px-5 py-2 mb-4 text-[#6A6A6A] text-[18px] ' type="email" placeholder='Email' />
        <input onChange={(e)=>setData({...data,password: e.target.value})} className='border-[1px] border-black  w-[420px] px-5 py-2  text-[#6A6A6A] text-[18px] ' type="password" placeholder='Password' />
        <div className='flex gap-40 mt-2 text-[#3C3C3C] text-[16px] font-[400]'>
            <p className=' cursor-pointer underline'>Forget your password?</p>
            <p className=' cursor-pointer underline' onClick={()=>navigate("/signup")}>Create accout </p>
        </div>
        <button type='submit' className='bg-black text-white py-3 px-10 mt-7'>Sign in</button>
    </div>
      
    </form>
  )
}

export default Login
