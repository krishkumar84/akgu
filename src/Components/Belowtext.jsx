import React from 'react'

function Belowtext() {
  return (
    <>
    <div className=' w-full item-center'>
      <h1 className='text-center font-semibold text-4xl text-customblue mb-9'>Accredited. Respected. Trusted.</h1>
      <p className='flex flex-wrap text-center px-20 font-normal text-sm mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolore tempora accusantium mollitia, error quia beatae laborum commodi excepturi corporis consequatur nostrum ex recusandae officiis impedit sequi et laboriosam voluptates.</p>
      <p className='flex flex-wrap text-center px-20 font-normal text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolor dolores maxime facilis. Natus enim, aliquam tempore ratione, modi magnam dolor, sapiente repudiandae odit iusto quae. Provident, placeat culpa odio dicta dolorum nulla et dolor! Modi enim totam, sapiente repellat inventore excepturi in expedita doloribus incidunt qui atque, voluptatibus maiores.</p>
    </div>
    <div className="w-full flex flex-wrap flex-row items-center justify-center p-4 shadow-lg mr-6 bg-customWhite mt-20">
    <div className="overflow-hidden w-40 bg-white mr-10">
      <img className="h-32 object-cover" src="../../Images/naac.png" alt="" />
      </div>
      <div className="overflow-hidden w-40 bg-white mr-10">
      <img className="h-32 object-cover" src="../../Images/edu.webp" alt="" />
      </div>
      <div className="overflow-hidden w-40 bg-white mr-10">
      <img className="h-32 object-cover" src="../../Images/book_1.webp" alt="" />
      </div>
      <div className="overflow-hidden w-40 bg-white mr-10">
      <img className="h-32 object-cover" src="../../Images/as.webp" alt="" />
      </div>
      <div className="overflow-hidden w-40 bg-white mr-10">
      <img className="h-32 object-cover" src="../../Images/logo.webp" alt="" />
      </div>
      </div>
    </>
  )
}

export default Belowtext
