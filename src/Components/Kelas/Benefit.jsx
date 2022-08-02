import React from 'react'
import { FaPlay } from 'react-icons/fa';
import { AiFillFileText } from 'react-icons/ai';
import { MdPeople } from 'react-icons/md';
import { GrCertificate } from 'react-icons/gr';
import { BsShareFill } from 'react-icons/bs';

function Benefit() {
  return (
    <div>
        <div className='px-5 py-4 bg-white border border-[#e9ecef] rounded-lg drop-shadow-lg'>
            <h2 class="font-Inter font-semibold text-base pb-3 border-b border-primary">
                Benefit yang kamu dapatkan!
            </h2>

            <div className='mt-3'>
                <p className='font-Inter text-sm text-black flex items-center gap-2.5 mb-3'><FaPlay className='fill-primary'/>Video Pelatihan</p>
                <p className='font-Inter text-sm text-black flex items-center gap-2.5 mb-3'><AiFillFileText className='fill-primary'/>File Dokumen Pelatihan</p>
                <p className='font-Inter text-sm text-black flex items-center gap-2.5 mb-3'><MdPeople className='fill-primary'/>Coaching session</p>
                <p className='font-Inter text-sm text-black flex items-center gap-2.5 mb-3'><GrCertificate className='fill-primary'/>Sertifikat Kompetensi</p>
                
                <button className='bg-primary p-2 text-white rounded-md w-full mb-3'>Beli Kelas</button>
                <button className='bg-white p-2 text-primary border rounded-md w-full flex items-center justify-center gap-2'>
                    <BsShareFill className='fill-primary'/>Bagikan
                </button>
            </div>
        </div>
    </div>
  )
}

export default Benefit