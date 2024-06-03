import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
    	<div className="hero-left">
        <h2>Novedades</h2>
        
            <div className="hero-hand-icon">
                <p>Nuevo</p>
                <img src={hand_icon} alt="Icono de una mano" />
            </div>
            <p>Colecciones</p>
            <p>para todos</p>
              <div className="hero-latest-btn">
            <div>Última colección</div>
            <img src={arrow_icon} alt="imagen flecha" />
        </div>
        </div>
      
        <div className="hero-right">
            <img src={hero_image} alt="imagen de una chica" />

        </div>
    </div>
  )
}

export default Hero