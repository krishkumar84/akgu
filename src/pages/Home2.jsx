import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Program from '../Components/Program'
// import Mentors from '../Components/Mentors'; 
import Alumni from '../Components/Alumni';
import Testimonial from '../Components/Testimonial';
import Highlights from '../Components/Highlights';
import Belowtext from '../Components/Belowtext';
import Formback from '../Components/Formback';
import "../Components/CSS/Home2.css"
import Placements from '../Components/Placements';
import Facultycards from '../Components/Faculty-cards';
import AchievementCarousal from '../Components/AchievementCarousal';
import Form from '../Components/Form';

import { useState } from 'react';
import { ArrowUp, Contact, MessageSquareText } from 'lucide-react';

 

function Home2() {
  const [toggle, setToggle] = useState(true);

  const closeForm = ()=>{
    setToggle(!toggle);
  }

  const showButton = (

    <button onClick={closeForm} className='flex items-center justify-center text-white bg-black p-3 rounded-full'>
       {/* <button className='p-3 pl-4 pr-4 h-12 bg-black rounded-full text-white'>Contact Us</button> */}
       <MessageSquareText size={36}/>
    </button>
  )

  return (
    <div>
      <Navbar />
      <div className={toggle ? "block cursor-pointer" : "hidden"}>
        <div className="sm:w-1/3 flex items-center justify-start right-0 bottom-0 sm:fixed sm:z-50">
          <div className="bg-white border-2 w-full sm:w-full lg:w-full md:ml-[9vw] md:mr-[1vw] relative border-yellow-300 rounded-lg">
            <Form closeForm={closeForm} />
          </div>
        </div>
      </div>
      <div className={!toggle ? "w-full flex items-center justify-end right-10 bottom-3 sm:fixed sm:z-50 absolute" : ""}>
        {!toggle ? showButton : null}
      </div>
      <Formback />
      <Program />
      <Facultycards />
      {/* <Mentors/> */}
      <Testimonial />
      <Alumni />
      <Placements />
      <Highlights />
      <AchievementCarousal />
      <Belowtext />
      <Footer />
    </div>
  );
}

export default Home2
