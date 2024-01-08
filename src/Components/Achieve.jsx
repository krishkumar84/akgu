import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Achieve = () => {
  return (
    <div>
      <div className="header flex justify-center items-center text-white h-20 w-full bg-black">
        <h1 className="font-bold text-2xl">INFORMATION TECHNOLOGY</h1>
      </div>
      <div className="btn flex gap-3 flex-wrap justify-evenly mt-10 mb-10 ">
        <Link to='/home3/faculty'>
        <button  className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
          FACULTY
        </button>
        </Link>
        <Link to='/home3/labs'>
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
          LABS
        </button>
        </Link>

        <Link to='/home3/achievement'>
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
          ACHIEVEMENT
        </button>
        </Link>

        <Link to='/home3/society'>
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
          SOCIETY
        </button>
        </Link>

        <Link to='/home3/department'>
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-60 h-12">
          DEPARTMENTAL ACTIVITIES
        </button>
        </Link>
      </div>
      <div className='p-6 sm:p-3'>
      <p className='mt-1'> - The B.Tech. (Information Technology) Program is NBA Re-Accredited for the academic years 2022-2023 to 2024-2025 i.e., up to 30/06/2025.</p>
      <p className='mt-1'> - 13 students of IT department participated and won Smart India Hackathon (SIH) 2022.</p>
      <div className="parent gap-6 mt-8  flex flex-wrap  ">
        <div className="img1 w-full sm:w-[27%] h-full border border-black">
          <img src="https://www.akgec.ac.in/wp-content/uploads/2023/03/ITAchieve1.jpeg" alt="" />
        </div>
        <div className="img2 w-full sm:w-[31%] border border-black ">
          <img src="https://www.akgec.ac.in/wp-content/uploads/2023/03/ITAchieve2.jpeg" alt="" />
        </div>
        <div className="img3 w-full sm:w-[37%] border border-black">
          <img src="https://www.akgec.ac.in/wp-content/uploads/2023/03/ITAchieve3.jpeg" alt="" />
        </div>
      </div>
      <p className='mt-4'>- Our student Mansi Agarwal (1502713052) from B.Tech-IT (Batch 2015-19) secured 2nd rank in IT Branch at university level.</p>
      <p className='mt-1'>- Our student Radhika Gupta (1502713074) from B.Tech- IT (Batch 2015-19) secured 4th rank in IT Branch at university level.</p>
      <p className='mt-1'>- Our student Swarnima Shukla (1502713112) from B.Tech- IT (Batch 2015-19) secured 8th rank in IT Branch at university level.</p>

      </div>
      <Footer/>
    </div>
  )
}

export default Achieve