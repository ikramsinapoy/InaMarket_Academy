import React from 'react'

function Promo() {
  return (
    <div>
        <div className='bg-pink p-3 rounded-lg drop-shadow-lg'>
            <h2 class="font-Inter font-semibold text-base px-5 py-3 border-b border-primary">
                Promo Bulan ini !
            </h2>
            <p className='font-Inter text-sm my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
            <div className='flex justify-center'>
              <button className='bg-primary p-2 text-white rounded-md'>Daftar Ina Academy</button>
            </div>
            
        </div>
    </div>
  )
}

export default Promo