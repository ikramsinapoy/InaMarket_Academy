import React from 'react'
import { BsPeople } from 'react-icons/bs';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { CgScreen } from 'react-icons/cg';

function MainFeature() {
  return (
    <div className='w-9/12 mx-auto mb-20 mt-52'>
        <div className='w-2/4 mx-auto mb-16'>
            <h3 className='font-semibold text-3xl my-5 font-Montserrat text-center'>Fitur Utama Kami</h3>
            <p className='text-gray font-Inter text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
        </div>

        <div className='flex justify-around'>
          <div className='w-1/5 p-8 bg-white rounded-lg drop-shadow-lg'>
            <div className='bg-primary p-3 w-fit rounded-lg'>
              <BiBook style={{color: 'white', fontSize: '24px'}}/>
            </div>
            <h3 className='font-semibold text-lg my-5 font-Inter text-black'>Learning and Insight</h3>
            <div className='w-1/5 border-2 border-primary mb-5'></div>
            <p className='text-gray font-Inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
          </div>

          <div className='w-1/5 p-8 bg-white rounded-lg drop-shadow-lg'>
            <div className='bg-primary p-3 w-fit rounded-lg'>
              <CgScreen style={{color: 'white', fontSize: '24px'}}/>
            </div>
            <h3 className='font-semibold text-lg my-5 font-Inter text-black'>Expert Sharing</h3>
            <div className='w-1/5 border-2 border-primary mb-5'></div>
            <p className='text-gray font-Inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
          </div> 

          <div className='w-1/5 p-8 bg-white rounded-lg drop-shadow-lg'>
            <div className='bg-primary p-3 w-fit rounded-lg'>
              <AiOutlineIdcard style={{color: 'white', fontSize: '24px'}}/>
            </div>
            <h3 className='font-semibold text-lg my-5 font-Inter text-black'>Get Certification</h3>
            <div className='w-1/5 border-2 border-primary mb-5'></div>
            <p className='text-gray font-Inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
          </div> 

          <div className='w-1/5 p-8 bg-white rounded-lg drop-shadow-lg'>
            <div className='bg-primary p-3 w-fit rounded-lg'>
              <BsPeople style={{color: 'white', fontSize: '24px'}}/>
            </div>
            <h3 className='font-semibold text-lg my-5 font-Inter text-black'>Coaching Session</h3>
            <div className='w-1/5 border-2 border-primary mb-5'></div>
            <p className='text-gray font-Inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
          </div> 
        </div>
    </div>
  )
}

export default MainFeature