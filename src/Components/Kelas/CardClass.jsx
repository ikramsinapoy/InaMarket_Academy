import React from 'react'
import course from '../../Asset/class.jpg';
import { AiFillStar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function CardClass() {
  return (
    <div>
        <div className='grid grid-cols-2 gap-8'>
            {/* <div className='bg-white rounded-lg drop-shadow-lg p-5 mt-10'> */}
                <div key={1} className='bg-white rounded-lg drop-shadow-lg p-5 border border-[#e9ecef] hover:border-2 hover:border-primary'>
                    <div className="bg-white flex justify-between p-4 rounded-xl">
                        <div className="w-1/3">
                            <img src={course} className='h-40 w-full rounded-lg'/>
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

                            
                        </div>
                    </div>

                    <p className="text-sm mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
                    
                    <div className="flex gap-10 mb-2.5">
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

                    <div className='flex justify-between'>
                        <div className="flex items-center gap-3 mb-2.5">
                            <s className="text-gray text-xs">Rp. 30.000</s>
                            <p className="text-primary text-sm font-semibold">Rp.25.000</p>
                        </div>

                        <button className='bg-primary text-white p-2 rounded-md'>
                            <Link to='/detail-kelas'>
                                Beli Kelas
                            </Link>
                        </button>
                    </div>
                </div>

                <div key={2} className='bg-white rounded-lg drop-shadow-lg p-5 border border-[#e9ecef] hover:border-2 hover:border-primary'>
                    <div className="bg-white flex justify-between p-4 rounded-xl">
                        <div className="w-1/3">
                            <img src={course} className='h-40 w-full rounded-lg'/>
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

                            
                        </div>
                    </div>

                    <p className="text-sm mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
                    
                    <div className="flex gap-10 mb-2.5">
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

                    <div className='flex justify-between'>
                        <div className="flex items-center gap-3 mb-2.5">
                            <s className="text-gray text-xs">Rp. 30.000</s>
                            <p className="text-primary text-sm font-semibold">Rp.25.000</p>
                        </div>

                        <button className='bg-primary text-white p-2 rounded-md'>Beli Kelas</button>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default CardClass