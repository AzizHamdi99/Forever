import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div>
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

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



        </div>
      
    </div>
  )
}

export default Footer
