import React, { useState } from 'react'
import { restAPI } from '../../api/api';
import Loader from '../../common/Loader/Loader';
import DemoAccaunt from './DemoAccaunt';
import LoginForm from './LoginForm';



const LoginPage = ({setIsAuth, getProfile, setProfileId}) => {

    const [error, setError] = useState(false)
    const [load, setLoad] = useState(false)
    const [isCaptcha, setIsCaptcha] = useState(null)
    const [captcha, setCaptcha] = useState('')
    const [values, setValues] = useState({email: '', password: '', rememberMe: true})
   

    const login = async (event) => {
        event.preventDefault()
        const responce = await restAPI.login(setLoad, values.email, values.password, values.rememberMe, captcha)
        if(responce.resultCode === 0) {
            setError(false)
            setValues({email: '', password: '', rememberMe: true})
            setIsAuth(true)
            setIsCaptcha(null)
            setProfileId(responce.data.userId)
            getProfile(responce.data.userId)
        } else {
            if(responce.resultCode === 10) {
                const responce = await restAPI.getSecurity()
                setIsCaptcha(responce.url)
            } else {
                setError(true)
                setTimeout(() => setError(false), 2000)
            }  
        }
    }

  return (
    <div className='loginpage'>
        <h2>Log in to your account</h2> 
        <DemoAccaunt />
        {error && <p style={{color: 'red', marginBottom: '10px'}}>Oops(= Incorrect Email or Password</p>}
        {load && <Loader />}
        {!load && <LoginForm isCaptcha={isCaptcha} captcha={captcha} setCaptcha={setCaptcha} login={login} values={values} setValues={setValues} /> }
    </div>
  )
}

export default LoginPage