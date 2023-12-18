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
    <Form/>
      </div> 
    
    <div className='p-16  text-base sm:text-lg '>
      <p className='p-2 text-center'>Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow, and is approved by the All India Council for Technical Education. 
      </p>
      <p className='p-2 text-center'>The college was established in 1998 and offers B.Tech courses in nine disciplines of Engineeri, Electrical and Electronics Engineering, Mechanical Engineering and Civil Engineering. B.Tech programs in Computer Science.
      </p>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default Formback