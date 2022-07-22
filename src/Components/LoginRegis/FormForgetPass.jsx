import React from 'react'

function FormForgetPass() {
  return (
    <div className='md:w-1/3 md:mx-auto'>
        <div className='mb-3'>
            <h2 class="font-Inter font-semibold text-lg mb-1.5 text-black">
                Lupa Password?
            </h2>
            <p className="text-sm text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>

        <div>
            <form>
                <div className='mb-4'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Email Address</p>
                    <input placeholder='Masukkan Email' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>

                <button className='p-2 w-full text-white bg-primary rounded-md'>Masuk</button>
            </form>
            
        </div>
    </div>
  )
}

export default FormForgetPass