import React from 'react'
import CardClass from '../Components/Kelas/CardClass'
import FilterAccordion from '../Components/Kelas/FilterAccordion'
import Promo from '../Components/Kelas/Promo'
import TesAccord from '../Components/Kelas/TesAccord'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'

function Kelas() {
  return (
    <div>
        <Navbar/>
        <div className='w-9/12 mx-auto mb-10'>
          <div className='my-9 bg-pink p-8 rounded-lg'>
              <h3 className='font-semibold text-3xl mb-5 font-Montserrat'>Ikuti Kelas Kami !</h3>
              <p className='text-gray font-Inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-10'>
              <FilterAccordion/>
              <Promo/>
            </div>
            
            <CardClass/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Kelas