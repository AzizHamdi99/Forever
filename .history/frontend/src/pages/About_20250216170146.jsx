import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/frontend_assets/assets";
import Footer from "../components/Footer";
import Subscribe from '../components/Subscribe'

function About() {
  return <div className="mx-32">
    <div className="flex gap-2 items-center justify-center ">
    <h1 className="text-center my-12 text-[30px] font-[600] text-[#707070] uppercase">About <span className="font-[600] text-[#171717]">Us</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div className="grid grid-cols-[1fr_1fr] items-center gap-12 text-[18px] font-[400] text-[#6D6D6D] ">
      <img src={assets.about_img} className="w-[686px] h-[686px]" alt="" />
      <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
        <br /><br />

        Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
<br /><br />
<span className="font-[500]">Our Mission</span>
<br /><br />

Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
    </div>
    <div className="flex gap-2 items-center  ">
    <h1 className="text-center my-12 text-[30px] font-[600] text-[#707070] uppercase">WHY <span className="font-[600] text-[#171717]">CHOOSE US</span></h1>
    <div className="h-[2px] bg-black w-10">

    </div>
    </div>
    <div className="flex justify-between mt-10 border-2 border-1-[#ABABAB] text-[18px] ">
      <div className="p-12 border-x-2">
        <h1 className="mb-4 font-bold">Quality Assurance:</h1>
      <p className="text-[#4B5563]">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
      </div>
      <div className="p-10 border-x-2">
        <h1 className="mb-4  font-bold">Convenience:</h1>
      <p className="text-[#4B5563]">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
      </div>
      <div className="p-10 border-x-2">
       <h1 className="mb-4 font-bold">Pexceptional Customer Service:</h1>
        
      <p className="text-[#4B5563]">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
      </div>
    </div>
    <Subscribe/>

   
    




  </div>;
}

export default About;
