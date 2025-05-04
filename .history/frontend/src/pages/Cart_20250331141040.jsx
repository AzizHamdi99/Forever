import React, { useEffect ,useState} from 'react'
import { useCartStore } from '../stores/useCartStore'

import { assets } from '../assets/frontend_assets/assets'

import{Plus,Minus} from"lucide-react"
import { useNavigate } from 'react-router-dom'
import EmptyCart from '../components/EmptyCart'
import LoadingSpinner from '../components/LoadingSpinner'

function Cart() {
  const {cart,getCartItems,decreaseQuantity,removeFromCart,addToCart}=useCartStore()
  const navigate=useNavigate()
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const loadCart = async () => {
      await getCartItems()
      setLoading(false) 
    }
    loadCart()
  }, [getCartItems]);
  console.log(cart)

  if (loading) {
    return <LoadingSpinner/> 
  }




  if (!cart || cart.length === 0) {
    return <EmptyCart/>
  }





  return (
    <div className='mx-32'>
      <div className="flex gap-2  items-center justify-start ">
    <h1 className=" my-12 text-[30px] font-[600] text-[#707070] uppercase">YOUR <span className="font-[600] text-[#171717]">CART</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div>
      {cart?.map((product,index)=>(
        <div key={index} className='flex flex-col gap-3'>
          <hr />
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 '>
          <img onClick={()=>navigate(`/product/${product?._id}`)} className=' cursor-pointer w-[100px] h-[110px]' src={product?.images[0]} alt="" />
            <div className='flex flex-col gap-3 '>
              
           
            <p className='text-[#494949] text-[17px] font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-[210px]'>
                    {product?.name}
                  </p>
              <div className='flex gap-7 ml-2 '>
              <p className='text-[#494949]'>${product?.price}</p>
              <p className='w-[30px] h-[30px] text-center bg-[#FBFBFB] boreder-[#494949] border-[1px]'>{product?.size}</p>
              
              </div>
            </div>
            </div>

            <div className='flex items-center justify-center w-full max-w-[200px]'>
            <Minus onClick={()=>decreaseQuantity({productid:product._id,size:product.size})} className=' cursor-pointer' />
            <p className='w-[30px] h-[30px] text-center bg-[#FBFBFB] boreder-[#494949] border-[1px]'>{product?.quantity}</p>
            <Plus  onClick={()=>addToCart({productid:product._id,size:product.size})} className=' cursor-pointer' />
          </div>
          <img onClick={()=>removeFromCart({productid:product._id,size:product.size})} className='w-[20px] h-[20px] cursor-pointer' src={assets.bin_icon} alt="" />
          </div>
         
        </div>
      ))}
    </div>
    <div className=' '>
    <div className="flex gap-2  items-center justify-start ">
    <h1 className=" my-12 text-[22px] font-[600] text-[#707070] uppercase">Cart <span className="font-[600] text-[#171717]">Totals</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div>
      
    </div>



    </div>


      
    </div>
  )
}

export default Cart
