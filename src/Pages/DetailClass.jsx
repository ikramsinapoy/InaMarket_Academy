import React from 'react'
import Breadcrumbs from '../Components/Kelas/Breadcrumbs'
import CardDetailClass from '../Components/Kelas/CardDetailClass'
import ClassInformation from '../Components/Kelas/ClassInformation'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'

function DetailClass() {
  return (
    <div>
        <Navbar/>
        <div className='w-9/12 mx-auto my-10'>
            <Breadcrumbs/>
            <CardDetailClass/>
            <ClassInformation/>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailClass