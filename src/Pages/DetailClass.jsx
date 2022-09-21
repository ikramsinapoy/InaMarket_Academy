import React from 'react'
import Benefit from '../Components/Kelas/Benefit'
import Breadcrumbs from '../Components/Kelas/Breadcrumbs'
import CardDetailClass from '../Components/Kelas/CardDetailClass'
import ClassInformation from '../Components/Kelas/ClassInformation'
import Needs from '../Components/Kelas/Needs'
import ProgresBar from '../Components/Kelas/ProgresBar'
import Testimoni from '../Components/Kelas/Testimoni'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'

function DetailClass() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 xl:w-9/12 mx-auto my-10'>
            <Breadcrumbs/>
            <CardDetailClass/>
            <div className='flex justify-between'>
              <div className='w-4/6'>
                <ClassInformation/>
                <Testimoni/>
              </div>
              
              <div className='w-1/4'>
                <ProgresBar/>
                <Needs/>
                <Benefit/>
              </div>
              
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default DetailClass