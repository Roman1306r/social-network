import React from 'react'

const ProfileJob = ({profile}) => {
  return (
    <div className='profile__job'>
        <p>Looking for a job: <span>{profile.lookingForAJob ? 'Yes' : 'No'}</span></p>
        <p>Looking for a suitable description: <span>{profile.lookingForAJobDescription || '-'}</span></p>
    </div>
    
  )
}

export default ProfileJob