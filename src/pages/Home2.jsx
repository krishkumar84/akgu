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
 

function Home2() {

  return (
    <div>
      <Navbar />
      <div className='hidden sm:block'>
      <div className="w-1/3 flex items-center justify-start right-0 bottom-0 sm:fixed sm:z-50">
        <div className="bg-white border-2 w-full sm:w-full lg:w-full md:ml-[9vw] md:mr-[1vw] relative border-yellow-300 rounded-lg">
          <Form />
        </div>
      </div>
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
