import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const SecondaryContainer = () => {
 
  const movies = useSelector((store)=>store.movie);
  
  return (
    <div>
     
      <Movielist title={"Now Playing "} movies={movies.nowPlayingMovie} />;
      <Movielist title={"Trending"} movies={movies.nowPlayingMovie} />;
      <Movielist title={"Popular"} movies={movies.nowPlayingMovie} />;
      <Movielist title={"Upcoming"} movies={movies.nowPlayingMovie} />;
      
    </div>
  )
}

export default SecondaryContainer