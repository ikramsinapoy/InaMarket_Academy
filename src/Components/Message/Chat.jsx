import React from 'react'
import antMan from '../../Asset/antman.jpg'
import { BsPlusLg } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

function Chat() {
  return (
    <div>
        <div className='bg-white rounded-lg drop-shadow-lg p-5 border border-[#f1f3f5]'>
            <div className='flex justify-between items-center border-b border-primary pb-3'>
                <div className='flex gap-3 items-center'>
                    <img src={antMan} className='w-10 h-10 rounded-full object-cover'/>
                    <h2 class="font-Inter font-semibold text-base">
                        Rani
                    </h2>
                </div>

                <p className='text-[#06BB02] text-sm font-semibold'>Online</p>
            </div>

            <div className='h-96'>

            </div>

            <div className='flex justify-between items-center border-t border-primary pt-3 px-5'>
                <BsPlusLg className='fill-primary'/>
                <form className='w-11/12'>
                    <input className='border p-2 border-[#D9D9D9] rounded-md w-full' placeholder='Ketik Pesan'/>
                </form>
                <FiSend className='stroke-primary'/>
            </div>
        </div>
    </div>
  )
}

export default Chat