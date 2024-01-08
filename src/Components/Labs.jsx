import React from 'react'
import Cards_labs from './Cards_labs'
import Labs_heading from './Labs_heading'
import Labs_dropdown from './Labs_dropdown'
import Navbar from './Navbar'
import Footer from './Footer'

const Labs = () => {
  return (
   <>
   <Navbar/>
   <Labs_heading/>
   <Labs_dropdown/>
   <Cards_labs/>
   <Footer/>
  
   </>
  )
}

export default Labs