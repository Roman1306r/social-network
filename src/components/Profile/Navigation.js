import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { restAPI } from '../../api/api';
import Button from '../../common/Button/Button';
import MiniLoader from '../../common/MiniLoader/MiniLoader';
import { BiUserX } from 'react-icons/bi';
import { BiUserPlus } from 'react-icons/bi';



const Navigation = ({meId, profile, params, profileId}) => {
  const [load, setLoad] = useState(false)
  const [followed, setFollowed] = useState(false)


  const checkFollow = async (id) => {
      const data = await restAPI.checkFollow(id)
      if(data) setFollowed(true)
  }
  const follow = async(id) => {
    setLoad(true)
    const data = await restAPI.follow(id)
    if(data?.resultCode === 0) setFollowed(true)
    setTimeout(() => setLoad(false), 500)
  }
  const unFollow = async(id) => {
    setLoad(true)
    const data = await restAPI.unFollow(id)
    if(data?.resultCode === 0) setFollowed(false)
    setTimeout(() => setLoad(false), 500)
  }


  useEffect(() => {
      checkFollow(profileId)
  }, [profileId])

  return (
    <div className='profile__navigation'>

        <NavLink to={'/profile/' + meId}><Button children={'My page'} /></NavLink>
        {followed ? <Button fn={() => unFollow(profileId)} children={load ? <MiniLoader /> : <p>Unfollow <BiUserX /></p>} /> : <Button fn={() => follow(profileId)} children={load ? <MiniLoader /> : <p>Follow <BiUserPlus /></p>} /> }

     </div> 
  )
}

export default Navigation