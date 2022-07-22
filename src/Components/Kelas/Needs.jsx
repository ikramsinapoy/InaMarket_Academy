import React from 'react'
import { BsLaptopFill } from 'react-icons/bs';
import { BsFileEarmarkWordFill } from 'react-icons/bs';
import { BsFileEarmarkExcelFill } from 'react-icons/bs';

function Needs() {
  return (
    <div>
        <div className='px-5 py-4 bg-white border border-[#e9ecef] rounded-lg drop-shadow-lg'>
            <h2 class="font-Inter font-semibold text-base py-3 border-b border-primary">
                Alat yang Dibutuhkan
            </h2>

            <div className='mt-3'>
                <p className='font-Inter text-sm text-black flex items-center gap-2.5 mb-3'><BsLaptopFill className='fill-primary'/>Laptop</p>
                <p className='font-Inter text-sm text-black flex items-center gap-2.5 mb-3'><BsFileEarmarkExcelFill className='fill-primary'/>Microsoft Excel</p>
                <p className='font-Inter text-sm text-black flex items-center gap-2.5'><BsFileEarmarkWordFill className='fill-primary'/>Microsoft Word</p>
            </div>
        </div>
    </div>
  )
}

export default Needs