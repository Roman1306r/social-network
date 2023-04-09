import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GiNewspaper } from 'react-icons/gi';
import { MdOutlineContactSupport } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
          <li><NavLink to='/profile'>
            <FaUserCircle />
            Profile
          </NavLink></li>
          <li><NavLink to='/users'>
            <HiOutlineUserGroup />
            Users
            </NavLink></li>
          <li><NavLink to='/posts'>
            <GiNewspaper />
            Posts
            </NavLink></li>
          <li><NavLink to='/contacts'>
            <MdOutlineContactSupport />
            Contats
            </NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar