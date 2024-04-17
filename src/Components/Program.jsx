import { useState } from 'react';
import BachelorCards from './BachelorCards';
import MasterCards from './MasterCards';
import PGDiplomaCards from './PGDiplomaCards';


function Program() {

  const [selectedDegree, setSelectedDegree] = useState('bachelor');

  const handleOnClick_1 = () => {
    setSelectedDegree('bachelor');
  };

  const handleOnClick_2 = () => {
    setSelectedDegree('master');
  };

  const handleOnClick_3 = () => {
    setSelectedDegree('pgDiploma');
  };

  return (
    <div className=" bg-customWhite" >
    <h1 className='font-semibold text-2xl sm:text-4xl p-12 text-center  text-customblue '>OUR TOP PROGRAMMES</h1>
    <div className='flex flex-wrap flex-row items-center justify-center mb-24 mr-4 ml-5'>
      <ul className='flex flex-wrap flex-row items-center mb-8  justify-evenly w-full md:w-3/4'>
        <li className={`uppercase mr-4 text-center text-lg hover:cursor-pointer ${selectedDegree === 'bachelor' ?   'border-b-4 border-customYellow ' : ''}`} onClick={handleOnClick_1}>Bachelor</li>
        <li className={`uppercase mr-4 text-center text-lg hover:cursor-pointer ${selectedDegree === 'master' ? 'border-b-4 border-customYellow ' : ''}`} onClick={handleOnClick_2}>Master</li>
        <li className={`uppercase mr-36 text-center text-lg hover:cursor-pointer ${selectedDegree === 'pgDiploma' ? 'border-b-4 border-customYellow  ' : ''}`} onClick={handleOnClick_3}>PG Diploma</li>
      </ul>

    
      {selectedDegree === 'bachelor' && <BachelorCards />}
       {selectedDegree === 'master' && <MasterCards />}
      {selectedDegree === 'pgDiploma' && <PGDiplomaCards />} 
    </div>

     <div className='w-full  bg-customblue flex flex-wrap   box-border  '>
      <div className='flex  flex-row flex-wrap align-middle justify-center text-center space-around px-10 md:px-24 py-8  '>

    <div className='w-full md:w-1/2 lg:w-1/4 lg:border-r-2 md:border-gray-300  flex items-center justify-center flex-col  p-4'>
      <h2 className='text-white font-normal text-center text-lg mb-3.5'>Flexible</h2>
      <p className='text-customWhite text-sm'>Freedom to juggle between full time job and pursuing a coveted degree</p>
     </div>
    
     <div className='w-full md:w-1/2 lg:w-1/4 lg:border-r-2 md:border-gray-300  flex items-center justify-center flex-col p-4'>
      <h4 className='text-white font-normal text-center text-lg mb-3.5'>Affordable</h4>
      <p className='text-customWhite text-sm'>AffordableGreat value in terms of both tuition fee & the fact that you can continue to work</p>
     </div>

     <div className='w-full md:w-1/2 lg:w-1/4 lg:border-r-2 md:border-gray-300  flex items-center justify-center flex-col p-4 '>
      <h4 className='text-white font-normal text-center text-lg mb-3.5'>Virtual Job Fairs & Job Assistance</h4>
      <p className='text-customWhite text-sm'>Opportunity to connect with recruiters from leading corporates</p>
     </div>

     <div className='w-full md:w-1/2 lg:w-1/4  flex items-center justify-center flex-col p-4'>
      <h4 className='text-white font-normal text-center text-lg mb-3.5'>Scholarship Scheme</h4>
      <p className='text-customWhite text-sm'>Scholarship benefits available for eligible students in applicable programmes</p>
     </div>
    </div>
    </div>
    </div>
  ); 

}

export default Program

