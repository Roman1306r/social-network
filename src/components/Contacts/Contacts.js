import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import MyWorks from './MyWorks';
import Social from './Social';



const Contacts = () => {

  return (
    <div className='contacts'>
        <h2>Contacts</h2>
        <p>I live in Belarus and have a higher technical education. My commercial development experience is 1 year. I do frontend development all my free time. It can be from 2 to 12 hours a day. If I don't make orders, I solve tasks on Leetcode or Codewars. If I don't do both, I write my pet projects or study something new. My working IDE is Visual Studio Code and licensed Webstorm. My favorite programming language is Javascript.</p>
        <h3>My latest works</h3>
        <div className='contacts__container'>
            <MyWorks />
        </div>
        <div className='contacts__links'>
            <h3><BsTelephone /> <a href='tel: +375292999873'>+375 29 299-98-73</a></h3>
            <h3><HiOutlineMail /> <a href='mailto:ivanovroc@gmail.com'>ivanovroc@gmail.com</a></h3>
        </div>
        <div className='contacts__footer'>
            <Social />
            <p>You can contact me from 9 to 6 on weekdays. The average response time is 1 hour.</p>
        </div>
    </div>
  )
}

export default Contacts