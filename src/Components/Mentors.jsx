import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ava01 from '/Images/chairman.png'


const Mentors = () => {
   
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        SwipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:4,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
                },

                },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                   
                },
            }
        ]

    }
  return (
    <div className='flex w-full mb-10 '>

    <div className='w-[80%] mx-auto'>
     
     <h1 className='text-4xl font-semibold text-center pt-14 pb-10'>Industry Mentors</h1>
     <Slider {...settings}>
         
        <div className=" py-4 px-3">
           <div className='flex items-center flex-col  mt-3'>
            <img src={ava01} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe1</h6>
                <p>Customer</p>
                <p>ABC</p>
            </div>
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex items-center flex-col  mt-3'>
            <img src={ava01} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe2</h6>
                <p>Customer</p>
                <p>ABC</p>
            </div>
           </div>
        </div>

         <div className=" py-4 px-3">
           <div className='flex flex-col items-center  mt-3'>
            <img src={ava01} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe3</h6>
                <p>Customer</p>
                <p>ABC</p>
            </div>
           </div>
        </div>

       <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={ava01} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe4</h6>
                <p>Customer</p>
                <p>ABC</p>
            </div>
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={ava01} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe5</h6>
                <p>Customer</p>
                <p>ABC</p>
            </div>
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={ava01} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John Doe5</h6>
                <p>Customer</p>
                <p>ABC</p>
            </div>
           </div>
        </div>

     </Slider>
     </div>
     </div>
  )
}

export default Mentors