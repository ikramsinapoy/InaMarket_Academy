import React from 'react'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'
import { TiShoppingCart } from 'react-icons/ti';
import { TbMessage } from 'react-icons/tb';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { GiPadlock } from 'react-icons/gi';
import { TbLanguage } from 'react-icons/tb';
import EditProfile from '../Components/Settings/EditProfile';
import Promo from '../Components/Notification/Promo';

function Notif() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 md:w-9/12 mx-auto my-10'>
            {/* <Promo/>  */}
            <div class="flex items-start gap-10">
                <div className='bg-white rounded-lg drop-shadow-lg py-5 border border-[#f1f3f5] w-1/3'>
                    <h2 class="font-Inter font-semibold text-base pb-3 px-5 border-b border-primary">
                        Notifikasi
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
                                <div className='flex gap-2'>
                                    <TiShoppingCart className='w-8'/>

                                    <div>
                                        <div className='flex justify-between items-center text-black mb-1'>
                                            <p>Promo 3.3!</p>

                                            <div className='flex gap-1 items-center'>
                                                <p className='text-xs'>02/05</p>
                                            </div>
                                        </div>
                                        <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
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
                                <div className='flex gap-2'>
                                    <TbMessage className='w-8'/>

                                    <div>
                                        <div className='flex justify-between items-center text-black mb-1'>
                                            <p>Pesan dari Rani</p>

                                            <div className='flex gap-1 items-center'>
                                                <p className='text-xs'>02/05</p>
                                            </div>
                                        </div>
                                        <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
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
                                <div className='flex gap-2'>
                                    <TiShoppingCart className='w-8'/>

                                    <div>
                                        <div className='flex justify-between items-center text-black mb-1'>
                                            <p>Promo 3.3!</p>

                                            <div className='flex gap-1 items-center'>
                                                <p className='text-xs'>02/05</p>
                                            </div>
                                        </div>
                                        <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="tab-content w-full" id="tabs-tabContentVertical">
                    <div class="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
                    aria-labelledby="tabs-home-tabVertical">
                        <Promo/>
                    </div>
                    <div class="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
                        {/* <ChangePass/> */}
                        Content
                    </div>
                    <div class="tab-pane fade" id="tabs-messagesVertical" role="tabpanel"
                    aria-labelledby="tabs-profile-tabVertical">
                        {/* <ChangeLanguage/> */}
                        Content
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Notif