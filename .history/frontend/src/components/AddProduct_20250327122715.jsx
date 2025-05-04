import React from 'react'

import { assetsAdmin } from '../assets/admin_assets/assets'

function AddProduct() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <div>
      {/*upload images */}
      <div>
      <p>Upload image</p>
      <div className='flex gap-4 '>
        <img className='w-20 h-20' src={assetsAdmin.upload_area} alt="" />
        <img  className='w-20 h-20'src={assetsAdmin.upload_area} alt="" />
        <img className='w-20 h-20' src={assetsAdmin.upload_area} alt="" />
        <img className='w-20 h-20' src={assetsAdmin.upload_area} alt="" />

      </div>

      </div>
      <div>
        <p>Product name</p>
        <input type="text" placeholder='Type here ' />
      </div>

      <div>
        <p>Product description</p>
        <textarea  placeholder='Write content here  ' />
      </div>

      <div>
      <div>
        <p>Product category</p>
        <select name="" id="">
          <option value="">Men</option>
          <option value="">Women</option>
          <option value="">Kids</option>
        </select>
      </div>

    
      
      <div>
        <p>Sub category</p>
        <select name="" id="">
          <option value="">Topwear</option>
          <option value="">Bottomwear</option>
          <option value="">Winterwear</option>
        </select>
      </div>

      <div>
        <p>Product Price</p>
        <input type="number"  />
      </div>

      </div>
      <div>
        <p>
          Product Sizes
        </p>
        <div className='flex gap-3'>
        {sizes.map((size)=>(
          <button className='p-1'>
            {size}
          </button>
        ))}
        </div>

      </div>

      

      
    </div>
  )
}

export default AddProduct
