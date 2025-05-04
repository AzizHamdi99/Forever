import React, { useState } from 'react'

import { assetsAdmin } from '../assets/admin_assets/assets'

function AddProduct() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [image1,setImage1]=useState(null)
  const [image2,setImage2]=useState(null)
  const [image3,setImage3]=useState(null)
  const [image4,setImage4]=useState(null)

  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [category,setCategory]=useState("")
  const [subCategory,setSubCategory]=useState("")
  const [price,setPrice]=useState(null)
  const[bestSeller,setBestSeller]=useState(false)

  const [size,setsize]=useState([])

  const handleSizesClick=(size)=>{
    setsize((prev)=>prev.includes(size)? prev.filter((s)=>s))

  }





  return (
    <div className='mt-6 ml-10'>
      {/*upload images */}
      <div>
      <p className=''>Upload image</p>
      <div className='flex gap-4 my-3 '>
        <img className='w-20 h-20' src={assetsAdmin.upload_area} alt="" />
        <img  className='w-20 h-20'src={assetsAdmin.upload_area} alt="" />
        <img className='w-20 h-20' src={assetsAdmin.upload_area} alt="" />
        <img className='w-20 h-20' src={assetsAdmin.upload_area} alt="" />

      </div>

      </div>
      <div>
        <p>Product name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)} className='text-gray-500 my-2 m px-3 py-2 w-[400px] outline-none border-[1px] border-gray-400'  type="text" placeholder='Type here ' />
      </div>

      <div>
        <p>Product description</p>
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='text-gray-500 my-2 m px-3 py-2 w-[400px] outline-none border-[1px] border-gray-400'  placeholder='Write content here  ' />
      </div>

      <div className='flex gap-6'>
      <div>
        <p>Product category</p>
        <select value={category} onChange={(e)=>setCategory(e.target.value)} className='text-gray-500 my-2 m px-3 py-1 w-32 outline-none border-[1px] border-gray-400' name="" id="">
          <option value="">Men</option>
          <option value="">Women</option>
          <option value="">Kids</option>
        </select>
      </div>

    
      
      <div>
        <p>Sub category</p>
        <select value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} className='text-gray-500 my-2 m px-3 py-1 outline-none border-[1px] border-gray-400' name="" id="">
          <option value="">Topwear</option>
          <option value="">Bottomwear</option>
          <option value="">Winterwear</option>
        </select>
      </div>

      <div>
        <p>Product Price</p>
        <input value={price} onChange={(e)=>setPrice(e.target.value)} className='text-gray-500 my-2 m px-3 py-1 w-32 outline-none border-[1px] border-gray-400' type="number"  />
      </div>

      </div>
      <div className='mt-1'>
        <p>
          Product Sizes
        </p>
        <div className='flex gap-3 mt-2'>
        {sizes.map((size)=>(
          <button onClick={()=>handleSizesClick(size)} className='p-1 w-10 bg-gray-200'>
            {size}
          </button>
        ))}
        </div>

      </div>
      <div className='flex gap-2 my-4'>
        <input type="checkbox" />
        <p>Add to bestseller</p>
      </div>

      <button cla className='bg-black text-white py-3 px-10 mt-3' >Add</button>

      

      
    </div>
  )
}

export default AddProduct
