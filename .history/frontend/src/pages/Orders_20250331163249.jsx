import React from 'react'
import { useCartStore } from '../stores/useCartStore'

function Orders() {
  const{total,subTotal,TVA}=useCartStore()
  return (
   <div></div>
  )
}

export default Orders
