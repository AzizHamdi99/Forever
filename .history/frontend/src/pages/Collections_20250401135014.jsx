import React, { useContext,useEffect,useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';
import { useAdminStore } from '../stores/useAdminStore';


function Collections() {
  const [category,setCategory]=useState(["Men","Women","Kids"])
    const [type,setType]=useState(["Topwear","Bottomwear","Winterwear"])
  const navigate=useNavigate()
  const{products}=useAdminStore()
  const [sortOption, setSortOption] = useState('lowToHigh');

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
  
    // Toggle category selection
    const toggleCategory = (category) => {
      setSelectedCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      );
    };
    const toggleType = (type) => {
      setSelectedTypes((prev) =>
        prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
      );
    };
  
  const filteredItems = products.filter((item) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);

    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.subcategory);

    return matchesCategory && matchesType;
  });


  
  // Sort filtered items based on the selected sort option
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOption === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'highToLow') {
      return b.price - a.price;
    }
    return 0;
  });
  useEffect(()=>{
    console.log(selectedCategories)
    console.log(selectedTypes)
    
  },[selectedCategories,selectedTypes])
  return (
    <div className='flex mx-32 mt-16 gap-9'>
      <div>
        <p className='text-[#212121] text-[25px] font-[400] mb-6'>Filters</p>
        <div className='flex flex-col gap-2 border-[1px] border-[#C8C8C8] p-3 w-[315px] pl-5'>
          <p className='text-[#212121] text-[16px] font-[400] uppercase'>category</p>
          {category.map((item)=>{
            return(
              <div className='flex gap-2 '>
              <input type="checkbox" 
              checked={selectedCategories.includes(item)}
              onChange={()=>toggleCategory(item)}
              />
              <p className='text-[#272727] text-[16px] font-[300]'>{item}</p>
              </div>

              

            )
          })}

        </div>
        <div className='flex flex-col gap-2 border-[1px] border-[#C8C8C8] p-3 w-[315px] mt-5 pl-5' >
          <p className='text-[#212121] text-[16px] font-[400] uppercase'>type</p>
          {type.map((item)=>{
            return(
              <div className='flex gap-2'>
              <input type="checkbox" 
              checked={selectedTypes.includes(item)}
              onChange={()=>toggleType(item)}
              />
              <p className='text-[#272727] text-[16px] font-[300]'>{item}</p>
              </div>

              

            )
          })}

        </div>
      </div>
      <div >
        <div className='flex items-center justify-between' >
          <div className=' flex items-center gap-2 '>
            <p className='text-[35px] font-[600] text-[#707070]'>
            All <span className='text-[#343434]'> Collections  </span>
            </p>
            <div className='h-[2px] w-7 bg-black mt-3'>

            </div>
          </div>
          <select name="" id="" className='p-2 border-[1px] border-[#C8C8C8]' value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="lowToHigh">Sort by :Price Low To High </option>
          <option value="highToLow">Sort by :Price Hight To Low </option>
          
          

          </select>
        
          
        </div>
        
        <div>
        <div className='grid grid-cols-4 gap-5 mt-3 font-outfit '>
    {sortedItems.map((item)=>{
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
      

      
    </div>
  )
}

export default Collections
