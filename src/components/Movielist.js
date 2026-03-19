import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movies}) => {
  return (
    <div>
       <h1>{title}</h1>
    <div className='flex overflow-x-scroll'>
       <div className='flex '>
       <Moviecard key={movies.id} posterPath={movies[0].poster_path}/>
      
       </div>
  
  </div>
       
    </div>
  )
}

export default Movielist