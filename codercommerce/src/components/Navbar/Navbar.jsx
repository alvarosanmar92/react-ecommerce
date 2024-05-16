import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
    const [menu,setMenu] = useState ("tienda")
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <img src={logo} alt="Logo tienda" />   
        <p>CoderCommerce</p> 
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("tienda")}}>Tienda{menu==="tienda"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("hombre")}}>Hombre{menu==="hombre"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mujer")}}>Mujer{menu==="mujer"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("niños")}}>Niño{menu==="niños"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar