import React, { useState } from 'react'
import { MdDone } from 'react-icons/md';


const DemoAccaunt = () => {

    const [textCopy, setTextCopy] = useState({email: 'wrq08482@nezid.com', password: '1234'})
    const [sucsessCopy, setSucsessCopy] = useState({email: false, password: false})
    const copyEmail = () => {
        setSucsessCopy({...sucsessCopy, email: true})
        navigator.clipboard.writeText(textCopy.email)
        setTimeout(() => setSucsessCopy({...sucsessCopy, email: false}), 2000)
    }
    const copyPassword = () => {
        setSucsessCopy({...sucsessCopy, password: true})
        navigator.clipboard.writeText(textCopy.password)
        setTimeout(() => setSucsessCopy({...sucsessCopy, password: false}), 2000)
    }


  return (
    <div className='loginpage__demo'>
            <p>Demo account:</p>
            <div className='demo'>
                <p>Email:    <span title='Copy' onClick={copyEmail}>{textCopy.email}</span> {sucsessCopy.email && <MdDone />}</p>
                <p>Password:   <span title='Copy' onClick={copyPassword}>{textCopy.password}</span> {sucsessCopy.password && <MdDone />}</p>
            </div>
    </div>
  )
}

export default DemoAccaunt