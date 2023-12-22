import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [courses, setCourses] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://akgu-backend.onrender.com/api/form", { name, email, mobile, state, city, courses });

      if (res.data.success) {
        // If success is true, show a success toast
        toast.success('Form submitted successfully!', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 5000, // Close the toast after 5 seconds
        });

        setName("");
        setEmail("");
        setMobile("");
        setState("");
        setCity("");
        setCourses("");


      } else {
        // If success is false, display the error message
        setError(res.data.message);
      }
    } catch (err) {
      // Handle other errors, e.g., network issues
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      
          <h1 className='text-3xl text-center p-6 font-semibold'>Know More</h1>
          <form className='flex flex-col items-center justify-center ' onSubmit={handleSubmit}>
            <input
              className=' p-2 m-1 w-[90%] border-2 rounded-md'
              type="text"
              id="username"
              onChange={(e) => setName(e.target.value)}
              placeholder='Name*'
              required
            />

            <div className='m-1 w-[90%] flex'>
            <input
              className=' p-2 w-[65%] border-2 rounded-md'
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email*'
              required
            />

             <button className='bg-green-300 ml-2 py-1 px-4 rounded-lg' type='button'>
                Send OTP
               </button>
               </div>

            <input
              className=' p-2 m-1 w-[90%] border-2 rounded-md'
              type="tel"
              id="mobile"
              onChange={(e) => setMobile(e.target.value)}
              placeholder='Mobile*'
              required
            />

            <div className=' m-1 w-[90%] flex'>
            <input
               className='p-2 w-[50%] border-2 rounded-md'
               type='text'
               id='otp'
               onChange={(e) => setOtp(e.target.value)}
               placeholder='Enter OTP*'
               required
             />

            
              <button className='bg-green-300 ml-2 py-1 px-4 rounded-lg' type='button'>
                Verify
               </button>
                <button className='bg-blue-300 ml-2 py-1 px-4 rounded-lg' type='button'>
                 Resend
            </button>
            </div>

          
            <input
              className=' p-2 m-1 w-[90%] border-2 rounded-md'
              type="text"
              id="state"
              onChange={(e) => setState(e.target.value)}
              placeholder='State*'
              required
            />
            <input
              className=' p-2 m-1 w-[90%] border-2 rounded-md'
              type="text"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              placeholder='City'
              required
            />
              <select
                 className='p-2 m-1 w-[90%] border-2  rounded-md  text-gray-400 '
                 id="programType"
                 onChange={(e) => setProgramType(e.target.value)}
                 required
                 >
                 <option className='text-gray-500' value="type" disabled selected>Select Program Type*</option>
                 <option value="Certificate">PG</option>
                 <option value="Diploma">UG</option>
               </select>

            <input
              className=' p-2 m-1 w-[90%] border-2 rounded-md'
              type='text'
              id="courses"
              onChange={(e) => setCourses(e.target.value)}
              placeholder='Courses or Programmes*'
              required
            />
            <button className='bg-yellow-300 m-6 py-2 px-4  md:px-16 lg:px-24  rounded-lg' type="submit">Submit</button>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            newestOnTop={false}
            closeOnClick
            theme="dark"
          />
       
    </>
  );
}

export default Form;