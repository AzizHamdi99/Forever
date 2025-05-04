import React, { useEffect } from 'react'

import { useOrderStore } from '../stores/useOrderStore'

function Orders() {
  const{orders,getUserOrders}=useOrderStore()
  useEffect(()=>{
getUserOrders()
  },[getUserOrders])
  console.log(orders)
  return (
   <div></div>
  )
}

export default Orders
