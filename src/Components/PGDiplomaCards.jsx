import React, { useState } from 'react';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons';


function PGDiplomaCards() {

  const [popupVisible1, setPopupVisible1] = useState(false);
  

  const openPopup1 = () => {
    setPopupVisible1(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup1 = () => {
    setPopupVisible1(false);
    document.body.style.overflow = 'auto';
  };


  return (
    <div className="  w-full h-auto flex flex-wrap flex-row items-center justify-center bg-customWhite">
   
   <div className="sm:w-3/4 h-[470px] md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className="overflow-hidden">
      <img className="h-[250px]  object-cover  " src="../../Images/pro1.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-customblue">Post Graduate Diploma</h3>
        <p className='text-customblue mb-2 text-xs'>(In Human Resource Management)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Diploma</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 1 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2" onClick={openPopup1}>Know More</button>
      </div>
    </div>
  </div>

  {popupVisible1 && (
          <div className="fixed w-[100vw] top-0 h-[100vh] bg-[#00000086]  flex items-center justify-center left-0 z-50">
            <div className="rounded-xl  w-[50%] md:w-[25%] m-auto shadow-2xl bg-[#f5f5f5]  border-yellow-300 border-2 ">
              
                <div className="">
                 <Form/>
                 <button
                  className=" top-0  sticky bg-yellow-300 px-4 py-2 rounded-tl-[50px]  text-5xl left-[60%]"
                  onClick={closePopup1}
                >
                  ×
                </button>
              
                 </div>
               
              </div>
            </div>
          
        )}
    
  <div className="sm:w-3/4  h-[470px] md:w-1/3 lg:w-1/4 w-full p-4  m-3 bg-white">
    <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro2.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue">Post Graduate Diploma</h3>
        <p className='text-customblue mb-2 text-xs'>(In Journalism And Mass Communication)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Diploma</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 1 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2" onClick={openPopup1}>Know More</button>
      </div>
    </div>
  </div>
     
  <div className="sm:w-3/4 h-[470px] md:w-1/3 lg:w-1/4 w-full p-4 m-3 bg-white">
    <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover" src="../../Images/pro3.jpeg" alt="" />
      <div className="p-4">
        <h3 className="text-xl  font-semibold mb-2 text-customblue">Post Graduate Diploma</h3>
        <p className='text-customblue mb-2 text-xs'>(In Finance And Accounting)</p>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree:Diploma</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 1 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2" onClick={openPopup1}>Know More</button>
      </div>
    </div>
  </div>
     
  

  </div>
  )
}

export default PGDiplomaCards
