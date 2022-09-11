import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import antMan from '../../Asset/antman.jpg'
import deadPool from '../../Asset/deadpool.jpg'
import course from '../../Asset/class.jpg';
import spiderman from '../../Asset/spiderman.jpg';

function CardTeam() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        <div className='bg-white rounded-lg drop-shadow-lg hover:drop-shadow-2xl p-5 border border-[#f1f3f5]'>
            <div className='mb-4'>
                <img src={antMan} className='rounded-lg h-52 w-full object-cover'/>
            </div>
            <div className='flex justify-between'>
                <p className='font-Inter text-base font-semibold mb-1'>Iron Man</p>

                <div className='flex gap-2'>
                    <button>
                        <BsLinkedin/>
                    </button>
                    <button>
                        <BsInstagram/>
                    </button>
                    <button>
                        <BsTwitter/>
                    </button>
                </div>
            </div>
            <p className='font-Inter text-base font-semibold text-gray mb-4'>Chief Executive Officer</p>
            <p className='font-Inter text-sm text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
        </div>

        <div className='bg-white rounded-lg drop-shadow-lg hover:drop-shadow-2xl p-5 border border-[#f1f3f5]'>
            <div className='mb-4'>
                <img src={deadPool} className='rounded-lg h-52 w-full object-cover'/>
            </div>
            <div className='flex justify-between'>
                <p className='font-Inter text-base font-semibold mb-1'>Iron Man</p>

                <div className='flex gap-2'>
                    <button>
                        <BsLinkedin/>
                    </button>
                    <button>
                        <BsInstagram/>
                    </button>
                    <button>
                        <BsTwitter/>
                    </button>
                </div>
            </div>
            <p className='font-Inter text-base font-semibold text-gray mb-4'>Chief Executive Officer</p>
            <p className='font-Inter text-sm text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
        </div>

        <div className='bg-white rounded-lg drop-shadow-lg hover:drop-shadow-2xl p-5 border border-[#f1f3f5]'>
            <div className='mb-4'>
                <img src={course} className='rounded-lg h-52 w-full object-cover'/>
            </div>
            <div className='flex justify-between'>
                <p className='font-Inter text-base font-semibold mb-1'>Iron Man</p>

                <div className='flex gap-2'>
                    <button>
                        <BsLinkedin/>
                    </button>
                    <button>
                        <BsInstagram/>
                    </button>
                    <button>
                        <BsTwitter/>
                    </button>
                </div>
            </div>
            <p className='font-Inter text-base font-semibold text-gray mb-4'>Chief Executive Officer</p>
            <p className='font-Inter text-sm text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
        </div>

        <div className='bg-white rounded-lg drop-shadow-lg hover:drop-shadow-2xl p-5 border border-[#f1f3f5]'>
            <div className='mb-4'>
                <img src={spiderman} className='rounded-lg h-52 w-full object-cover'/>
            </div>
            <div className='flex justify-between'>
                <p className='font-Inter text-base font-semibold mb-1'>Iron Man</p>

                <div className='flex gap-2'>
                    <button>
                        <BsLinkedin/>
                    </button>
                    <button>
                        <BsInstagram/>
                    </button>
                    <button>
                        <BsTwitter/>
                    </button>
                </div>
            </div>
            <p className='font-Inter text-base font-semibold text-gray mb-4'>Chief Executive Officer</p>
            <p className='font-Inter text-sm text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
        </div>
    </div>
  )
}

export default CardTeam