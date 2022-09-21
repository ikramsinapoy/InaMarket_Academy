import React from 'react'
import logo from '../../Asset/ina_academy.png'

function Reason() {
  return (
    <div>
        <div className='bg-secondary p-7 md:p-10 mb-7 md:mb-10 rounded-2xl flex items-center'>
            <div className='xl:flex md:gap-20 items-center justify-center'>
                <img src={logo} className=''/>

                <div className='2xl:w-2/5'>
                    <div className='w-1/5 my-7 md:my-0 h-2 bg-primary'></div>
                    <h3 className='font-semibold text-2xl md:text-3xl my-5 font-Montserrat'>Mengapa Ina Market Academy ?</h3>
                    <p className='text-gray font-Inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            
        </div>
       
    </div>
  )
}

export default Reason