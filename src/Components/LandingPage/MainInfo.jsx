import React from 'react'
import YouTube from 'react-youtube';

function MainInfo() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-11/12 md:w-9/12 mx-auto h-screen my-20 md:my-0'>
        <div className='md:w-1/3'>
            <h1 className='font-Montserrat text-5xl md:text-6xl font-bold'>Bla Bla Bla</h1>
            <div className='w-24 h-2 bg-primary mt-8 mb-6'></div>
            <p className='font-Inter text-xl mb-6 text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

            <div className='flex justify-center md:justify-start'>
              <button className='font-Inter bg-primary p-3 w-52 rounded-md text-white'>Belajar sekarang</button>
            </div>
        </div>

        <div className=''>
          <Example/>
           {/* <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            height="500px"
          /> */}
        </div>
    </div>
  )
}

class Example extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      // height: '390',
      // width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId='7-ovTjGe3JY' opts={opts} onReady={this._onReady} className=''/>;
  }
}

export default MainInfo;