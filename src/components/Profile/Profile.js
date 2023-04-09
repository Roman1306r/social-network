import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../common/Loader/Loader'
import { FaUserTie } from 'react-icons/fa';
import ProfileSocial from './ProfileSocial';
import ProfileJob from './ProfileJob';
import Status from './Status';
import Navigation from './Navigation';
import Button from '../../common/Button/Button';
import ProfileForm from './ProfileForm/ProfileForm';




const Profile = ({setProfileId, getProfile, profile, profileId, meId}) => {

  const [load, setLoad] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const params = useParams()

  const getCurrentProfile = useCallback(() => {
    setLoad(true)
    setProfileId(params.userId || profileId)
    getProfile(params.userId || profileId)
    setTimeout(() => setLoad(false), 1000)
  }, [params.userId, profileId])


  
  useEffect(() => {
    getCurrentProfile()
  }, [params.userId])




  return (
    <div className='profile'>
        {load ? <Loader /> : <>
        {profileId != meId && <Navigation profileId={profileId} params={params} profile={profile} meId={meId} />} 
        {profileId == meId && !editMode && <Button fn={() => setEditMode(true)} children={'edit profile'} />}
        {!editMode && 
        <div className='profile__user'>   
            <div className='profile__user-left'>
                <div className='profile__user-top'>
                    <div className='profile__avatar'>{profile.photos?.small || profile.photos?.large ? <img src={profile.photos.large || profile.photos.small} alt='avatar' /> : <FaUserTie /> }</div>
                    <Status profile={profile} params={params} profileId={profileId} meId={meId} />
                </div>
                <ProfileJob profile={profile} />
            </div>
            <ProfileSocial profile={profile} />
        </div>}
        </>}
        {editMode && <ProfileForm getProfile={getProfile} meId={meId} profile={profile} setEditMode={setEditMode}  />}
    </div>
  )
}

export default Profile