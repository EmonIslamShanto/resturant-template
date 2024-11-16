import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef(null);

  return (
    <div className='app__video'>
      <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted/>
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={() => {
            if (isPlaying) {
              vidRef.current.pause();
              setIsPlaying(false);
            } else {
              vidRef.current.play();
              setIsPlaying(true);
            }
          }}>
            {isPlaying ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
