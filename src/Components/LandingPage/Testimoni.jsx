import React from 'react'
import man from '../../Asset/man.jpg';

function Testimoni() {
  return (
    <div>
        <div className='w-11/12 md:w-9/12 mx-auto mb-24 md:mb-48 mt-28 md:mt-52'>
        <div className='md:w-2/4 mx-auto mb-10 md:mb-16'>
            <h3 className='font-semibold text-3xl my-5 font-Montserrat text-center'>Kata Mereka Tentang Kami</h3>
            <p className='text-gray font-Inter text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-center md:gap-9'>
          <div className='md:w-3/12 p-8 bg-white rounded-lg drop-shadow-lg border border-[#f1f3f5]'>
            <div className='w-1/5 h-1 bg-primary mb-5'></div>
            <p className='text-gray font-Inter text-sm mb-9'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader."</p>

            <div className='flex items-center gap-4'>
                <img src={man} className='rounded-full w-12'/>
                <div>
                    <p className='font-Inter text-sm'>Aditya</p>
                    <p className='text-gray font-Inter text-sm'>CEO at Telkom Group</p>
                </div>
            </div>
          </div>

          <div className='md:w-3/12 p-8 bg-white rounded-lg drop-shadow-lg border border-[#f1f3f5]'>
            <div className='w-1/5 h-1 bg-primary mb-5'></div>
            <p className='text-gray font-Inter text-sm mb-9'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader."</p>

            <div className='flex items-center gap-4'>
                <img src={man} className='rounded-full w-12'/>
                <div>
                    <p className='font-Inter text-sm'>Deta</p>
                    <p className='text-gray font-Inter text-sm'>COO at Astra International</p>
                </div>
            </div>
          </div>

          <div className='md:w-3/12 p-8 bg-white rounded-lg drop-shadow-lg border border-[#f1f3f5]'>
            <div className='w-1/5 h-1 bg-primary mb-5'></div>
            <p className='text-gray font-Inter text-sm mb-9'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader."</p>

            <div className='flex items-center gap-4'>
                <img src={man} className='rounded-full w-12'/>
                <div>
                    <p className='font-Inter text-sm'>Pratama</p>
                    <p className='text-gray font-Inter text-sm'>CFO at Pertamina</p>
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Testimoni