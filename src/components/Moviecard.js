import React from 'react'
import { MOVIECARD_IMG_URL } from '../utils/constants'

const Moviecard = ({posterPath}) => {
  return (
    <div className='w-48'>
        <img alt='Movie card' src={MOVIECARD_IMG_URL+posterPath}></img>
    </div>
  )
}

export default Moviecard