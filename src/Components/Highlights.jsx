

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faChalkboard, faHandshake, faBookOpenReader, faBookOpen } from '@fortawesome/free-solid-svg-icons';

function Highlights() {
  return (
    <div className='mt-9 bg-customWhite mb-10 p-4'>
      <h1 className='text-center font-semibold text-3xl sm:text-4xl text-customblue mb-4 '>Key Highlights of Our Programme</h1>
      <div className='flex flex-wrap flex-row items-center justify-center px-4 md:px-24 pb-7 pt-10'>
        <div className="flex flex-col w-full   md:1/2 lg:w-1/4 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white">
          <FontAwesomeIcon icon={faHouse} className="h-14 mb-4" />
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-full  md:1/2 lg:w-1/4 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white  ">
          <FontAwesomeIcon icon={faUser} className="h-14 mb-4" />
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-full  md:1/2 lg:w-1/4 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white ">
          <FontAwesomeIcon icon={faChalkboard} className="h-14 mb-4" />
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-full  md:1/2 lg:w-1/4 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white">
          <FontAwesomeIcon icon={faHandshake} className="h-14 mb-4" />
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-full  md:1/2  lg:w-1/4 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white">
          <FontAwesomeIcon icon={faBookOpenReader} className="h-14 mb-4" />
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-full  md:1/2 lg:w-1/4 items-center text-gray-600 mb-10 md:mr-6 p-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-white">
          <FontAwesomeIcon icon={faBookOpen} className="h-14 mb-4" />
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;


