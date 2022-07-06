import React from 'react'
import logo from '../../Asset/ina_academy.png'

function Reason() {
  return (
    <div>
        <div className='w-9/12 mx-auto bg-secondary p-10 mb-10 rounded-2xl h-80 flex items-center'>
            <div className='md:flex md:gap-20 items-center justify-center'>
                <img src={logo} className=''/>

                <div className='w-2/5'>
                    <div className='w-1/6 border-4 border-primary'></div>
                    <h3 className='font-semibold text-3xl my-5 font-Montserrat'>Mengapa Ina Market Academy ?</h3>
                    <p className='text-gray font-Inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            
        </div>
       
    </div>
  )
}

export default Reason