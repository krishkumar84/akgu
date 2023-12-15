import React from 'react'
import Navbar from "../Components/Navbar"
import Carousal from '../Components/Carousal'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carousal />
        <Cards/>
        <Footer/>
      </div>
    </>
  );
}

export default Home