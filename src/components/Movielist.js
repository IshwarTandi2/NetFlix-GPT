import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movies}) => {
  return (
    <div className='px-6 bg-black text-white'>
       <h1 className='text-3xl py-4 '>{title}</h1>
    <div className='flex overflow-x-scroll [scrollbar-width:none] '>
       <div className='flex  '>
        {movies?.map((movie)=>(
          <Moviecard key={movie.id} posterpath={movie.poster_path}/>)
        )};
        {/* <Moviecard posterPath={movies[0]?.poster_path}/> */}
       
      
       </div>
  
  </div>
       
    </div>
  )
}

export default Movielist