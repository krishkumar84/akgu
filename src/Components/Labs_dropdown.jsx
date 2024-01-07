import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Labs_dropdown = () => {

  const [isParagraphVisible_1, setParagraphVisible_1] = useState(false);
  const [isParagraphVisible_2, setParagraphVisible_2] = useState(false);
  const [isParagraphVisible_3, setParagraphVisible_3] = useState(false);
  const [isParagraphVisible_4, setParagraphVisible_4] = useState(false);
   const toggleParagraphVisibility_1 = () => {
    setParagraphVisible_1(!isParagraphVisible_1);
   
  };
  const toggleParagraphVisibility_2 = () => {
    setParagraphVisible_2(!isParagraphVisible_2);
   
  };
  const toggleParagraphVisibility_3 = () => {
    setParagraphVisible_3(!isParagraphVisible_3);
   
  };
  const toggleParagraphVisibility_4 = () => {
    setParagraphVisible_4(!isParagraphVisible_4);
   
  };

  return (
    <div className="mt-4 sm:mx-20 ">
      <div className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
                setParagraphVisible_1 ? 'shadow-md' : ''
              }`} >                  
        <button
          onClick={toggleParagraphVisibility_1}
          className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
        >

          <span className='flex text-start text-sm sm:text-lg font-normal text-black'>Adequate-and-well-equipped-laboratories-of-IT-department</span>
          {setParagraphVisible_1 ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
        </button>
        {isParagraphVisible_1 && (
          <div className="px-4 pb-2  sm:pb-4 text-xs sm:text-base ">
            <p className='text-gray-500'>1. The department has adequate number of laboratories as per requirement strength of students in the department and number of labs / practical courses mentioned in syllabus scheme of university (AKTU, Lucknow).</p>
            <p className='text-gray-500'>2. These laboratories are fully equipped with various equipment’s, software tools and consumables.</p>
            <p className='text-gray-500'>3. These labs have all the basic as well as advanced level facilities to fulfil the requirements of UG courses.</p>
            <p className='text-gray-500'>4. These laboratories are utilized by the students and faculty members of IT department for performing the practical experiments, doing the Project Work and Research Activities (R & D).</p>
            <p className='text-gray-500'>5. One dedicated lab staff member is always present in each lab room (responsibility of each lab room has been assigned to a particular lab staff).</p>
            <p className='text-gray-500'>6. Adequate Budget is planned and expenditure is done from the allocated fund to ensure the repairing of faulty equipment’s, purchase of consumables, lab equipment’s and software tools.</p>
          </div>
        )}
      </div>

      <div  className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
                setParagraphVisible_2 ? 'shadow-md' : ''
              }`}>
        <button
          onClick={toggleParagraphVisibility_2}
          className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
        >

          <span className='flex text-start text-sm sm:text-lg font-normal text-black'>The department is equipped with following labs for Odd and Even Semesters</span>
          {setParagraphVisible_2 ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
        </button>
        {isParagraphVisible_2 && (
          <div className="w-full px-4 pb-2  sm:pb-4 text-xs sm:text-base ">
            <p className='text-gray-500 '>1. Advanced IT lab-1</p>
            <p className='text-gray-500 '>2. Advanced IT lab-2</p>
            <p className='text-gray-500 '>3. Web Technology Lab</p>
            <p className='text-gray-500 '>4. Basic IT Lab</p>
            <p className='text-gray-500 '>5. Project Lab</p>
            <p className='text-gray-500 '>6. IT Lab – 6</p>
            <p className='text-gray-500 '>7. IT Lab – 7</p>
          </div>
        )}
      </div>

      <div className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
                setParagraphVisible_3 ? 'shadow-md' : ''
              }`}>
        <button
          onClick={toggleParagraphVisibility_3}
          className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
        >

          <span className='flex text-start text-sm sm:text-lg font-normal text-black'>Facilities available in IT Department Laboratories</span>
          {setParagraphVisible_3 ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
        </button>
        {isParagraphVisible_3 && (
           <div className="overflow-x-auto">
           <table className="min-w-full  bg-white border border-gray-300 mb-2">
             <thead>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <th className="py-2 px-4 border-b ">S. No</th>
                 <th className="py-2 px-4 border-b">Name of the Laboratory</th>
                 <th className="py-2 px-4 border-b hidden sm:table-cell">Name course being conducted for BTech IT</th>
                 <th className="py-2 px-4 border-b hidden md:table-cell">No. of students per setup(batch size)</th>
                 <th className="py-2 px-4 border-b hidden lg:table-cell">Total Computers</th>
                 <th className="py-2 px-4 border-b hidden lg:table-cell">Configurations</th>
                 
               </tr>
             </thead>
             <tbody>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">1</td>
                 <td className="py-2 px-4 border-b text-center">Advanced IT Lab-1</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center ">Python, CN, OS</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center ">30</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center ">27</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center ">(i) 36 PC HP 202 G2 Core i3-4130T@2.90 Ghz. Processor, 10 GB RAM,500 GB HDD,18.5” LCD Monitor, Keyboard and Optical Mouse.</td>
                 {/* Add more cells as needed */}
               </tr>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">2</td>
                 <td className="py-2 px-4 border-b text-center">Advanced IT Lab-2</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">DAA, CNS, DS, python, CN,OS,TAFL</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">30</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">37</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">(i) 36 PC HP 202 G2 Core i3-4130T@2.90 Ghz. Processor, 10 GB RAM,500 GB HDD,18.5” LCD Monitor, Keyboard and Optical Mouse.</td>
                 {/* Add more cells as needed */}
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">3</td>
                 <td className="py-2 px-4 border-b text-center">Web Technology lab</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Web Technology lab, Web designing, CNS, Compiler Design</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">30</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">37</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">(i) 33 PC Lenovo Core i3-4150@3.50 Ghz. Processor, 10 GB RAM,500 GB HDD,18.5” LCD Monitor, Keyboard andOptical Mouse.</td>
                 {/* Add more cells as needed */}
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">4</td>
                 <td className="py-2 px-4 border-b text-center">Basic IT Lab</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">C programming, Data Mining, COA Lab</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">35</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">37</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">	(i) 30 PC Lenovo Core i3-4150@ 3.50 GHz. Processor, 10 GB RAM ,500 GB HDD,18.5” LCD Monitor, Keyboard and Optical Mouse</td>
                 {/* Add more cells as needed */}
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">5</td>
                 <td className="py-2 px-4 border-b text-center">Project Lab</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Project Lab</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">30</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">34</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">	(i) 30 PC Lenovo Core i3-4150@ 3.50 Ghz. Processor,  10 GB RAM,500 GB HDD,18.5” LCD Monitor, Keyboard and Optical Mouse.</td>
                 {/* Add more cells as needed */}
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">6</td>
                 <td className="py-2 px-4 border-b text-center">IT Lab – 6</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">IT Lab – 6</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">30</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">37</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">	(i) 30 PC with HP 280G5 Core i5@ 3.00 Ghz. Processor, 08 GB RAM,1TB HDD,18.5” LCD Monitor, Keyboard and Optical Mouse.</td>
                 {/* Add more cells as needed */}
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">7</td>
                 <td className="py-2 px-4 border-b text-center">IT Lab – 7</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">IT Lab – 7</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">30</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">37</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center ">37 PC with HP 280G8 Core i5@ 2.70 Ghz. Processor, 16 GB RAM,1TB & 240 SSD HDD,19.5” LCD Monitor, Keyboard and Optical Mouse</td>
                 {/* Add more cells as needed */}
               </tr>
               {/* Add more rows as needed */}
             </tbody>
           </table>
         </div>
     
        )}
      </div>

      <div className={`cursor-pointer rounded-md border mb-2 mx-2 border-gray-400 transition-all duration-300 ${
                setParagraphVisible_4 ? 'shadow-md' : ''
              }`}>
        <button
          onClick={toggleParagraphVisibility_4}
          className="flex w-full items-start justify-between px-4  sm:p-2 md:items-center"
        >

          <span className='flex text-start text-sm sm:text-lg font-normal text-black'>Details of Technical Manpower Support available in IT Department Laboratories</span>
          {setParagraphVisible_4 ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
        </button>
        {isParagraphVisible_4 && (
           <div className="overflow-x-auto">
           <table className="min-w-full  bg-white border border-gray-300 mb-4">
             <thead>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <th className="py-2 px-4 border-b ">S. No</th>
                 <th className="py-2 px-4 border-b">Name of the Lab Staff</th>
                 <th className="py-2 px-4 border-b hidden sm:table-cell">Designation</th>
                 <th className="py-2 px-4 border-b hidden md:table-cell">Qualification</th>
                 <th className="py-2 px-4 border-b hidden lg:table-cell">Date of Joining(DOJ) and Total work Experience</th>
                 <th className="py-2 px-4 border-b hidden lg:table-cell">Laboratory Courses Assigned/ Area of Expertise</th>
                 
               </tr>
             </thead>
             <tbody>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">1</td>
                 <td className="py-2 px-4 border-b text-center">Mr. Dharmendra Kaushik</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center ">Lab Assistant</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center ">MCA</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center ">1 April 2006, 23 years</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center ">Advanced IT Lab-1,and BASIC IT Lab-4</td>
                 {/* Add more cells as needed */}
               </tr>
               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">2</td>
                 <td className="py-2 px-4 border-b text-center">Mr. Aftab Alam</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Lab Assistant</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">MCA</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">18 February 2008, 15 years</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">Advanced IT Lab-2,and Project Lab – 5</td>
                 {/* Add more cells as needed */}
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">3</td>
                 <td className="py-2 px-4 border-b text-center">Mr. Prabhat Narain Shukla</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Lab Assistant</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">B.Sc., PGDCA</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">3 October 2011, 12 years</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">Web Technology Lab – 3</td>
                 {/* Add more cells as needed */}
               </tr>

               <tr className='px-4 pb-2  sm:pb-4 text-xs sm:text-base '>
                 <td className="py-2 px-4 border-b text-center">4</td>
                 <td className="py-2 px-4 border-b text-center">Mr. Vipin Kumar</td>
                 <td className="py-2 px-4 border-b hidden sm:table-cell text-center">Lab Assistant</td>
                 <td className="py-2 px-4 border-b hidden md:table-cell text-center">B.A., Computer Hardware & Networking</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">10 October 2022, 12 years</td>
                 <td className="py-2 px-4 border-b hidden lg:table-cell text-center">	IT Lab – 6 IT Lab – 7</td>
                 {/* Add more cells as needed */}
               </tr>

             
               {/* Add more rows as needed */}
             </tbody>
           </table>
         </div>
     
        )}
      </div>
    </div>
  );
};

export default Labs_dropdown;





