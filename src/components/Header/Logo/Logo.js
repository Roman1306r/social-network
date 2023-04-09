import React from 'react'
import logo from '../../../assets/logo.png'


const Logo = () => {
  return (
    <div className='header__logo'>
            <img width="55" height="55" src={logo} alt="logo"/>
            <h1>Social Network</h1>
    </div>
  )
}

export default Logo