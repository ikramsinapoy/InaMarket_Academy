import React from 'react'
import FormForgetPass from '../Components/LoginRegis/FormForgetPass'
import Navbar from '../Components/Navigation/Navbar'
import forgetPassImg from '../Asset/resetpassword.png'

function ForgetPass() {
  return (
    <div>
        <Navbar/>
        <div className='xl:flex items-center justify-center w-11/12 xl:w-9/12 mx-auto my-10 md:mb-0'>
            <img src={forgetPassImg} className='mb-10 xl:mb-0 md:w-1/2 mx-auto xl:mx-0'/>
            <FormForgetPass/>
        </div>
    </div>
  )
}

export default ForgetPass