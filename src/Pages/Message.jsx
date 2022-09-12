import React from 'react'
import Chat from '../Components/Message/Chat'
import Footer from '../Components/Navigation/Footer'
import Navbar from '../Components/Navigation/Navbar'
import deadPool from '../Asset/deadpool.jpg'
import { BsCheckAll } from 'react-icons/bs';

function Message() {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 md:w-9/12 mx-auto my-10'>
            {/* <Chat/> */}
            <div class="flex items-start gap-10">
                <div className='bg-white rounded-lg drop-shadow-lg py-5 border border-[#f1f3f5] w-1/3'>
                    <h2 class="font-Inter font-semibold text-base pb-3 px-5 border-b border-primary">
                        Pesan
                    </h2>
                    <ul class="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0" id="tabs-tabVertical"
                    role="tablist">
                        <li class="nav-item flex-grow" role="presentation">
                        <a href="#tabs-homeVertical" class="
                            nav-link
                            block
                            text-sm
                            leading-tight
                            font-Inter
                            border-x-0 border-t-0 border-transparent
                            py-3
                            px-5
                            hover:border-transparent hover:bg-pink
                            focus:border-transparent focus:bg-pink
                            focus:font-semibold
                            active
                            " id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
                            aria-controls="tabs-homeVertical" aria-selected="true">
                                <div className='flex gap-2'>
                                    <img src={deadPool} className='h-6 w-6 object-cover rounded-full'/> 

                                    <div>
                                        <div className='flex justify-between items-center text-black mb-1'>
                                            <p>Rani</p>

                                            <div className='flex gap-1 items-center'>
                                                <p className='text-xs'>19.30</p>
                                                <BsCheckAll/>
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
                            text-sm
                            leading-tight
                            font-Inter
                            border-x-0 border-t-0 border-transparent
                            py-3
                            px-5
                            hover:border-transparent hover:bg-pink
                            focus:border-transparent focus:bg-pink
                            focus:font-semibold
                            " id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-profileVertical" role="tab"
                            aria-controls="tabs-profileVertical" aria-selected="false">
                                <div className='flex gap-2'>
                                    <img src={deadPool} className='h-6 w-6 object-cover rounded-full'/> 

                                    <div>
                                        <div className='flex justify-between items-center text-black mb-1'>
                                            <p>Ikram</p>

                                            <div className='flex gap-1 items-center'>
                                                <p className='text-xs'>19.30</p>
                                                <BsCheckAll/>
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
                            text-sm
                            leading-tight
                            font-Inter
                            border-x-0 border-t-0 border-transparent
                            py-3
                            px-5
                            hover:border-transparent hover:bg-pink
                            focus:border-transparent focus:bg-pink
                            focus:font-semibold
                            " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab"
                            aria-controls="tabs-messagesVertical" aria-selected="false">
                                <div className='flex gap-2'>
                                    <img src={deadPool} className='h-6 w-6 object-cover rounded-full'/> 

                                    <div>
                                        <div className='flex justify-between items-center text-black mb-1'>
                                            <p>Ananda</p>

                                            <div className='flex gap-1 items-center'>
                                                <p className='text-xs'>19.30</p>
                                                <BsCheckAll/>
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
                        <Chat/>
                    </div>
                    <div class="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical">
                        <Chat/>
                    </div>
                    <div class="tab-pane fade" id="tabs-messagesVertical" role="tabpanel"
                    aria-labelledby="tabs-profile-tabVertical">
                        <Chat/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Message