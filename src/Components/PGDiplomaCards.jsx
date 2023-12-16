
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons';


function PGDiplomaCards() {

  return (
    <div className="w-4/5 h-auto flex flex-wrap flex-row ">
   
      
   <div className="w-1/3 p-4 shadow-lg ">
    <div className="overflow-hidden">
      <img className="h-full w-full object-cover" src="../../Images/download_1.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-customblue">Card 2</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>
    
  <div className="w-1/3 p-4 shadow-lg ">
    <div className="overflow-hidden">
      <img className="h-full w-full object-cover" src="../../Images/download_1.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-customblue">Card 2</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>
    
  <div className="w-1/3 p-4 shadow-lg">
    <div className="overflow-hidden">
      <img className="h-full w-full object-cover" src="../../Images/download_1.jpg" alt="" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-customblue">Card 2</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          <p>Degree: Bachelor</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <p>Duration: 4 years</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Know More</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default PGDiplomaCards
