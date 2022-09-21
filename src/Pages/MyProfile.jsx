import React from 'react'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'
import { BiBookAlt } from 'react-icons/bi';
import EditProfile from '../Components/Settings/EditProfile';
import PersonalData from '../Components/MyProfile/PersonalData';
import Certificate from '../Components/MyProfile/Certificate';

function MyProfile() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 md:w-9/12 mx-auto my-10'>
            <div className='md:w-2/4 mx-auto mb-16'>
                <h3 className='font-semibold text-3xl mb-5 font-Montserrat text-center'>Profile Saya</h3>
                <p className='text-gray font-Inter text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
            </div>

            <div className='flex gap-8 items-center'>
                <div className='w-48 h-48 bg-white rounded-lg drop-shadow-lg p-2 border border-[#f1f3f5]'>
                    <div className='bg-gray-light rounded-lg w-full h-full'></div>
                </div>

                <div>
                    <h3 className='font-semibold text-2xl mb-2.5 font-Montserrat'>
                        Ikram Sinapoy
                    </h3>
                    <p className='text-gray font-Inter mb-2'>Bergabung Sejak 20 Maret 2022</p>
                    <p className='text-gray font-Inter flex gap-2 items-center'><BiBookAlt className='fill-primary'/> Telah Selesai 10 Kelas</p>
                </div>
            </div>

            <div>
                <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b border-gray-light pl-0 mb-4" id="tabs-tab"
                    role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-home" class="
                        nav-link
                        block
                        font-semibold
                        text-sm
                        text-gray
                        leading-tight
                        uppercase
                        border-x-0 border-t-0 border-transparent
                        px-10
                        py-3
                        my-2
                        hover:border-transparent 
                        focus:border-transparent
                        active
                        " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                        aria-selected="true">Data Diri</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabs-profile" class="
                        nav-link
                        block
                        font-semibold
                        text-sm
                        text-gray
                        leading-tight
                        uppercase
                        border-x-0 border-t-0 border-transparent
                        px-10
                        py-3
                        my-2
                        hover:border-transparent 
                        focus:border-transparent
                        " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                        aria-controls="tabs-profile" aria-selected="false">Sertifikat</a>
                    </li>
                </ul>
                <div class="tab-content" id="tabs-tabContent">
                    <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                        <PersonalData/>
                    </div>
                    <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                        <Certificate/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MyProfile