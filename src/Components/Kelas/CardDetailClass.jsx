import React from 'react'
import course from '../../Asset/class.jpg';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';

function CardDetailClass() {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-5 items-center justify-between bg-pink rounded-xl p-7 mb-9'>
        <div className="">
            <div className="w-fit p-2 border border-primary rounded-md mb-2.5">
                <p className="text-primary text-xs font-semibold font-Inter">Marketing</p>
            </div>

            <h4 className=' text-2xl xl:text-3xl font-Montserrat font-semibold text-black mb-2.5'>Marketing Guide 101</h4>

            
            
            <p className="text-gray text-sm mb-2.5 font-Inter">Oleh <span className='font-bold'>Kemenparekraf</span></p>

            <p className="text-gray text-sm flex items-center gap-2 mb-2.5 font-Inter"><BsPeople/> 195 murid telah mendaftar</p>

            <div className="flex gap-3 xl:gap-5">
                <div className="flex items-center gap-1">
                    <AiOutlineClockCircle className="fill-primary"/>
                    <p className="text-sm">52 Jam</p>
                </div> 

                <div className="flex items-center gap-1">
                    <BiBook className="fill-primary"/>
                    <p className="text-sm">64 Lessons</p>
                </div>

                <div className="flex items-center gap-1">
                    <BsStars className="fill-primary"/>
                    <p className="text-sm">Level Dasar</p>
                </div>
            </div>
        </div>

        <div>
            <img src={course} className='h-40 w-full rounded-lg'/>
        </div>
    </div>
  )
}

export default CardDetailClass