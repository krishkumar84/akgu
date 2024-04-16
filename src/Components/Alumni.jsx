import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p01 from '/Images/samsung.jpg';
import p02 from '/Images/tech.jpg'
import p03 from '/Images/amazon.png'
import p04 from '/Images/hcl.jpg'
import p05 from '/Images/lava.jpg'
import p06 from '/Images/tcs.png'
import p07 from '/Images/nvidia.jpeg'
import p08 from '/Images/AccentureIcon.png'
import p09 from '/Images/airtel.png'
import p10 from '/Images/Byjus.png'
import p11 from '/Images/CapgeminiIcon.png'
import p12 from '/Images/CognizantIcon.png'
import p13 from '/Images/GoogleIcon.png'
import p14 from '/Images/Hitachi.png'






const Alumni = () => {
   
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        SwipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:7,

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
     
     <h1 className='text-4xl font-semibold text-center pt-14 pb-10'>Our Recruiters</h1>
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

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p08} className='w-28 h-28 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p09} className='w-28 h-28 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p10} className='w-28 h-28 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p11} className='w-28 h-28 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p12} className='w-28 h-28 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p13} className='w-28 h-28 rounded-2' alt="" />
           
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={p14} className='w-28 h-28 rounded-2' alt="" />
           
           </div>
        </div>

     </Slider>
     </div>
     </div>
  )
}

export default Alumni