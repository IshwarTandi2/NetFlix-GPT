import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movies}) => {
  return (
    <div className='px-2  text-white'>
       <h1 className='text-3xl py-4 font-medium '>{title}</h1>
    <div className='flex overflow-x-scroll [scrollbar-width:none] '>
       <div className='flex  '>
        {movies?.map((movie)=>(
          <Moviecard key={movie.id} posterpath={movie.poster_path}/>)
        )}
        
       
      
       </div>
  
  </div>
       
    </div>
  )
}

export default Movielist