import React from 'react'

function Cards() {
  return (
    <div className='flex flex-wrap gap-16 items-center justify-center pt-16 pb-28'>
      <div className="yellow w-64 h-36 bg-yellow-400 rounded-2xl">
        <h1 className='text-3xl font-semibold p-6'>25+</h1>
        <h3 className='text-2xl font-medium pl-4'>Years Of Excellence</h3>
      </div>
      <div className="blue w-64 h-36 bg-blue-500 text-white rounded-2xl">
        <h1 className='text-3xl font-semibold p-6'>25+</h1>
        <h3 className='text-2xl font-medium pl-4'>Years Of Excellence</h3>
      </div>
      <div className="red w-64 h-36 bg-red-500 text-white  rounded-2xl">
        <h1 className='text-3xl font-semibold p-6'>25+</h1>
        <h3 className='text-2xl font-medium pl-4'>Years Of Excellence</h3>
      </div>
      <div className="green w-64 h-36 bg-green-500 text-white rounded-2xl">
        <h1 className='text-3xl font-semibold p-6'>25+</h1>
        <h3 className='text-2xl font-medium pl-4'>Years Of Excellence</h3>
      </div>
    </div>
  )
}

export default Cards
