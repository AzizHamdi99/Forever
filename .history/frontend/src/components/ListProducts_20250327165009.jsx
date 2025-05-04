import React, { useEffect } from 'react'
import { useAdminStore } from '../stores/useAdminStore'

function ListProducts() {
    const{products,getProducts}=useAdminStore()
useEffect(()=>{
    getProducts()
    console.log(products)

},[getProducts])
  return (
    <div>
        <p>All Products List</p>
        <div className="overflow-x-auto">
        <table className=" bg-white border border-gray-200">
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
            {products.products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b"> <img className='w-10' src={product.images[0]} alt="" /></td>
                <td className="py-3 px-4 border-b">{product.name}</td>
                <td className="py-3 px-4 border-b">{product.category}</td>
                <td className="py-3 px-4 border-b">{product.price}</td>
                <td className="py-3 px-4 border-b text-red-500 cursor-pointer">X</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default ListProducts
