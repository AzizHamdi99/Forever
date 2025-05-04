import React from 'react'

import { assetsAdmin } from '../assets/admin_assets/assets'

function AddProduct() {
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
        <input type="text" placeholder='Type here ' />
      </div>

      
    </div>
  )
}

export default AddProduct
