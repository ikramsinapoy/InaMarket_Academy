import React, { useRef } from 'react'
import { AiFillStar } from 'react-icons/ai';
import man from '../../Asset/man.jpg';
import Slider from "react-slick";

function Testimoni() {
  const customSlider = useRef();

  return (
    <div>
        <div className='flex justify-between mb-3'>
            <h3 className='font-Inter font-semibold text-2xl text-black mb-3'>Testimoni</h3>
            <div className='flex items-center gap-2'>
                <AiFillStar className='fill-yellow'/>
                <h5 className='font-Inter font-semibold text-base text-black'>4.8 (30 Testimoni)</h5>
            </div>
        </div>

        <div className='flex justify-evenly mb-3'>
          <button className='bg-white p-2 border border-primary w-fit rounded-md'>
            <p className='font-Inter text-xs text-black'>Lihat Semua</p>
          </button>

          <button className='bg-white p-2 border border-[#E0E0E0] w-fit rounded-md'>
            <p className='font-Inter text-xs text-[#BFBFBF] flex gap-1 items-center'><AiFillStar className='fill-[#BFBFBF]'/>5 (12 Testimoni)</p>
          </button>

          <button className='bg-white p-2 border border-[#E0E0E0] w-fit rounded-md'>
            <p className='font-Inter text-xs text-[#BFBFBF] flex gap-1 items-center'><AiFillStar className='fill-[#BFBFBF]'/>4 (8 Testimoni)</p>
          </button>

          <button className='bg-white p-2 border border-[#E0E0E0] w-fit rounded-md'>
            <p className='font-Inter text-xs text-[#BFBFBF] flex gap-1 items-center'><AiFillStar className='fill-[#BFBFBF]'/>3 (5 Testimoni)</p>
          </button>

          <button className='bg-white p-2 border border-[#E0E0E0] w-fit rounded-md'>
            <p className='font-Inter text-xs text-[#BFBFBF] flex gap-1 items-center'><AiFillStar className='fill-[#BFBFBF]'/>2 (3 Testimoni)</p>
          </button>

          <button className='bg-white p-2 border border-[#E0E0E0] w-fit rounded-md'>
            <p className='font-Inter text-xs text-[#BFBFBF] flex gap-1 items-center'><AiFillStar className='fill-[#BFBFBF]'/>1 (2 Testimoni)</p>
          </button>
        </div>
        <div>
          <Slider
            ref={slider => (customSlider.current = slider)}
            infinite= {true}
            speed= {500}
            slidesToShow= {2}
            slidesToScroll= {1}
          >
            <div key={1}>
              <div className='border border-[#E0E0E0] rounded-lg p-5 mr-3'>
                <div className=' flex justify-between mb-5'>
                  <div className='flex items-center gap-3'>
                    <img src={man} className='rounded-full w-12'/> 
                    <div>
                      <p className='font-Inter text-black font-semibold text-sm'>Pratama</p>
                      <p className='font-Inter text-gray text-sm'>28 April 2022</p>
                    </div> 
                  </div>

                  <div className='flex gap-1'>
                    <AiFillStar className='fill-yellow'/>
                    <AiFillStar className='fill-yellow'/>
                    <AiFillStar className='fill-yellow'/>
                    <AiFillStar className='fill-yellow'/>
                    <AiFillStar className='fill-yellow'/>
                  </div>
                </div>

                <p className='font-Inter text-gray text-sm'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"</p>
              </div>
            </div>

            <div key={2}>
              <div className='border border-[#E0E0E0] rounded-lg p-5 mr-3'>
                <div className=' flex justify-between mb-5'>
                  <div className='flex items-center gap-3'>
                    <img src={man} className='rounded-full w-12'/> 
                    <div>
                      <p className='font-Inter text-black font-semibold text-sm'>Pratama</p>
                      <p className='font-Inter text-gray text-sm'>28 April 2022</p>
                    </div> 
                  </div>

                  <div className='flex gap-1'>
                    <AiFillStar className='fill-yellow'/>
                    <AiFillStar className='fill-yellow'/>
                    <AiFillStar className='fill-yellow'/>
                    <AiFillStar className='fill-yellow'/>
                    <AiFillStar className='fill-yellow'/>
                  </div>
                </div>

                <p className='font-Inter text-gray text-sm'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"</p>
              </div>
            </div>

            <div key={3}>
                <h3>3</h3>
            </div>
            <div key={4}>
                <h3>4</h3>
            </div>
            <div key={5}>
                <h3>5</h3>
            </div>
            <div key={6}>
                <h3>6</h3>
            </div>
          </Slider>
        </div>
        
    </div>
  )
}

export default Testimoni