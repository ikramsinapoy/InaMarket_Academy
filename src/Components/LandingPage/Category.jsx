import React from 'react'
import antMan from '../../Asset/antman.jpg'
import deadPool from '../../Asset/deadpool.jpg'
import course from '../../Asset/class.jpg';
import spiderman from '../../Asset/spiderman.jpg';

function Category() {
  return (
    <div>
        <div className='bg-secondary p-6 xl:p-10 mb-10 mt-20 md:mt-40 rounded-2xl'>
          <div className='flex justify-between'>
            <div>
              <div className='xl:w-1/3'>
                  <h3 className='font-semibold text-3xl mb-5 font-Montserrat '>Kategori</h3>
                  <p className='text-gray font-Inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established fact that a reader.</p>
              </div>
            </div>
            

            <div>
              <div class="columns-3xs">
                <img class="w-full aspect-video" src={antMan} />
                <img class="w-full aspect-square" src={deadPool} />
              </div>
            </div>
          </div>
            

        </div>
        
    </div>
  )
}

export default Category