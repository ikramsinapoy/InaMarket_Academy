import React from 'react'
import FormLogin from '../Components/LoginRegis/FormLogin'
import Navbar from '../Components/Navigation/Navbar'
import loginImg from '../Asset/login.png'

function Login() {
  return (
    <div>
        <Navbar/>
        <div className='xl:flex items-center justify-center w-11/12 xl:w-5/6 2xl:w-9/12 mx-auto my-10 md:mb-0'>
            <img src={loginImg} className='mb-10 xl:mb-0 md:w-1/2 mx-auto xl:mx-0'/>
            <FormLogin/>
        </div>
    </div>
  )
}

export default Login