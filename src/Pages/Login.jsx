import React from 'react'
import FormLogin from '../Components/LoginRegis/FormLogin'
import Navbar from '../Components/Navigation/Navbar'
import loginImg from '../Asset/login.png'

function Login() {
  return (
    <div>
        <Navbar/>
        <div className='md:flex items-center w-11/12 md:w-9/12 mx-auto my-10 md:mb-0'>
            <img src={loginImg} className='mb-10 md:mb-0 md:w-1/2'/>
            <FormLogin/>
        </div>
    </div>
  )
}

export default Login