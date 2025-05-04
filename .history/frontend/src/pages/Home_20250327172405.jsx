import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import Info from '../components/Info'
import Subscribe from '../components/Subscribe'
import { useAdminStore } from '../stores/useAdminStore.js';
import { useEffect } from 'react';

function Home() {
  const{products,getProducts}=useAdminStore()

  useEffect(()=>{
getProducts()
console.log(products)
  },[getProducts])
  console.log(products)
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSellers/>
      <Info/>
      <Subscribe/>
      
      
    </div>
  )
}

export default Home
