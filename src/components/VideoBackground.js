import React from 'react';
import { useSelector } from 'react-redux';
import useVideoBackground from '../hooks/useVideoBackground';


const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store?.movie.movieTrailer);
  useVideoBackground(movieID);

  return (
    <div cl >
      <iframe className='aspect-video w-screen'
        src={"https://www.youtube.com/embed/" + trailer?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>


  )
}

export default VideoBackground;







