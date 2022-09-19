import React from 'react'
import Category from '../Components/LandingPage/Category'
import Class from '../Components/LandingPage/Class'
import Learn from '../Components/LandingPage/Learn'
import MainFeature from '../Components/LandingPage/MainFeature'
import MainInfo from '../Components/LandingPage/MainInfo'
import Reason from '../Components/LandingPage/Reason'
import Testimoni from '../Components/LandingPage/Testimoni'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 xl:w-9/12 mx-auto my-20'>
          <MainInfo/>
          <Reason/>
          <MainFeature/>
          <Category/>
          <Class/>
          <Testimoni/>
          <Learn/>
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage