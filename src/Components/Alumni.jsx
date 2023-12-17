import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p01 from '/Images/accenture.png';
import p02 from '/Images/adobe.png'
import p03 from '/Images/amazon.png'
import p04 from '/Images/grammarly.jpeg'
import p05 from '/Images/ibm.png'
import p06 from '/Images/tcs.png'
import p07 from '/Images/nvidia.jpeg'


const Alumni = () => {
   
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        SwipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:5,

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

    <div className='w-[60%] mx-auto'>
     
     <h1 className='text-4xl font-semibold text-center pt-14 pb-10'>Our Alumni Working At</h1>
     <Slider {...settings}>
         
        <div className=" py-4 px-3">
          
            <img src={p01} className='w-40 h-40 rounded-2' alt="" />
           
           
        </div>

        <div className=" py-4 px-3">
           <div className='flex items-center flex-col  mt-3'>
            <img src={p02} className='w-40 h-40 rounded-2' alt="" />
            
            
           </div>
        </div>

         <div className=" py-4 px-3">
           <div className='flex flex-col items-center  mt-3'>
            <img src={p03} className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

       <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p04} className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p05} className='w-40 h-40 rounded-2' alt="" />
            
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p06} className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p07} className='w-40 h-40 rounded-2' alt="" />
           
           </div>
        </div>

     </Slider>
     </div>
     </div>
  )
}

export default Alumni