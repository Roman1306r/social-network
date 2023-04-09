import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BsCodeSlash } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';




const ProfileSocial = ({profile}) => {
  return (
    <div className='profile__user-right'>
                {profile?.contacts?.facebook && <a href={profile.contacts.facebook} target="_blank" ><FaFacebook /></a> }
                {profile?.contacts?.github && <a href={profile.contacts.github} target="_blank" ><FaGithub /></a> }
                {profile?.contacts?.instagram && <a href={profile.contacts.instagram} target="_blank" ><FaInstagram /></a> }
                {profile?.contacts?.mainLink && <a href={profile.contacts.mainLink} target="_blank" ><FaLink /></a> }
                {profile?.contacts?.twitter && <a href={profile.contacts.twitter} target="_blank" ><FaTwitter /></a> }
                {profile?.contacts?.vk && <a href={profile.contacts.vk} target="_blank" ><SlSocialVkontakte /></a> }
                {profile?.contacts?.website && <a href={profile.contacts.website} target="_blank" ><BsCodeSlash /></a> }
                {profile?.contacts?.youtube && <a href={profile.contacts.youtube} target="_blank" ><BsYoutube /></a> }
    </div>
  )
}

export default ProfileSocial