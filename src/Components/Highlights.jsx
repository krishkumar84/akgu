

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faChalkboard, faHandshake, faBookOpenReader, faBookOpen } from '@fortawesome/free-solid-svg-icons';

function Highlights() {
  return (
    <div className='mt-9 bg-customWhite mb-10 p-4'>
      <h1 className='text-center font-semibold text-3xl sm:text-4xl text-customblue mb-4 p-6'>Key Highlights of Our Programme</h1>
      <div className='flex flex-wrap flex-row items-center justify-center px-4 md:px-24 pb-7 pt-10'>
       
        <div className="flex flex-col w-full shadow-lg  md:1/2 lg:w-1/4 lg:h-48 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white  ">
          <FontAwesomeIcon icon={faUser} className="h-10 mb-10 text-customblue" />
          <p className='text-center'>Hand Holding By Student Relationship Managers </p>
        </div>
        <div className="flex flex-col w-full shadow-lg md:1/2 lg:w-1/4 lg:h-48 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white ">
          <FontAwesomeIcon icon={faChalkboard} className="h-10 mb-10 text-customGreen" />
          <p className='text-center'>Hands-on & Immersive Learning </p>
        </div>
        <div className="flex flex-col w-full shadow-lg md:1/2 lg:w-1/4 lg:h-48 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white">
          <FontAwesomeIcon icon={faHandshake} className="h-10 mb-10 text-black" />
          <p className='text-center'>100+ Hiring Partners</p>
        </div>
        <div className="flex flex-col w-full shadow-lg md:1/2  lg:w-1/4 lg:h-48 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white">
          <FontAwesomeIcon icon={faBookOpenReader} className="h-10 mb-10 text-customblack" />
          <p className='text-center'>Hands-on & Immersive Learning </p>
        </div>
        <div className="flex flex-col w-full  shadow-lg md:1/2 lg:w-1/4 lg:h-48 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white">
          <FontAwesomeIcon icon={faUser} className="h-10 mb-10 text-customblue" />
          <p className='text-center'>Personalized Mentorship By Top Industry Leaders </p>
        </div>
        <div className="flex flex-col w-full shadow-lg md:1/2 lg:w-1/4 lg:h-48 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white">
          <FontAwesomeIcon icon={faBookOpen} className="h-10 mb-10 text-customGrey" />
          <p className='text-center'>Portfolio Building With Real-world Industry Projects </p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;


