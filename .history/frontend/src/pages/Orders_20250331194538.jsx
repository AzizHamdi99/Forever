import React, { useEffect } from 'react'

import { useOrderStore } from '../stores/useOrderStore'
import { assetsAdmin } from '../assets/admin_assets/assets'
function Orders() {
  const{orders,getUserOrders}=useOrderStore()
  useEffect(()=>{
getUserOrders()
  },[getUserOrders])
  console.log(orders)
  return (
   <div>

   </div>
  )
}

export default Orders
