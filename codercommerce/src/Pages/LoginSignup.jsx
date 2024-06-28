import React from 'react'
import './CSS/LoginSignup.css'


export const LoginSignup = () => {
  return (
  <div className='loginsignup'>
    <div className='loginsignup-container'>
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Tu nombre' />
        <input type="email" placeholder='Dirección Email' />
        <input type="password" placeholder='Contraseña' />
      </div>
      <button>Continuar</button>
      <p className="loginsignup-login">¿Tienes una cuenta ya creada? <span>Login</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p> Marcando, aceptas las condiciones de privacidad</p>
      </div>
    </div>
  </div>
  )
}

export default LoginSignup