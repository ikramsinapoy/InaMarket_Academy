import React from 'react'
import FormRegis from '../Components/LoginRegis/FormRegis'
import Navbar from '../Components/Navigation/Navbar'
import regisImg from '../Asset/signup.png'

function Regis() {
  return (
    <div>
        <Navbar/>
        <div className='md:flex items-center w-11/12 md:w-9/12 mx-auto my-10 md:mb-0'>
            <img src={regisImg} className='mb-10 md:mb-0 md:w-1/2'/>
            <FormRegis/>
        </div>
    </div>
  )
}

export default Regis