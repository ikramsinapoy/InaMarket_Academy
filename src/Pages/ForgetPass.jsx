import React from 'react'
import FormForgetPass from '../Components/LoginRegis/FormForgetPass'
import Navbar from '../Components/Navigation/Navbar'
import forgetPassImg from '../Asset/resetpassword.png'

function ForgetPass() {
  return (
    <div>
        <Navbar/>
        <div className='md:flex items-center w-11/12 md:w-9/12 mx-auto my-10 md:mb-0'>
            <img src={forgetPassImg} className='mb-10 md:mb-0 md:w-1/2'/>
            <FormForgetPass/>
        </div>
    </div>
  )
}

export default ForgetPass