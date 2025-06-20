import React, { useEffect } from 'react'
import { useAdminStore } from '../stores/useAdminStore'

function ListProducts() {
    const{products,getProducts,deleteProduct}=useAdminStore()
useEffect(()=>{
    getProducts()
    console.log(products)

},[getProducts])
  return (
    <div className='mt-10 ml-7'>
         <div className="flex gap-2 mb-8 items-center justify-start  ">
  <h1 className="  text-[30px] font-[600] text-[#707070] uppercase">All <span className="font-[600] text-[#171717]">Products</span></h1>
  <div className="h-[2px] bg-black w-10">

  </div>
  </div>
        <div className="w-full overflow-x-auto">
        <table className=" w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border-b text-left">Image</th>
              <th className="py-3 px-4 border-b text-left">Name</th>
              <th className="py-3 px-4 border-b text-left">Category</th>
              <th className="py-3 px-4 border-b text-left">Price</th>
              <th className="py-3 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b"> <img className='w-10' src={product.images[0]} alt="" /></td>
                <td className="py-3 px-4 border-b">{product.name}</td>
                <td className="py-3 px-4 border-b">{product.category}</td>
                <td className="py-3 px-4 border-b">{product.price} DT</td>
                <td onClick={()=>deleteProduct(product._id)} className="py-3 px-4 border-b text-red-500 cursor-pointer">X</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default ListProducts
