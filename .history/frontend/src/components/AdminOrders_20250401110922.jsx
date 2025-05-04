import React from 'react'
import { useOrderStore } from '../stores/useOrderStore'

function AdminOrders() {
  const {allOrders}=useOrderStore()
  return (
    <div>
      <p>Order Page</p>
      
    </div>
  )
}

export default AdminOrders
