import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const [f_name, setFirstName] = useState("");
  const [l_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [ProgramType, setProgramType] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [otp, setOtp] = useState("");
  const [courses, setCourses] = useState("");
  const [error, setError] = useState(null);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isOtpVerified) {
        const res = await axios.post("https://akgu-backend.onrender.com/api/form", {
          f_name,
          l_name,
          email,
          mobile,
          state,
          city,
          courses,
        });
  
        console.log(res.data);
        if (res.data.success) {
          // If success is true, show a success toast
          toast.success('Form submitted successfully!', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 5000, // Close the toast after 5 seconds
          });
  
          setFirstName("");
          setLastName("");
          setEmail("");
          setMobile("");
          setState("");
          setCity("");
          setCourses("");
        } else {
          // If success is false, display the error message
          setError(res.data.message);
        }
      } else {
        // Show a message indicating that the OTP is not verified
        toast.warning('Please verify OTP before submitting the form.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    } catch (err) {
      // Handle other errors, e.g., network issues
      setError("An error occurred. Please try again.");
    }
  };



  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://akgu-backend.onrender.com/api/otp", { email });

      toast.success('otp sent successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // Close the toast after 5 seconds
      });
    } catch (err) {
      toast.error('Failed to sent OTP. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
      // Handle other errors, e.g., network issues
      setError("An error occurred. Please try again.");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://akgu-backend.onrender.com/api/verify", { otp });
      // console.log("Response from verifyOtp:", res.data);
      
      // console.log(res);

        // If success is true, show a success toast
        if (res.data.message==="OTP verified successfully") {
          toast.success(`${res.data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
          setIsOtpVerified(true);
          setOtp("");
        } else {
          toast.error(`Failed to verify OTP. ${res.data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
        }
      }
      catch (err) {
      console.error("Error in verifyOtp:", err);
      toast.error('Failed to verify OTP. Please try again.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
      // Handle other errors, e.g., network issues
      setError("An error occurred. Please try again.");
    }
  };


  

  return (
    <>
    <ToastContainer
    className="z-50"
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        theme="dark"
      />
      <h1 className="text-3xl text-center p-6 font-semibold">Know More</h1>
      <form
        className="flex flex-col items-center justify-center "
        onSubmit={handleSubmit}
      >
        <div className="m-1 w-[90%] flex">
          <input
            className=" p-2 m-1 w-[90%] border-2 rounded-md"
            type="text"
            id="f_name"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name*"
            required
          />
          <input
            className=" p-2 m-1 w-[90%] border-2 rounded-md"
            type="text"
            id="l_name"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name*"
            required
          />
        </div>
        <div className="m-1 w-[90%] flex">
          <input
            className=" p-2 w-[65%] border-2 rounded-md"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            required
          />

          <button
            onClick={sendEmail}
            className="bg-green-300 hover:bg-green-500 ml-2 py-1 px-4 rounded-lg"
            type="button"
          >
            Send OTP
          </button>
        </div>

        <input
          className=" p-2 m-1 w-[90%] border-2 rounded-md"
          type="tel"
          id="mobile"
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile*"
          required
        />

        <div className=" m-1 w-[90%] flex">
          <input
            className="p-2 w-[50%] border-2 rounded-md"
            type="text"
            id="otp"
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP*"
            required
          />

          <button
            onClick={verifyOtp}
            className="bg-green-300 hover:bg-green-500 ml-2 py-1 px-4 rounded-lg"
            type="button"
          >
            Verify
          </button>
          <button
            onClick={sendEmail}
            className="bg-blue-300 hover:bg-blue-500 ml-2 py-1 px-4 rounded-lg"
            type="button"
          >
            Resend
          </button>
        </div>

        <input
          className=" p-2 m-1 w-[90%] border-2 rounded-md"
          type="text"
          id="state"
          onChange={(e) => setState(e.target.value)}
          placeholder="State*"
          required
        />
        <input
          className=" p-2 m-1 w-[90%] border-2 rounded-md"
          type="text"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          required
        />
        <select
          className="p-2 m-1 w-[90%] border-2  rounded-md  text-gray-400 "
          id="programType"
          onChange={(e) => setProgramType(e.target.value)}
          required
        >
          <option className="text-gray-500" value="type" disabled selected>
            Select Program Type*
          </option>
          <option value="Certificate">PG</option>
          <option value="Diploma">UG</option>
        </select>

        <input
          className=" p-2 m-1 w-[90%] border-2 rounded-md"
          type="text"
          id="courses"
          onChange={(e) => setCourses(e.target.value)}
          placeholder="Courses or Programmes*"
          required
        />
        {isOtpVerified ?(
          <button
            className="bg-yellow-300 hover:bg-yellow-400 m-6 py-2 px-4  md:px-16 lg:px-24  rounded-lg"
            type="submit"
            // onClick={handleSubmit}
          >
            Submit
          </button>
        ):(
        <button className='bg-gray-300 m-6 py-2 px-4  md:px-16 lg:px-24  rounded-lg'>Submit</button>
        )}
      </form>
      
    </>
  );
}

export default Form;