import React from 'react'

import { assetsAdmin } from '../assets/admin_assets/assets'

function AddProduct() {
  return (
    <div>
      {/*upload images */}
      <div>
      <p>Upload image</p>
      <div>
        <img src={assetsAdmin.upload_area} alt="" />
        <img src={assetsAdmin.upload_area} alt="" />
        <img src={assetsAdmin.upload_area} alt="" />
        <img src={assetsAdmin.upload_area} alt="" />

      </div>

      </div>

      
    </div>
  )
}

export default AddProduct
