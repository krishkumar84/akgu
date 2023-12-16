import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';


function Highlights() {
  return (
     
    <div className='mt-9 bg-customWhite '>
      <h1 className='text-center font-semibold text-4xl text-customblue mb-9'>Key Highlights of Our Programme</h1>
      <div className='flex flex-wrap flex-row items-center justify-center px-24 pb-7 pt-10  '> 
      <div className="flex flex-col w-1/4 items-center text-gray-600  shadow-lg h-40 mb-10 mr-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <FontAwesomeIcon icon={faGraduationCap} className=" h-20" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-1/4 items-center text-gray-600 mb-10 shadow-lg h-40 mr-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <FontAwesomeIcon icon={faGraduationCap} className=" h-20" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex  flex-col w-1/4 items-center text-gray-600 mb-10 shadow-lg h-40 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <FontAwesomeIcon icon={faGraduationCap} className=" h-20" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-1/4 items-center text-gray-600 mb-10 shadow-lg h-40 mr-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <FontAwesomeIcon icon={faGraduationCap} className=" h-20" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-1/4 items-center text-gray-600 mb-10 shadow-lg h-40 mr-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <FontAwesomeIcon icon={faGraduationCap} className=" h-20" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
        <div className="flex flex-col w-1/4 items-center text-gray-600 mb-10 shadow-lg h-40 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          <FontAwesomeIcon icon={faGraduationCap} className=" h-20" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit </p>
        </div>
      </div>
    </div>
  )
}

export default Highlights
