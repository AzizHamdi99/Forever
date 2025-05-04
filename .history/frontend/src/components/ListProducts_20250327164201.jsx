import React, { useEffect } from 'react'
import { useAdminStore } from '../stores/useAdminStore'

function ListProducts() {
    const{products,getProducts}=useAdminStore()
useEffect(()=>{
    getProducts()
    console.log(products)

},[])
  return (
    <div>
        <p>All Products List</p>
      
    </div>
  )
}

export default ListProducts
