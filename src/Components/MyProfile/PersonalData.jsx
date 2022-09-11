import React from 'react'

function PersonalData() {
  return (
    <div>
        <h3 className='font-Inter font-semibold text-2xl text-black mb-5' id='kelas'>Data Diri</h3>
        <div className='flex mb-2.5'>
            <div className='w-40'>
                <p className='text-black font-Inter text-sm'>Nama Depan</p>
            </div>
            
            <p className='text-black font-Inter text-sm'>: Ikram</p>
        </div>
        <div className='flex mb-2.5'>
            <div className='w-40'>
                <p className='text-black font-Inter text-sm'>Nama Belakang</p>
            </div>
            <p className='text-black font-Inter text-sm'>: Sinapoy</p>
        </div>
        <div className='flex mb-2.5'>
            <div className='w-40'>
                <p className='text-black font-Inter text-sm'>Username</p>
            </div>
            <p className='text-black font-Inter text-sm'>: ikram</p>
        </div>
        <div className='flex mb-2.5'>
            <div className='w-40'>
                <p className='text-black font-Inter text-sm'>Email</p>
            </div>
            <p className='text-black font-Inter text-sm'>: ikramsinapoy@gmail.com</p>
        </div>
        <div className='flex mb-2.5'>
            <div className='w-40'>
                <p className='text-black font-Inter text-sm'>Jenis Kelamin</p>
            </div>
            <p className='text-black font-Inter text-sm'>: Laki-laki</p>
        </div>
        <div className='flex mb-2.5'>
            <div className='w-40'>
                <p className='text-black font-Inter text-sm'>Tanggal Lahir</p>
            </div>
            <p className='text-black font-Inter text-sm'>: 17 Maret 2001</p>
        </div>
    </div>
  )
}

export default PersonalData