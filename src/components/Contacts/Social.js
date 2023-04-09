import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';


const Social = () => {
  return (
    <div className='contacts__social'>
                <a href="https://github.com/Roman1306r"><AiOutlineGithub /></a>
                <a href="https://www.instagram.com/psychosocial10/"><BsInstagram /></a>
                <a href="https://t.me/DadkaRoch"><FaTelegramPlane /></a>
    </div>
  )
}

export default Social