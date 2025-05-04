import React from 'react'
import {assetsAdmin} from"../assets/admin_assets/assets.js"
import AdminSideBar from '../components/AdminSideBar.jsx'
import { useAdminStore } from '../stores/useAdminStore.js'
import AddProduct from '../components/AddProduct.jsx'
import AdminOrders from '../components/AdminOrders.jsx'
import ListProducts from '../components/ListProducts.jsx'
function Admin() {
  const{selected}=useAdminStore()
  return (
    <div>
        <AdminSideBar/>

        {selected==="additems"&& <AddProduct/>}
        {selected==="listitems"&& <ListProducts/>}
        {selected==="orders"&& <AdminOrders/>}
        
        


      
    </div>
  )
}

export default Admin
