import React from 'react'

import blue from '../assets/blue.png'
import green from '../assets/green.png'
import yellow from '../assets/yellow.png'
import red from '../assets/red.png'

function Cards() {
  return (
    <div className='flex flex-wrap gap-8 items-center justify-center pt-10 pb-28 cursor-pointer'>
  <div className="yellow w-80 sm:w-72 h-44 sm:h-40 bg-yellow-400 text-white rounded-2xl relative">
    <img src={yellow} className='absolute right-1 top-1 pb-2 h-full' alt="" />
    <div className="text-overlay">
      <h1 className='text-3xl font-semibold pb-2 p-6'>25+</h1>
      <h3 className='text-2xl font-medium pl-4'>Years Of <br/> Excellence</h3>
    </div>
  </div>
  <div className="blue w-80 sm:w-72 h-44 sm:h-40 bg-blue-400 text-white rounded-2xl order-1 lg:order-2 relative">
    <img src={blue} className='absolute right-1  top-1 pb-2 h-full' alt="" />
    <div className="text-overlay">
      <h1 className='text-3xl font-semibold p-6'>80+</h1>
      <h3 className='text-2xl font-medium pl-4'>Hiring Partners</h3>
    </div>
  </div>
  <div className="red w-80 sm:w-72 h-44 sm:h-40 bg-[#ff0000cb] text-white rounded-2xl order-2 lg:order-3 relative">
    <img src={red} className='absolute right-1 top-1 pb-2 h-full' alt="" />
    <div className="text-overlay">
      <h1 className='text-3xl font-semibold p-6'>5K+</h1>
      <h3 className='text-2xl font-medium pl-4'>Learners</h3>
    </div>
  </div>
  <div className="green w-80 sm:w-72 h-44 sm:h-40 bg-green-400 text-white rounded-2xl order-3 lg:order-4 relative">
    <img src={green} className='absolute right-1 top-1 pb-2 h-full' alt="" />
    <div className="text-overlay">
      <h1 className='text-3xl font-semibold pb-3 p-6'>15+</h1>
      <h3 className='text-xl font-medium pl-4'>Programs and <br/> Specializations</h3>
    </div>
  </div>
</div>


  )
}

export default Cards
