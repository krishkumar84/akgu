import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ava01 from '/Images/chairman.png'
import ava02 from '/Images/director.png'
import ava03 from "/Images/sarvachan-sir.png"
import ava04 from "/Images/ruchi-ma'am.png"
import ava05 from "/Images/hod.png"



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

    <div className='w-[70%] mx-auto'>
     
     <h1 className='text-4xl font-semibold text-center pt-14 pb-10 text-customblue'>Industry Mentors</h1>
     <Slider {...settings}>

       
        <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={ava01} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Sh. Ashok Pal</h6>
                <p>Chairman</p>
                <p>AKGEC</p>
            </div>
           </div>
        </div>  
       

        <div className=" py-4 px-3">
           <div className='flex items-center flex-col  mt-3'>
            <img src={ava02} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Dr R.K. Agarwal</h6>
                <p>Director General</p>
                <p>AKGEC</p>
            </div>
           </div>
        </div>

        <div className=" py-4 px-3">
           <div className='flex items-center flex-col  mt-3'>
            <img src={ava05} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Prof. Rahul Sharma</h6>
                <p>IT,HOD</p>
                <p>AKGEC</p>
            </div>
           </div>
        </div>

         <div className=" py-4 px-3">
           <div className='flex flex-col items-center  mt-3'>
            <img src={ava03} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Sarvachan Verma</h6>
                <p>Assistant Professor</p>
                <p>M.Tech, Ph.D*</p>
            </div>
           </div>
        </div>

       <div className=" py-4 px-3">
           <div className='flex flex-col items-center mt-3'>
            <img src={ava04} className='w-40 h-40 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Dr. Ruchi Gupta</h6>
                <p>Associate Professor</p>
                <p>Ph.D</p>
            </div>
           </div>
        </div>
  

     </Slider>
     </div>
     </div>
  )
}

export default Mentors