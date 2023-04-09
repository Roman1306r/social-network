import React from 'react'
import Button from '../../common/Button/Button';
import { FiLogIn } from 'react-icons/fi';


const LoginForm = ({values, setValues, login, isCaptcha, captcha, setCaptcha}) => {


  return (
    <form onSubmit={login} className='loginpage__form'>
            <input value={values.email} onChange={(event) => setValues({...values, email: event.target.value}) } placeholder='email' type="email" />
            <input onChange={(event) => setValues({...values, password: event.target.value}) } value={values.password} placeholder='password' type="text" />
            <div className='remember'>
                <input type="checkbox" checked={values.rememberMe} onChange={() => setValues({...values, rememberMe: !values.rememberMe})} />
                <p>remember me</p>
            </div>
            {isCaptcha && <div className='captcha'><img src={isCaptcha} alt="captcha" /><input type={'text'} value={captcha} onChange={(event) => setCaptcha(event.target.value)} /></div>}
            
            <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
                <Button children={<><FiLogIn /><p>Log In</p></>} />
                <a href='https://social-network.samuraijs.com/' className='loginpage__link' target="_blank">More Detailed</a>
            </div>
    </form>
  )
}

export default LoginForm