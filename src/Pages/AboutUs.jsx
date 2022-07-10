import React from 'react'
import CardTeam from '../Components/AboutUs/CardTeam'
import VisiMisi from '../Components/AboutUs/VisiMisi'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'

function AboutUs() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 md:w-9/12 mx-auto my-10'>
            <div className='md:w-2/4 mx-auto mb-16'>
                <h3 className='font-semibold text-3xl mb-5 font-Montserrat text-center'>Tentang Kami</h3>
                <p className='text-gray font-Inter text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
            </div>

            <VisiMisi/>

            <div className='md:w-2/4 mx-auto mb-16'>
                <h3 className='font-semibold text-3xl mb-5 font-Montserrat text-center'>Our Team</h3>
                <p className='text-gray font-Inter text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
            </div>

            <CardTeam/>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs