import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='  text-white  my-56 pt-36 px-10 absolute '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-xl w-1/4 font-medium'>{overview}</p>
      <div className='my-5'>
         <button className='bg-white text-white font-bold bg-opacity-50 b  px-6 rounded-md py-3'>▶️Play Now</button>
         <button className='bg-gray-500 px-6 rounded-md py-3 mx-3'>ℹ️More info</button>
      </div>
    </div>
  )
}

export default VideoTitle