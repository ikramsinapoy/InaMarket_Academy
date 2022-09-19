import React from 'react'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
// import './responsive-player.css'

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

        <div className=''>
          {/* <Example/> */}
          {/* <VIdeoTeaser/> */}
          <ReactPlayer 
            url='https://youtu.be/Opksxsx8Sjw' 
            className=''
          />
          {/* <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              width='100%'
              height='100%'
              controls={true}
            />
          </div> */}
        </div>
    </div>
  )
}

function VIdeoTeaser(){
  const onReady = (event) =>{
    event.target.pauseVideo();
  }

  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  
    return (
      <YouTube videoId='Ir8S5GFCY6o' opts={opts} onReady={onReady} className=''/>
    );
}

class Example extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '215',
      width: '365',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId='Ir8S5GFCY6o' opts={opts} onReady={this._onReady} className=''/>;
  }
}

export default MainInfo;