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
    <div className='bg-customWhite'>
    
    <h1 className='font-semibold text-4xl text-center mb-24 pt-12 text-customblue'>OUR TOP PROGRAMMES</h1>
    <div className='flex flex-wrap flex-row items-center justify-center mb-24 mr-4 ml-5'>
      <ul className='flex flex-wrap flex-row justify-evenly w-full '>
        <li className={`uppercase mr-4 text-center text-lg hover:cursor-pointer ${selectedDegree === 'bachelor' ?   'border-b-4 border-customYellow w-1/4' : 'border-b-4 border-transparent w-1/5'}`} onClick={handleOnClick_1}>Bachelor</li>
        <li className={`uppercase mr-4 text-center text-lg hover:cursor-pointer ${selectedDegree === 'master' ? 'border-b-4 border-customYellow w-1/4' : 'border-b-4 border-transparent w-1/5'}`} onClick={handleOnClick_2}>Master</li>
        <li className={`uppercase mr-4 text-center text-lg hover:cursor-pointer ${selectedDegree === 'pgDiploma' ? 'border-b-4 border-customYellow w-1/4 ' : 'border-b-4 border-transparent w-1/5'}`} onClick={handleOnClick_3}>PG Diploma</li>
      </ul>

    
      {selectedDegree === 'bachelor' && <BachelorCards />}
       {selectedDegree === 'master' && <MasterCards />}
      {selectedDegree === 'pgDiploma' && <PGDiplomaCards />} 
    </div>

    <div className='w-full  bg-customblue flex flex-wrap flex-row  box-border  '>
    <div className='flex  flex-row align-middle justify-center text-center space-around px-24 pb-7 pt-10  '>

    <div className='w-1/4  '>
      <h2 className='text-white font-normal text-center text-lg mb-3.5'>Flexible</h2>
      <p className='text-customWhite text-sm'>Freedom to juggle between full time job and pursuing a coveted degree</p>
     </div>
     <div class="border-l border-gray-300 h-32"></div>
     <div className='w-1/4 '>
      <h4 className='text-white font-normal text-center text-lg mb-3.5'>Flexible</h4>
      <p className='text-customWhite text-sm'>Freedom to juggle between full time job and pursuing a coveted degree</p>
     </div>
     <div class="border-l border-gray-300 h-32"></div>
     <div className='w-1/4  '>
      <h4 className='text-white font-normal text-center text-lg mb-3.5'>Flexible</h4>
      <p className='text-customWhite text-sm'>Freedom to juggle between full time job and pursuing a coveted degree</p>
     </div>
     <div class="border-l border-gray-300 h-32"></div>
     <div className='w-1/4 '>
      <h4 className='text-white font-normal text-center text-lg mb-3.5'>Flexible</h4>
      <p className='text-customWhite text-sm'>Freedom to juggle between full time job and pursuing a coveted degree</p>
     </div>
    </div>
    </div>
    </div>
  );
}

export default Program

