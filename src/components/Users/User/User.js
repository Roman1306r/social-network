import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BiUserX } from 'react-icons/bi';
import { BiUserPlus } from 'react-icons/bi';
import Button from '../../../common/Button/Button';
import { NavLink } from 'react-router-dom';
import { restAPI } from '../../../api/api';
import MiniLoader from '../../../common/MiniLoader/MiniLoader';



const User = ({photos, id, followed, name, status}) => {
  const [follow, setFollow] = useState(followed)
  const [load, setLoad] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const followUser = async (id) => {
    setDisabled(true)
    setLoad(true)
    const data = await restAPI.follow(id)
    if(data?.resultCode === 0) setFollow(!follow)
    setTimeout(() => setLoad(false), 500)
    setDisabled(false)
  }
  const unFollowUser = async (id) => {
    setDisabled(true)
    setLoad(true)
    const data = await restAPI.unFollow(id)
    if(data?.resultCode === 0) setFollow(!follow)
    setDisabled(false)
    setTimeout(() => setLoad(false), 500)
  }

  return (
    <div className='user'>
        <div className='user__info'>
            <NavLink className='user__info-photo' to={'/profile/' + id}>{photos?.small ? <img  src={photos.small} alt='avatar' /> : <FaUserAlt /> }</NavLink>    
            <div className='user__info-body'>
                <NavLink to={'/profile/' + id}><h3>{name}</h3></NavLink> 
                <p>{status || 'the status is missing'}</p>
            </div>
        </div>
        <div className='user__followed'>{follow ? <button className='unfollow' disabled={disabled} onClick={() => unFollowUser(id)} >{ load ? <MiniLoader /> :<BiUserX />}</button> : <Button disabled={disabled} children={load ? <MiniLoader /> : <BiUserPlus />} fn={() => followUser(id)} />}</div>
    </div>
  )
}

export default User