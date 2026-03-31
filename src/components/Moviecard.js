import React from 'react'
import { MOVIECARD_IMG_URL } from '../utils/constants'

const Moviecard = ({posterpath}) => {
  return (
    <div className='w-48 mr-4'>
        <img alt='Movie card' src={MOVIECARD_IMG_URL+posterpath}></img>
    </div>
  )
}

export default Moviecard