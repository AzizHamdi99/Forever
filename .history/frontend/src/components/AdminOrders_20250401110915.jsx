import React from 'react'
import { useOrderStore } from '../stores/useOrderStore'

function AdminOrders() {
  const {allOrders}=useOrderStore()
  return (
    <div>
      <p>order </p>
      
    </div>
  )
}

export default AdminOrders
