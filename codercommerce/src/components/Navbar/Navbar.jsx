import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
        <img src={logo} alt="Logo tienda" />   
        <p>CoderCommerce</p> 
        </div>
        <ul className="nav-menu">
            <li>Tienda<hr/></li>
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Niño</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar