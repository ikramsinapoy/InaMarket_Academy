import React from 'react'
import ProgresBar from '../Components/Kelas/ProgresBar'
import Materi from '../Components/MyCourse/Materi'
import Silabus from '../Components/MyCourse/Silabus'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'
import course from '../Asset/class.jpg';

function DetailMateri() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 xl:w-5/6 2xl:w-9/12 mx-auto my-10 '>
          <div className='flex flex-col xl:flex-row justify-between gap-10'>
            <div>
              <Silabus/>
              <ProgresBar/>
            </div>
            <div className='w-full'>
              <Materi/>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailMateri