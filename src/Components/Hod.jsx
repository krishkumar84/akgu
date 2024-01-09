import React from 'react'

function Hod() {
    return (
        <div>
          <div className="header flex justify-center items-center text-white h-20 w-full bg-black">
            <h1 className="font-bold text-2xl underline-offset-4">
              HOD
            </h1>
          </div>
          <div className="flex text-center flex-col sm:flex-row gap-16 sm:gap-56 p-8 sm:pl-12 w-full py-8">
            <div className="left w-full  sm:w-2/3 ">
              <h1 className='text-2xl text-center underline sm:no-underline sm:text-start mb-2 font-bold'>Information</h1>
              <p className='text-justify'>
                The vision of IT department is to produce highly competent and
                socially sensitive IT professionals and innovators, capable to excel
                in the multicultural and challenging industry scenario.
              </p>
            </div>
            <div className="right flex-col items-center justify-center w-2/3 sm:w-2/3">
                <div className="sm:w-full">
            <img
                  className="sm:w-1/4 w-full ml-10"
                  src="../../Images/hod.png"
                />
                <h1 className='text-lg text-center sm:text-start mb-2 ml-9 sm:ml-9 w-full sm:w-full font-bold'>PROF.RAHUL SHARMA</h1>
                </div>
            </div>
          </div>
        </div>
      );
}

export default Hod