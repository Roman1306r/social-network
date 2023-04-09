import React, { useEffect, useState } from 'react'
import { restAPI } from '../../api/api'


const Status = ({profile, profileId, meId, params}) => {


    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState('')
    const [status, setStatus] = useState('')


    const getStatus = async (id) => {
        const data = await restAPI.getStatus(id)
        setStatus(data)
    }
    const setMyStatus = async (value) => {
        if(value.length <= 1) return alert('Status is not valid')
        const data = await restAPI.setStatus(value)
        if(data.resultCode === 0)  getStatus(meId)
        setEditMode(false)
        setValue('')
    }

    useEffect(() => {
        getStatus(params.userId || meId)
    }, [params.userId])

  return (
    <div className='profile__user-body'>
                        <h3>{profile.fullName}</h3>

                        <p>About: {profile.aboutMe || 'no information'}</p>

                        <p className='somestatus'>Status: {status || '---'} {profileId == meId && !editMode && <button onClick={() => setEditMode(true)} className='my-page'>edit status</button>}</p>

                        {profileId == meId && editMode && 
                        <>
                            <input value={value} onChange={(event) => setValue(event.target.value)} type="text" style={{marginBottom: '10px'}} />

                            <button style={{backgroundColor: '#006DF0', color: 'white'}} onClick={() => setMyStatus(value)} className='my-page' >save</button>

                            <button style={{marginLeft: '10px'}} onClick={() => setEditMode(false)} className='my-page' >back</button>
                        </>}
    </div>
  )
}

export default Status