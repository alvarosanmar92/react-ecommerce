import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusivo</h1>
            <h2>Ofertas para ti</h2>
            <p>Solo para los productos más vendidos</p>
            <button>Echa un vistazo</button>

        </div>
        <div className="offers-right"></div>
        <img src={exclusive_image} alt="" />

    </div>
  )
}


export default Offers