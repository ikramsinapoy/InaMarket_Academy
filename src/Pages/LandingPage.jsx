import React from 'react'
import MainFeature from '../Components/LandingPage/MainFeature'
import MainInfo from '../Components/LandingPage/MainInfo'
import Reason from '../Components/LandingPage/Reason'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <MainInfo/>
        <Reason/>
        <MainFeature/>
        <Footer/>
    </div>
  )
}

export default LandingPage