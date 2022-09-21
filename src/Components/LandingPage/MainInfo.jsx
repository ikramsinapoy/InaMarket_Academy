import React from 'react'
import YouTube from 'react-youtube';
import { useState } from 'react';
import { useEffect } from 'react';

function MainInfo() {
  return (
    <div className='flex flex-col-reverse 2xl:flex-row gap-20 justify-between items-center 2xl:mt-36 2xl:gap-0 mb-36'>
        <div className='2xl:w-1/3'>
            <h1 className='font-Montserrat text-5xl md:text-6xl font-bold'>Bla Bla Bla</h1>
            <div className='w-24 h-2 bg-primary mt-8 mb-6'></div>
            <p className='font-Inter text-xl mb-6 text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

            <div className='flex justify-center md:justify-start'>
              <button className='font-Inter bg-primary p-3 w-52 rounded-md text-white'>Belajar sekarang</button>
            </div>
        </div>

        <div>
          <VIdeoTeaser/>
        </div>
    </div>
  )
}

function VIdeoTeaser(){
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth
  })

  const detectSize = () =>{
    detectHW({
      winWidth: window.innerWidth
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return() => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  const onReady = (event) =>{
    event.target.playVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const optsResp = {
    height: '215',
    width: '360',
    playerVars: {
      autoplay: 1,
    },
  };


  return (
    <YouTube videoId='Opksxsx8Sjw' opts={windowDimension.winWidth < 700? optsResp : opts} onReady={onReady} className=''/>
  );
}

export default MainInfo;