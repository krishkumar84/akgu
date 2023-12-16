import { useState } from 'react';
import BachelorCards from './BachelorCards';
import MasterCards from './MasterCards';
import PGDiplomaCards from './PGDiplomaCards';


function Program() {
  const [selectedDegree, setSelectedDegree] = useState(null);

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
    <>
    <h1 className='font-semibold text-4xl text-center mb-24 text-customblue'>OUR TOP ONLINE PROGRAMMES</h1>
    <div className='flex flex-wrap flex-row items-center justify-center mb-40 mr-4 ml-5'>
      <ul className='flex flex-wrap flex-row justify-evenly w-full '>
        <li className={`uppercase mr-4 text-center text-lg  ${selectedDegree === 'bachelor' ?   'border-b-4 border-customYellow w-1/4' : 'border-b-4 border-transparent w-1/5'}`} onClick={handleOnClick_1}>Bachelor</li>
        <li className={`uppercase mr-4 text-center text-lg ${selectedDegree === 'master' ? 'border-b-4 border-customYellow w-1/4' : 'border-b-4 border-transparent w-1/5'}`} onClick={handleOnClick_2}>Master</li>
        <li className={`uppercase mr-4 text-center text-lg  ${selectedDegree === 'pgDiploma' ? 'border-b-4 border-customYellow w-1/4 ' : 'border-b-4 border-transparent w-1/5'}`} onClick={handleOnClick_3}>PG Diploma</li>
      </ul>

    
      {selectedDegree === 'bachelor' && <BachelorCards />}
       {selectedDegree === 'master' && <MasterCards />}
      {selectedDegree === 'pgDiploma' && <PGDiplomaCards />} 
    </div>
    </>
  );
}

export default Program

