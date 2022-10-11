import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h3 className='text-center lg:text-6xl text-3xl font-light mb-24'>Ar Tracking Image <br />
        <span className='font-bold'>100% Web Based</span>
      </h3>
      <Button />
    </div>
  )
}

export default Hero