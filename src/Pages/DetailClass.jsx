import React from 'react'
import Benefit from '../Components/Kelas/Benefit'
import Breadcrumbs from '../Components/Kelas/Breadcrumbs'
import CardDetailClass from '../Components/Kelas/CardDetailClass'
import ClassInformation from '../Components/Kelas/ClassInformation'
import Needs from '../Components/Kelas/Needs'
import Testimoni from '../Components/Kelas/Testimoni'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'

function DetailClass() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 xl:w-5/6 2xl:w-9/12 mx-auto my-10'>
            <Breadcrumbs/>
            <CardDetailClass/>
            <div className='flex flex-col 2xl:flex-row justify-between mb-10 2xl:mb-0'>
              <div className='2xl:w-4/6 mb-10 2xl:mb-0'>
                <ClassInformation/>
              </div>
              
              <div className='2xl:w-1/4'>
                <Needs/>
                <Benefit/>
              </div>
            </div>
            <div className='2xl:w-4/6'>
              <Testimoni/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailClass