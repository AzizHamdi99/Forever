import React, { useEffect } from 'react'
import { useCartStore } from '../stores/useCartStore'

function Orders() {
  const{orders,getUserOrders}=useCartStore()
  useEffect(()=>{
getUserOrders()
  },[getUserOrders])
  console.log(orders)
  return (
   <div></div>
  )
}

export default Orders
