import React from 'react'

function Testimonial() {
  return (
    <div className="bg-customblue w-full h-80 ">
        <h1 className='text-center text-white font-semibold text-4xl mb-7 '>Testimonials</h1>
        <div className='flex flex-row'>
        <div className='border-white border-2 w-1/2 font-normal mt-7 p-7 mr-5 ml-5'>
        <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias eos non, optio quo sapiente repellendus enim officiis accusantium laudantium nostrum deserunt sed tempore aliquam voluptatem harum maxime! Nesciunt, doloremque?</p>
        <p className='text-center mt-7 text-customYellow font-semibold'>Lorem ipsum .</p>
        <p className='text-sm text-center text-customYellow font-normal'>Lorem ipsum dolor sit.</p>
        </div>
        <div className='border-white border-2 w-1/2 font-normal mt-7 p-7 mr-5'>
         <p className='text-white text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet saepe numquam itaque deserunt modi vitae blanditiis eaque recusandae. Autem maxime delectus minima debitis quas hic quod ex velit expedita amet?</p>
         <p className='text-center mt-7 text-customYellow'>Lorem ipsum .</p>
         <p className='text-sm text-center text-customYellow font-normal'>Lorem ipsum dolor sit.</p>
        </div>
        </div>
       
      
    </div>
  )
}

export default Testimonial
