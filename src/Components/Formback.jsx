import React from 'react'
import Form from '../Components/Form';


const Formback = () => {
  return (
    <>
    <div className=" h-screen w-screen flex items-center justify-center  " style={{
        backgroundImage: 'url("/Images/backg.webp")' ,
         backgroundRepeat: 'no-repeat' ,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         width: '100%',
         objectFit: 'cover',
         backgroundAttachment: 'fixed',

   
   }}>

<div className='w-full flex items-center justify-center '>
          <div className='bg-white border-2  w-3/4 sm:w-1/3  lg:w-1/4  md:ml-auto md:mr-[10vw] relative border-yellow-300 rounded-lg'>
    <Form/>

    </div>
           </div>
      </div> 
    
    <div className='p-16  text-base sm:text-lg '>
      <p className='p-2 text-center'>Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow, and is approved by the All India Council for Technical Education. 
      </p>
      <p className='p-2 text-center'>The college was established in 1998 and offers B.Tech courses in nine disciplines of Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Civil Engineering. B.Tech programs in Computer Science.
      </p>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default Formback