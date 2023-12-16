import React from 'react'
import Navbar from "../Components/Navbar"
import Carousal from '../Components/Carousal'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Features from '../Components/Features'
import Cta from '../Components/Cta'

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carousal />
        <Cards/>
        <Features/>
        <Cta/>
        <Footer/>
      </div>
    </>
  );
}

export default Home