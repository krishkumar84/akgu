import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Program from '../Components/Program'
import Form from '../Components/Form';
import Mentors from '../Components/Mentors'; 
import Alumni from '../Components/Alumni';

function Home2() {

  return (
    <div >
      <Navbar/>
      <Form/>
      <Program/>
      <Mentors/>
      <Alumni/>
      <Footer/>
    </div>
  )
}

export default Home2
