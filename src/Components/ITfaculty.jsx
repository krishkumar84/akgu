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
            <div className="right flex-col items-center justify-center w-1/3">
               <div className="flex justify-between items-center ">
                <div className="">
            <img
                  className="w-1/4 ml-10"
                  src="../../Images/hod.png"
                />
                <h1 className='text-lg text-start mb-2 font-bold'>PROF.RAHUL SHARMA</h1>
                </div>
                <div className="">
            <img
                  className="w-1/4 ml-10"
                  src="../../Images/hod.png"
                />
                <h1 className='text-lg text-start mb-2 font-bold'>PROF.RAHUL SHARMA</h1>
                </div>
                <div className="">
            <img
                  className="w-1/4 ml-10"
                  src="../../Images/hod.png"
                />
                <h1 className='text-lg text-start mb-2 font-bold'>PROF.RAHUL SHARMA</h1>
                </div>
                <div className="">
            <img
                  className="w-1/4 ml-10"
                  src="../../Images/hod.png"
                />
                <h1 className='text-lg text-start mb-2 font-bold'>PROF.RAHUL SHARMA</h1>
                </div>
                </div>
            </div>
          </div>
        </div>
      );
}
export default ITfaculty
