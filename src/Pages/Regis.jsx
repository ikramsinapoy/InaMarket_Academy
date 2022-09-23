import React from 'react'
import FormRegis from '../Components/LoginRegis/FormRegis'
import Navbar from '../Components/Navigation/Navbar'
import regisImg from '../Asset/signup.png'

function Regis() {
  return (
    <div>
        <Navbar/>
        <div className='xl:flex items-center justify-center w-11/12 xl:w-5/6 2xl:w-9/12 mx-auto my-10 md:mb-0'>
            <img src={regisImg} className='mb-10 xl:mb-0 md:w-1/2 mx-auto xl:mx-0' />
            <FormRegis/>
        </div>
    </div>
  )
}

export default Regis