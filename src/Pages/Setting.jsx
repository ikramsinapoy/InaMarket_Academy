import React from 'react'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'
import ChangeLanguage from '../Components/Settings/ChangeLanguage'
import ChangePass from '../Components/Settings/ChangePass'
import EditProfile from '../Components/Settings/EditProfile'
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { GiPadlock } from 'react-icons/gi';
import { TbLanguage } from 'react-icons/tb';

function Setting() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 xl:w-5/6 2xl:w-9/12 mx-auto my-10'>
            <h2 class="font-Inter font-semibold text-xl pb-5">
                Pengaturan
            </h2>
            <div class="flex flex-col 2xl:flex-row items-start gap-10">
                <div className='bg-white rounded-lg drop-shadow-lg py-5 border border-[#f1f3f5] w-full 2xl:w-1/3'>
                    <h2 class="font-Inter font-semibold text-base pb-3 px-5 border-b border-primary">
                        Menu
                    </h2>
                    <ul class="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0" id="tabs-tabVertical"
                    role="tablist">
                        <li class="nav-item flex-grow" role="presentation">
                        <a href="#tabs-homeVertical" class="
                            nav-link
                            block
                            font-semibold
                            text-sm
                            leading-tight
                            font-Inter
                            border-x-0 border-t-0 border-transparent
                            py-3
                            px-5
                            hover:border-transparent hover:bg-pink
                            focus:border-transparent focus:bg-pink
                            active
                            " id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
                            aria-controls="tabs-homeVertical" aria-selected="true">
                                <div className='flex gap-2 items-center'><MdOutlinePersonAddAlt/> Edit Profile</div>
                            </a>
                        </li>
                        <li class="nav-item flex-grow" role="presentation">
                        <a href="#tabs-profileVertical" class="
                            nav-link
                            block
                            font-semibold
                            text-sm
                            leading-tight
                            font-Inter
                            border-x-0 border-t-0 border-transparent
                            py-3
                            px-5
                            hover:border-transparent hover:bg-pink
                            focus:border-transparent focus:bg-pink
                            " id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-profileVertical" role="tab"
                            aria-controls="tabs-profileVertical" aria-selected="false">
                                <div className='flex gap-2 items-center'><GiPadlock/> Ganti Kata Sandi</div>
                            </a>
                        </li>
                        <li class="nav-item flex-grow" role="presentation">
                        <a href="#tabs-messagesVertical" class="
                            nav-link
                            block
                            font-semibold
                            text-sm
                            leading-tight
                            font-Inter
                            border-x-0 border-t-0 border-transparent
                            py-3
                            px-5
                            hover:border-transparent hover:bg-pink
                            focus:border-transparent focus:bg-pink
                            " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab"
                            aria-controls="tabs-messagesVertical" aria-selected="false">
                                <div className='flex gap-2 items-center'><TbLanguage/> Ganti Bahasa</div>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="tab-content w-full" id="tabs-tabContentVertical">
                    <div class="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
                    aria-labelledby="tabs-home-tabVertical">
                        <EditProfile/>
                    </div>
                    <div class="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
                        <ChangePass/>
                    </div>
                    <div class="tab-pane fade" id="tabs-messagesVertical" role="tabpanel"
                    aria-labelledby="tabs-profile-tabVertical">
                        <ChangeLanguage/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Setting