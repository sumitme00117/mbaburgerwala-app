import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'

const Loader = () => {

  return (
    <div className='loader'>
      <IoFastFoodOutline/>
      <div>
        <div>Loading...</div>
      </div>
    </div>
  )
}

export default Loader
