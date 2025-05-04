import React, { useContext, useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/frontend_assets/assets'
import { useAdminStore } from '../stores/useAdminStore'
import LoadingSpinner from '../components/LoadingSpinner'

function Details() {
   const{getSingleProduct,singleProduct,products}=useAdminStore()
  const {id}=useParams()
  const [mainPic, setMainPic] = useState("");
  //const {data,setData}=useContext(AppContext)
  
  //const [product, setProduct] = useState(data.find((item) => item._id === id));
  
  //console.log(mainPic)
//console.log(product)
const[size,setSize]=useState("");
console.log(id)
//console.log(size)
const navigate=useNavigate()
useEffect(() => {
  //const newProduct = data.find((item) => item._id === id);
  setMainPic("");
  getSingleProduct(id)
 

 /* if (newProduct) {
    setProduct(newProduct);
    setMainPic(newProduct.image[0]); // Update the main picture
  }*/
}, [id,getSingleProduct,]);

/*useEffect(() => {
  console.log(singleProduct);
}, [singleProduct]);*/
useEffect(() => {
  if (singleProduct && singleProduct.images && singleProduct.images.length > 0) {
    setMainPic(singleProduct.images[0]); // Set first image as main image
  }
}, [singleProduct]);


const [prd,setPrd]=useState({
  productid:singleProduct._id,
  size:""

})


if (!singleProduct) {
  return <div><LoadingSpinner/></div>; 
}

if (!singleProduct || !singleProduct.images || singleProduct.images.length === 0) {
  return <div>Loading...</div>; 
}





  return (
    
    <div className='mt-10 mx-32'>
      <div className='flex gap-4 '>
        <div className='flex flex-col'>
        {singleProduct.images.map((img)=>{
          return(
            
              <img className='w-[138px] h-[140px] mb-3 cursor-pointer' onClick={()=>setMainPic(img)} src={img} alt="" />
            
          )
        })}
        </div>
        <img className='w-[591px] h-[598px]' src={mainPic} alt="" />
        <div className='ml-2'>
          <p className='text-[34px] font-[500] text-[#3D3D3D] mb-2'>{singleProduct.name}</p>
          <div className='flex gap-1 mb-4'>{[...Array(5)].map((_,index)=>(
            <img className='w-[22px] h-[22px]' src={assets.star_icon} alt="" />
          ))}
          <p className='text-[#1C1C1C] text-[16px] font-[500]'>(122)</p>
          </div>
          <p className='text-[32px] text-[#2A2A2A] font-[500] '>${singleProduct.price}</p>
          <p className='text-[#555555] text-[16px] font-[400] my-6'>{singleProduct.description}</p>
          <p className='text-[#656565] text-[20px] font-[600]'>Select Size</p>
          <div className='flex items-center gap-10 my-6'>
            {singleProduct.sizes.map((item)=>{
              return(
                <div onClick={()=>setSize(item)} className={size===item?"w-[61px] cursor-pointer h-[61px] border-[2px] border-[#FF8551]  bg-[#FBFBFB] text-center ":"w-[61px] cursor-pointer h-[61px] border-[1px] border-[#EBEBEB]  bg-[#FBFBFB] text-center "}>
                  <p onClick={} className='mt-4 text-[#1D1D1D] text-[16px] font-[400]'>
                    {item}

                  </p>
                </div>
              )
            })}
          </div>
          <button className='bg-black text-white text-[16px] font-[600] px-11 py-3 my-4'>ADD TO CART</button>
          <div className='h-[1px] bg-[#ADADAD] w-[500px] my-4'>

          </div>
          <div className='text-[#555555] text-[16px] font-[400]'>
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
        
      </div>
      <div className='mt-24'>
        <div className='flex '>
            <p className='text-[#393939] text-[16px] font-[700] border-[1px] border-[#D0D0D0] py-4 px-10 cursor-pointer' >Description</p>
            <p className='text-[#898989] text-[16px] font-[700] border-[1px] border-[#D0D0D0] py-4 px-10 bg-[#FBFBFB] cursor-pointer'>Reviews (122)</p>
        </div>
        <div className='border-[1px] border-[#D0D0D0] p-8 text-[#555555] text-[16px] '>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p className='my-7'>
          E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </p>
        </div>

      </div>
      <div className='mt-20 mb-36'>
          <div className="flex gap-2 items-center justify-center ">
        <h1 className="text-center my-12 text-[30px] font-[600] text-[#707070] uppercase">Related <span className="font-[600] text-[#171717]">Products</span></h1>
        <div className="h-[2px] bg-black w-10">

        </div>
        </div>
        <div className='grid grid-cols-5 gap-5 mt-3 font-outfit '>
          {products.filter((item)=>item.category===singleProduct.category&&item._id!==singleProduct._id).slice(0,5).map((item)=>{
            return(
              <div onClick={()=>navigate(`/product/${item._id}`)}  className='text-[#494949] cursor-pointer'>
                <img className='w-[280px] h-[280px] mb-4' src={item.images[0]} alt="" />
                <p className=' text-[13px] font-[500] '>{item.name}</p>
                <p className='text-[16px] font-[600]'>${item.price}</p>

            </div>
            )
          })}
        </div>
      </div>
   

      
    </div>
  )
}

export default Details
