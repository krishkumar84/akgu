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
             backgroundImage: 'url("/Images/banner.jpg")' ,
              backgroundRepeat: 'no-repeat' ,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
    
        
        }}>
    
          <div className='bg-white border-2 w-1/4 border-yellow-300 rounded-lg'
        >
           <h1 className='text-3xl text-center p-6 font-semibold'>Know More</h1>
           <form className='flex flex-col items-center justify-center  ' onSubmit={handleSubmit}>
             
              <input
               className='m-4 p-2 w-[90%] border-2'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name*'
                required
              />
    
            <br />
           
              <input
               className='m-1 p-2 w-[90%] border-2'
               type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email*'
                required
              />
            <br />
            
              <input
               className='m-1 p-2 w-[90%] border-2'
               type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder='Mobile*'
                required
              />
            <br />
    
              <input
               className='m-1 p-2 w-[90%] border-2'
               type="text"
                name="State"
                value={formData.mobile}
                onChange={handleChange}
                placeholder='State*'
                required
              />
           <br />
    
              <input
               className='m-1 p-2 w-[90%] border-2'
               type="text"
                name="City"
                value={formData.mobile}
                onChange={handleChange}
                placeholder='City*'
                required
              />
            <br />
            <button className='bg-yellow-300 m-4 ' type="submit" >Submit</button>
          </form> 
    
           </div>
        </div> 
    
        <div className='p-16 text-lg '>
          <p className='p-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe exercitationem assumenda nihil harum similique iure facere error, id cupiditate minima omnis rerum, asperiores quas veritatis reprehenderit voluptatem quam ad culpa.
          </p>
          <p className='p-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo nobis quidem ea reiciendis tenetur, beatae cumque sequi veniam molestias officiis deleniti adipisci omnis itaque nemo tempore explicabo alias incidunt.
          </p>
        </div>
        <div>
          
        </div>
    </>
  )
}

export default Form