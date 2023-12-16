import React from 'react'
import Navbar from "../Components/Navbar"
import Carousal from '../Components/Carousal'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Features from '../Components/Features'
import Cta from '../Components/Cta'
import CarousalCards from '../Components/CarousalCards'
import Facultycards from '../Components/Faculty-cards'
import Faq from '../Components/Faq'

const Home = () => {
  return (
    <>
      <div className=' '>
        <Navbar />
        <Carousal />
        <Cards/>
        <Facultycards/>
        <Features/>
        <CarousalCards/>
        <Cta/>
        <Faq/>
        <Footer/>
      </div>
    </>
  );
}

export default Home