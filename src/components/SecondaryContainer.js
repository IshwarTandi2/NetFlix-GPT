import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const SecondaryContainer = () => {
 
  const movies = useSelector((store)=>store.movie);
  
  return (
    <div>{
      //MovieList - Now Playing movie
      <Movielist title={"Now Playing Movies"} movies={movies.nowPlayingMovie} />
      //MovieList - Trending movie
      //MovieList - Most Popular movie
    }</div>
  )
}

export default SecondaryContainer