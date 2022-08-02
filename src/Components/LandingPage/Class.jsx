import React, { useRef } from "react";
import course from '../../Asset/class.jpg';
import Slider from "react-slick";
import { HiOutlineChevronRight } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';


function Class() {
    const customSlider = useRef();

  return (
    <div className='w-11/12 md:w-9/12 mx-auto mb-20 mt-28 md:mt-52'>
        <div className='md:w-2/4 mx-auto mb-16'>
            <h3 className='font-semibold text-3xl my-5 font-Montserrat text-center'>Ikuti Kelas Kami !</h3>
            <p className='text-gray font-Inter text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
        </div>

        <div className='bg-secondary p-5 mb-10 rounded-2xl'>
            <div className="flex justify-between mb-5">
                <h4 className='flex items-center text-lg font-Inter font-semibold'>Lihat Semua Kelas <HiOutlineChevronRight className='ml-2'/></h4>
            
                <div className='flex gap-5'>
                    <button className="bg-white p-2 rounded-full drop-shadow-md" onClick={() => customSlider.current.slickPrev()}>
                        <HiArrowLeft className="fill-primary"/>
                    </button>
                    <button className="bg-white p-2 rounded-full drop-shadow-md" onClick={() => customSlider.current.slickNext()}>
                        <HiArrowRight className="fill-primary"/>
                    </button>
                </div>
            </div>
            
            
            <div className="drop-shadow-lg">
                <Slider 
                    ref={slider => (customSlider.current = slider)}
                    dots= {false}
                    slidesToShow= {2}
                    infinite= {false}
                    speed= {500}
                    slidesToScroll= {1}
                    arrows={false}
                >
                <div key={1}>
                    <div className="bg-white flex justify-between px-3 py-5 rounded-xl mr-2">
                        <div className="w-1/3">
                            <img src={course} className='h-full rounded-lg w-full object-cover'/>
                        </div>

                        <div className="w-3/5">
                            <div className="w-1/4 border border-primary"></div>
                            <div className="flex items-center gap-5 my-3">
                                <h4 className='text-base font-Inter font-semibold'>Marketing Guide 101</h4>
                                <div className="bg-gray-dark p-1 rounded-full flex gap-2 items-center w-fit">
                                    <AiFillStar className="fill-yellow"/>
                                    <p className="text-white">4.9</p>
                                </div>
                            </div>

                            <div className="w-fit p-2 bg-pink border border-primary rounded-md mb-2.5">
                                <p className="text-primary text-xs">Marketing</p>
                            </div>
                            
                            <p className="text-gray text-sm mb-2.5">Oleh Kemenparekraf</p>

                            <p className="text-gray text-sm flex items-center gap-2 mb-2.5"><BsPeople/> 195 murid telah mendaftar</p>

                            <div className="flex items-center gap-3 mb-2.5">
                                <s className="text-gray text-xs">Rp. 30.000</s>
                                <p className="text-primary text-sm font-semibold">Rp.25.000</p>
                            </div>

                            <p className="text-sm mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
                            
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2">
                                    <AiOutlineClockCircle className="fill-primary"/>
                                    <p className="text-sm">52 Jam</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <BiBook className="fill-primary"/>
                                    <p className="text-sm">64 Lessons</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <BsStars className="fill-primary"/>
                                    <p className="text-sm">Level Dasar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div key={2}>
                    <div className="bg-white flex justify-between px-3 py-5 rounded-xl mr-2">
                        <div className="w-1/3">
                            <img src={course} className='h-full rounded-lg w-full object-cover'/>
                        </div>

                        <div className="w-3/5">
                            <div className="w-1/4 border border-primary"></div>
                            <div className="flex items-center gap-5 my-3">
                                <h4 className='text-base font-Inter font-semibold'>Marketing Guide 101</h4>
                                <div className="bg-gray-dark p-1 rounded-full flex gap-2 items-center w-fit">
                                    <AiFillStar className="fill-yellow"/>
                                    <p className="text-white">4.9</p>
                                </div>
                            </div>

                            <div className="w-fit p-2 bg-pink border border-primary rounded-md mb-2.5">
                                <p className="text-primary text-xs">Marketing</p>
                            </div>
                            
                            <p className="text-gray text-sm mb-2.5">Oleh Kemenparekraf</p>

                            <p className="text-gray text-sm flex items-center gap-2 mb-2.5"><BsPeople/> 195 murid telah mendaftar</p>

                            <div className="flex items-center gap-3 mb-2.5">
                                <s className="text-gray text-xs">Rp. 30.000</s>
                                <p className="text-primary text-sm font-semibold">Rp.25.000</p>
                            </div>

                            <p className="text-sm mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
                            
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2">
                                    <AiOutlineClockCircle className="fill-primary"/>
                                    <p className="text-sm">52 Jam</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <BiBook className="fill-primary"/>
                                    <p className="text-sm">64 Lessons</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <BsStars className="fill-primary"/>
                                    <p className="text-sm">Level Dasar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div key={3}>
                    <h3>3</h3>
                </div>
                <div key={4}>
                    <h3>4</h3>
                </div>
                <div key={5}>
                    <h3>5</h3>
                </div>
                <div key={6}>
                    <h3>6</h3>
                </div>
                </Slider>
            </div>
        </div>

        
    </div>
  )
}

export default Class