import React from 'react'
import Login from './Login/Login'
import Theme from './Theme/Theme'
import Logo from './Logo/Logo'
import { NavLink } from 'react-router-dom'
import { FaUserTie } from 'react-icons/fa';



const Header = ({setDarkMode, darkMode, isAuth, setIsAuth, meId}) => {
  return (
    <div className='header'>
        <Logo />
        <div className='header__body'>
            <Theme darkMode={darkMode} setDarkMode={setDarkMode} />
            {isAuth && <div className='header__profile'><NavLink to={'/profile/' + meId}><FaUserTie /></NavLink></div>}
            <Login setIsAuth={setIsAuth} isAuth={isAuth} />
        </div>
    </div>
  )
}

export default Header