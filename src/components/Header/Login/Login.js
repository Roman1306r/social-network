import React from 'react'
import { FiLogIn } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';
import { restAPI } from '../../../api/api';



const Login = ({isAuth, setIsAuth}) => {

  const logout = async () => {
      const data = await restAPI.logout()
      if(data.resultCode === 0) {
        setIsAuth(false)
      }
  }


  return (<>
    {isAuth ? <div onClick={logout} className='login'><CiLogout /><p>Log Out</p></div>
     : <div className='login'><FiLogIn /></div>}
  </>) 
}

export default Login