import React, { useState } from 'react';

function Form(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
      };
    
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
           <h1 className='text-3xl text-center p-6 font-semibold'>Know More</h1>
           <form className='flex flex-col items-center justify-center ' onSubmit={handleSubmit}>
             
              <input
               className=' p-2 m-1 w-[90%] border-2'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name*'
                required
              />
    
            
           
              <input
               className=' p-2 m-1 w-[90%] border-2'
               type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email*'
                required
              />
            
            
              <input
               className=' p-2 m-1 w-[90%] border-2'
               type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder='Mobile*'
                required
              />
            
    
              <input
               className=' p-2 m-1 w-[90%] border-2'
               type="text"
                name="State"
                value={formData.mobile}
                onChange={handleChange}
                placeholder='State*'
                required
              />
           
    
              <input
               className=' p-2 m-1 w-[90%] border-2'
               type="text"
                name="City"
                value={formData.mobile}
                onChange={handleChange}
                placeholder='City*'
                required
              />

                <input
               className=' p-2 m-1 w-[90%] border-2'
               type="text"
                name="City"
                value={formData.mobile}
                onChange={handleChange}
                placeholder='Courses or Programmes*'
                required
              />
            
            
            <button className='bg-yellow-300 m-6 py-2 px-4  md:px-16 lg:px-24  rounded-lg' type="submit" >Submit</button>
          </form> 
    
           </div>
           </div>
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

export default Form