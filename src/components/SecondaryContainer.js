import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const SecondaryContainer = () => {
 
  const movies = useSelector((store)=>store.movie);
  
  return (
    <div className='bg-black'>
     <div className='-mt-72 pl-12 relative z-20'>
      <Movielist title={"Now Playing "} movies={movies.nowPlayingMovie} />;
      <Movielist title={"Trending"} movies={movies.nowPlayingMovie} />;
      <Movielist title={"Popular"} movies={movies.nowPlayingMovie} />;
      <Movielist title={"Upcoming"} movies={movies.nowPlayingMovie} />;
      </div>
      
    </div>
  )
}

export default SecondaryContainer