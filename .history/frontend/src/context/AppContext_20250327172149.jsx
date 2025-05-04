
import { createContext, useEffect, useState } from "react";

import{products}from'../assets/frontend_assets/assets'
export const AppContext=createContext(null)

const AppContextProvider=(props)=>{
    const [data,setData]=useState([]);
    const [category,setCategory]=useState(["Men","Women","Kids"])
    const [type,setType]=useState(["Topwear","Bottomwear"," Winterwear"])
    useEffect(()=>{
        setData(products);

    },[])
   
    //console.log(products)

   

    const value={
        data,setData,type,setType,category,setCategory

    }
    return (

        <AppContext.Provider value={value}>
{props.children}


        </AppContext.Provider>
    )

}
export default AppContextProvider