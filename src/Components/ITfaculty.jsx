import React from 'react'

function ITfaculty() {
  return (
        <div>
          <div className="header flex justify-center items-center text-white h-20 w-full bg-black">
            <h1 className="font-bold text-2xl underline-offset-4">
              IT faculty
            </h1>
          </div>
          <div className="flex text-center flex-col  gap-40 pl-12 w-full  py-8">
            <div className="left  w-2/3 ">
              <h1 className='text-2xl text-start mb-2 font-bold'>Information</h1>
              <p className='text-justify'>
                The vision of IT department is to produce highly competent and
                socially sensitive IT professionals and innovators, capable to excel
                in the multicultural and challenging industry scenario.
              </p>
            </div >
            <div className="right flex-col  w-full">
               <div className="flex justify-between items-center gap-8 ">
                <div className=" ">
            <img
                  className="w-1/3 ml-10"
                  src="https://www.akgec.ac.in/wp-content/uploads/2023/04/gopal_babu.jpg"
                />
                <h1 className='text-lg text-start mb-2 font-bold'>Dr. Gopal Babu</h1>
                </div>
                <div className="">
            <img
                  className="w-1/4 ml-10"
                  src="https://www.akgec.ac.in/wp-content/uploads/2023/04/anupama.jpg"
                />
                <h1 className='text-lg text-start mb-2 font-bold'>Dr. Anupama Sharma</h1>
                </div>
                <div className="">
            <img
                  className="w-1/4 ml-10"
                  src="https://www.akgec.ac.in/wp-content/uploads/2023/04/aditya.jpg"
                />
                <h1 className='text-lg text-start mb-2 font-bold'>Dr. Aditya Pratap Singh</h1>
                </div>
                <div className="">
            <img
                  className="w-1/3 ml-10"
                  src="https://www.akgec.ac.in/wp-content/uploads/2023/04/RUCHI-GUPTA.jpg"
                />
                <h1 className='text-lg text-start mb-2 font-bold'>Dr. Ruchi Gupta</h1>
                </div>
                </div>
            </div>
          </div>
        </div>
      );
}
export default ITfaculty
