import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Department = () => {
  return (
    <>
      <Navbar />

      <div>
        <div className="header flex justify-center items-center text-white h-20 w-full bg-black">
          <h1 className="font-bold text-2xl">INFORMATION TECHNOLOGY</h1>
        </div>
        <div className="btn flex gap-3 flex-wrap justify-evenly mt-10 ">
          <Link to="/home3/faculty">
            <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
              FACULTY
            </button>
          </Link>
          <Link to="/home3/labs">
            <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
              LABS
            </button>
          </Link>

          <Link to="/home3/achievement">
            <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
              ACHIEVEMENT
            </button>
          </Link>

          <Link to="/home3/society">
            <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
              SOCIETY
            </button>
          </Link>

          <Link to="/home3/department">
            <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-60 h-12">
              DEPARTMENTAL ACTIVITIES
            </button>
          </Link>
        </div>
      </div>
       

       <div className='flex flex-col border-2 border-yellow-500 m-10 '>
       <div className=' flex-wrap  border-[1px] border-yellow-500 m-1 bg-gray-900 text-yellow-500 p-2' >
         <div className='w-full flex flex-wrap m-2 justify-around'>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          guest lectures
         </div>
            <div className='border-2 border-yellow-500 p-2 m-1 ' >
          Seminars, conferences and FDPs organised
         </div>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          conferences and trainings attended by faculties
         </div>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          faculty seminars
         </div>
        
         </div>


         <div className='w-full flex flex-wrap m-2 justify-around'>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          mentorship program
         </div>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          staff development programs organised
         </div>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          e-paper presentation
         </div>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          MOOC/swayam online courses completed by faculty (year wise)
         </div>
         </div>


         <div className='w-full flex flex-wrap m-2 justify-around'>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          student achievements
         </div>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          student activities
         </div>
         <div className='border-2 border-yellow-500 p-2 m-1'>
          Research paper study and presentation
         </div>
         </div>

         </div>

       <div className='border-[1px] flex border-yellow-500 m-1 '>
         <table className='border-[1px] w-full border-yellow-500 m-2 '>
          <thead>
            <th>DATE</th>
            <th>TOPIC</th>
            <th>SPEAKER</th>
          </thead>
           <tbody>
           <tr>
            <td>28 April 2023</td>
            <td>Comparison and analysis of the Greedy and Dynamic Approach</td>
            <td>Mr. Kapil Tomar</td>
           </tr>
           <tr>
            <td>26 April 2023	</td>
            <td>Website development through WordPress	</td>
            <td>Ms.Gunjan Gupta</td>
           </tr>
           <tr>
            <td>21 April 2023	</td>
            <td>Fundamental  Aspect of Performance Marketing growth strategies case studies and Job Opportunities	</td>
            <td>Ms. Gunjan Gupta
</td>
           </tr>
           <tr>
            <td>21 April 2023	</td>
            <td>Awareness and opportunities: “Need of Digital Marketing for Industry”	</td>
            <td>Ms. Gunjan Gupta
</td>
           </tr>
           <tr>
            <td>17 April 2023	</td>
            <td>Awareness and opportunities: “Need of Digital Marketing for Industry”	</td>
            <td>Ms. Gunjan Gupta
</td>
           </tr>
           <tr>
            <td>06 April 2023	</td>
            <td>Awareness and opportunities: “Need of Digital Marketing for Industry”	</td>
            <td>Ms. Gunjan Gupta
</td>
           </tr>
           <tr>
            <td>24 March 2023	</td>
            <td>Etiquette and Soft Skills in Corporate Sector	</td>
            <td>Mr. Murali Mohan Kamineni
</td>
           </tr>
           <tr>
            <td>28 February 2023	</td>
            <td>Industry Talk 2.0	</td>
            <td>Mr. Rishi Pandey
</td>
           </tr>
           <tr>
            <td>24 February 2023	</td>
            <td>Cloud computing	</td>
            <td>Mr. Murali Mohan Kamineni
</td>
           </tr>
           <tr>
            <td>24 February 2023	</td>
            <td>Introduction of Artificial Intelligence	</td>
            <td>Mr. Wilson Mathur
</td>
           </tr>
           <tr>
            <td>30 January 2023	</td>
            <td>Industry Talk 1.0	</td>
            <td>Mr. Rishi Pandey
</td>
           </tr>

           <tr>
            <td>29 December 2022	</td>
            <td>The Complete Software Testing Bootcamp – Part 2	</td>
            <td>Mr. Murali Mohan Kamineni
</td>
           </tr>

           <tr>
            <td>29 December 2022	</td>
            <td>Azure Fundamentals	</td>
            <td>Mr. Wilson Mathur
</td>
           </tr>

           <tr>
            <td>29 November 2022	</td>
            <td>Scrum Prinicples and Practices	</td>
            <td>Mr. Mradul Jain
</td>
           </tr>

           <tr>
            <td>18 November 2022	</td>
            <td>The Rise of Block Chain Technology	</td>
            <td>Ms. Shraddha  Mishra
</td>
           </tr>

          </tbody>
         </table>
       </div>
       </div>
      


      <Footer/>
</>
  )
}

export default Department