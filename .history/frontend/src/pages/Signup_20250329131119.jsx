import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore'
function Signup() {
  
  const{signup}=useUserStore()
     const navigate=useNavigate()
     const [data,setData]=useState({
        name:"",
         email:"",
         password:""
       })

  const handelSubmit=(e)=>{
e.preventDefault()
signUp(data)
setData(
  {
    name:"",
     email:"",
     password:""
   }
   
)
navigate("/")
  }
  console.log(data)
  return (
    <form onSubmit={handelSubmit} className='my-24 mb-64'>
    <div className="flex gap-2 items-center justify-center ">
<h1 className=" prata-regular text-center my-12 text-[30px] font-[600] text-[#414141] uppercase">Sign Up </h1>
<div className="h-[2px] bg-[#414141] w-10">

</div>
</div>
<div className='flex justify-center items-center flex-col '>
   <input onChange={(e)=>setData({...data,name:e.target.value})} className='border-[1px] border-black  w-[420px] px-5 py-2 mb-4 text-[#6A6A6A] text-[18px] ' type="text" placeholder='Name' />
   <input onChange={(e)=>setData({...data,email:e.target.value})} className='border-[1px] border-black  w-[420px] px-5 py-2 mb-4 text-[#6A6A6A] text-[18px] ' type="email" placeholder='Email' />
   <input onChange={(e)=>setData({...data,password:e.target.value})} className='border-[1px] border-black  w-[420px] px-5 py-2  text-[#6A6A6A] text-[18px] ' type="password" placeholder='Password' />
   
   <button type='submit' className='bg-black text-white py-3 px-10 mt-7'>Create</button>
</div>
 
</form>
  )
}

export default Signup
