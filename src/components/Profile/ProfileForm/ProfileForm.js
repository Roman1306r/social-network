import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { MdUpload } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BsCodeSlash } from 'react-icons/bs';
import { CiSaveDown1 } from 'react-icons/ci';
import { BsYoutube } from 'react-icons/bs';
import Button from '../../../common/Button/Button';
import { restAPI } from '../../../api/api';





const ProfileForm = ({setEditMode, profile, meId, getProfile}) => {
    
    const [photo, setPhoto] = useState(null)
    const [contacts, setContacts] = useState({github: '', vk: '', facebook: '', instagram: '', twitter: '', website: '', youtube: '', mainLink: ''})
    const [about, setAbout] = useState({fullName: '', lookingForAJob: true, lookingForAJobDescription: '', aboutMe: ''})


    const changeProfile = async (event) => {
        event.preventDefault()
        if(photo) await restAPI.setProfilePhoto(photo)
        let profile = {
            userId: meId,
            ...about,
            contacts
        }
        const profileData = await restAPI.setProfile(profile) 
        getProfile(meId)
        setEditMode(false)
    } 

  return (
    <div className='profile__form'>
        <div className='profile__form-body'>
            <div onClick={() => setEditMode(false)} className='profile__form-close'><AiOutlineClose /></div>
            <h2>Edit your data and click save</h2>
            <form onSubmit={changeProfile}>
                <div className='form__top'>
                    <label htmlFor='file'>
                        <input onChange={event => setPhoto(event.target.files[0])} id='file' type="file" />
                        <MdUpload />
                    </label>
                    <div style={{width: '100%'}}>
                        <p>Full Name: <input onChange={(event) => setAbout({...about, fullName: event.target.value})} value={about.fullName} placeholder={profile.fullName} type="text" /></p>
                        <p>Looking for a job: <input onChange={(event) => setAbout({...about, lookingForAJob: event.target.checked})} checked={about.lookingForAJob} type="checkbox" /></p>
                        <p>Looking for a suitable description: <input onChange={(event) => setAbout({...about, lookingForAJobDescription: event.target.value})} value={about.lookingForAJobDescription} placeholder={profile.lookingForAJobDescription} type="text" /></p>
                        <p>About me: <input onChange={(event) => setAbout({...about, aboutMe: event.target.value})} value={about.aboutMe} type="text" /></p>
                    </div>
                </div>
                <div className='form__contacts'>
                    <h3>Links to social networks</h3>
                    <p><FaFacebook /><input value={contacts.facebook} onChange={(event) => setContacts({...contacts, facebook: event.target.value})} type="text" placeholder='facebook'/></p>

                    <p><FaGithub /><input onChange={(event) => setContacts({...contacts, github: event.target.value})} value={contacts.github} type="text" placeholder='github'/></p>

                    <p><FaInstagram /><input onChange={(event) => setContacts({...contacts, instagram: event.target.value})}  value={contacts.instagram} type="text" placeholder='instagram'/></p>

                    <p><FaLink /><input onChange={(event) => setContacts({...contacts, mainLink: event.target.value})}  value={contacts.mainLink} type="text" placeholder='main link'/></p>

                    <p><FaTwitter /><input onChange={(event) => setContacts({...contacts, twitter: event.target.value})}  value={contacts.twitter} type="text" placeholder='twitter'/></p>

                    <p><SlSocialVkontakte /><input onChange={(event) => setContacts({...contacts, vk: event.target.value})}  value={contacts.vk} type="text" placeholder='vkontacte'/></p>

                    <p><BsCodeSlash /><input onChange={(event) => setContacts({...contacts, website: event.target.value})}  value={contacts.website} type="text" placeholder='website' /></p>

                    <p><BsYoutube /><input onChange={(event) => setContacts({...contacts, youtube: event.target.value})}  value={contacts.youtube} type="text" placeholder='youtube'/></p>
                </div>
                <Button children={<p>save<CiSaveDown1 /></p>} />
            </form>
        </div>
    </div>
  )
}

export default ProfileForm