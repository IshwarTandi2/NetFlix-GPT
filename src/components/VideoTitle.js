import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video  text-white   pt-[20%] px-10 absolute bg-gradient-to-r from-black '>
      <h1 className='text-6xl font-bold pb-6'>{title}</h1>
      <p className='text-xl w-1/3 font-medium'>{overview}</p>
      <div className='my-5'>
         <button className='bg-white text-black font-bold p-4  px-12 text-xl rounded-md hover:bg-opacity-50'>▶️Play </button>
         <button className='bg-white text-black font-bold p-4  px-12 text-xl rounded-md mx-2 hover:bg-opacity-50'>ℹ️More info</button>
      </div>
    </div>
  )
}

export default VideoTitle