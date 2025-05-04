import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div>
        <div className='px-32 grid grid-cols-[3fr_1fr_1fr] gap-10'>
        <div>
            <img src={assets.logo} alt="" />
            <p className='text-[#595959] text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>
        <div>
            <p>
            COMPANY
            </p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li> Delivery</li>
                <li> Privacy policy</li>
            </ul>



        </div>
        <div>

            <p>GET IN TOUCH</p>
            <ul>
                <li>+1-212-456-7890</li>
                <li>greatstackdev@gmail.com</li>
            </ul>



        </div>
        </div>
      
    </div>
  )
}

export default Footer
