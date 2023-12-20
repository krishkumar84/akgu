import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Program from '../Components/Program'
import Mentors from '../Components/Mentors'; 
import Alumni from '../Components/Alumni';
import Testimonial from '../Components/Testimonial';
import Highlights from '../Components/Highlights';
import Belowtext from '../Components/Belowtext';
import Formback from '../Components/Formback';
import "../Components/CSS/Home2.css"
 

function Home2() {

  return (
    <div >
      <Navbar/>
      <Formback/>
      <Program/>
      <Mentors/>
      <Testimonial/>
      <Alumni/>
      <Highlights/>
      <Belowtext/>
      <Footer/>
    </div>
  )
}

export default Home2
