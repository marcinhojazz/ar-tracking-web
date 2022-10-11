import React from 'react'

const Navbar = () => {
  return (
    <div className='lg:flex lg:justify-between lg:flex-row flex flex-col items-center p-4 relative'>
      <div>
        <a href="https:alkimera.tech" target="_blank">
          <h1 className='text-4xl font-extrabold uppercase'>Alkimera</h1>
        </a>
      </div>
      <div>
        <h2>Ar Tracking Image</h2>
      </div>
    </div>
  )
}

export default Navbar