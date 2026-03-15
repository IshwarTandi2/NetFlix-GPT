import React from 'react';
import { useSelector } from 'react-redux';
import useVideoBackground from '../hooks/useVideoBackground';


const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store?.movie.movieTrailer);
  useVideoBackground(movieID);

  return (
    <div className='w-screen ' >
      <iframe className='w-screen aspect-video ' 
        src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen= "allowfullscreen"></iframe>
    </div>


  )
}

export default VideoBackground;







