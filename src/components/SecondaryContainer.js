import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const SecondaryContainer = () => {
 
  const movies = useSelector((store)=>store.movie.nowPlayingMovie);
  console.log(movies);
  return (
    <div>{
      //MovieList - Now Playing movie
      <Movielist title={"Now Playing Movies"} movies={movies} />
      //MovieList - Trending movie
      //MovieList - Most Popular movie
    }</div>
  )
}

export default SecondaryContainer