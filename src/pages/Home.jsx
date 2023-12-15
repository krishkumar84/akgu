import React from 'react'
import Navbar from "../Components/Navbar"
import Carousal from '../Components/Carousal'
import Cards from '../Components/Cards'

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carousal />
        <Cards/>
      </div>
    </>
  );
}

export default Home