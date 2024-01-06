import React from 'react'
import Navbar from '../Components/Navbar'

const Society = () => {

  const scrollToBdcoe = () => {
    const bdcoeSection = document.querySelector('.bdcoe');
    if (bdcoeSection) {
      bdcoeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCsi = () => {
    const csiSection = document.querySelector('.csi');
    if (csiSection) {
      csiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToCcc = () => {
    const cccSection = document.querySelector('.ccc');
    if (cccSection) {
      cccSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Navbar/>
    
    <div>
      <div className="header flex justify-center items-center text-white h-20 w-full bg-black">
        <h1 className="font-bold text-2xl">INFORMATION TECHNOLOGY</h1>
      </div>
      <div className="btn flex gap-3 flex-wrap justify-evenly mt-10 ">
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
          FACULTY
        </button>
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
          LABS
        </button>
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
          ACHIEVEMENT
        </button>
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-36 h-12">
          SOCIETY
        </button>
        <button className="bg-yellow-500 rounded-xl font-medium border border-black  w-60 h-12">
          DEPARTMENTAL ACTIVITIES
        </button>
      </div>
    </div>
    

    <div className="  w-full h-auto flex flex-wrap flex-row justify-center gap-4 mt-12 mb-12">

     <div className="sm:w-3/4 md:w-[45%] lg:w-[30%] w-full p-4 shadow-lg m-3 bg-gray-800 rounded-xl">
      <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover rounded-xl" src="../../Images/bdcoe.jpg" alt="" />
      <div className="flex flex-col items-center p-4">
        <img src="../../Images/bdcoe" alt="" color='black' />
        <h3 className="text-xl  font-semibold text-white">Big Data Centre of Excellence</h3>
        <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 mt-4"  onClick={scrollToBdcoe}  >Know More</button> 
      </div>
    </div>
  </div>

  <div className="sm:w-3/4 md:w-[45%] lg:w-[30%] w-full p-4 shadow-lg m-3 bg-gray-800 rounded-xl">
      <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover rounded-xl" src="../../Images/csi.jpg" alt="" />
      <div className="flex flex-col items-center p-4">
        <h3 className="text-xl  font-semibold  text-white ">Computer Society Of India</h3>
        <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 mt-4"  onClick={scrollToCsi}  >Know More</button>
      </div>
    </div>
  </div> 

  <div className="sm:w-3/4 md:w-[45%] lg:w-[30%] w-full p-4 shadow-lg m-3 bg-gray-800 rounded-xl">
      <div className=" overflow-hidden">
      <img className="h-[250px] w-full object-cover rounded-xl" src="../../Images/ccc.jpg" alt="" />
      <div className="flex flex-col items-center p-4">
        <h3 className="text-xl  font-semibold  text-white ">Cloud Computing Cell</h3>
        <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 mt-4"  onClick={scrollToCcc} >Know More</button>
      </div>
    </div>
  </div>

  </div>

  
  
 <div className= 'bdcoe flex flex-col mb-10 items-center' >
  <hr  className=' w-[90%] border-t-2 border-gray-300  h-px '/>
  <h1 className='text-3xl mt-10  font-semibold'>Big Data Centre of Excellence</h1>
</div> 

<div className='mx-20 mb-10 flex flex-wrap'>
<div className='w-[30%] '>
<img src="../../Images/bdcoe1.jpg" alt="" />
</div>
<div className='w-[70%] '>
<p className=' mx-6 text-justify'>“Big Data Centre of Excellence" is the Research and Development centre of AKGEC. It is the first “Centre of Excellence" in AKTU, working in the field of BigData. It was established in 2013 and since 4 years it has been motivating and guiding the students into the world of Big Data. Big Data is the most trending technology of 21st century. It is the hottest market currently. Companies require Big Data Analysts to analyze the large amount of data being generated and gain insights from the data. Businesses are focusing more on agility and innovation, adopting BigData technologies help the companies achieve that in no time. The team aspires to develope skills in Big Data and gradually move from Machine Learning to Deep Learning and finally Artificial Intelligence.
We are a student run community of data enthusiasts at Ajay Kumar Garg Engineering College, Ghaziabad. We strive to provide our members with the knowledge, skills, and resources needed to excel in the world of Big Data. We also bring in industry professionals and leaders to give our members access to the most up-to-date trends and insights. Big Data Centre of Excellence was established in the year 2015 and since 
9  years it has been motivating and guiding the students into the world of Big Data. We are the first 'Centre of Excellence' in A.K.T.U. working in the field of Big Data.</p>
</div>

</div>

<div className='csi flex flex-col mb-10 items-center'>
  <hr  className=' w-[90%] border-t-2 border-gray-300  h-px '/>
  <h1 className='text-3xl mt-10  font-semibold'>Computer Society Of India</h1>
</div> 

<div className='mx-20 mb-10 flex flex-wrap'>

<div className='w-[70%] '>
<p className=' mx-6 text-justify'>The COMPUTER SOCIETY OF INDIA (acronym as CSI) was formed in the year 1965. Since its inception, CSI has been paving the way for the IT industry to advance in the right direction. By indulging within itself most famous IT leaders, brilliant scientists and dedicated academicians, CSI has been highly successful in setting highest benchmarks in the field of professional competence with high quality commitment. It has set up a remarkable example by providing high range of services and networking opportunities through workshops, seminars, conventions and courses in which major faces of the industry have actively participated and exchanged valuable knowledge and ideas
.C.S.I. in A.K.G.E.C. Since CSI student chapter has evolved in AKGEC, it has been one of the most active societies of the institute by organising events and workshops which have proven to be blockbusters in the college. The active image of the society becomes more prominent during the annual national level event, The Initiative, wherein the society asks students to provide solutions to the burning issues our country is facing. CSI AKGEC Chapter is known for its highly skilled team members, and the efficiency & quality of the events and workshops that it conducts. </p>
</div>

<div className='w-[30%] '>
<img src="../../Images/csi1.jpg" alt="" />
</div>

</div>

<div className='ccc flex flex-col mb-10 items-center'>
  <hr  className=' w-[90%] border-t-2 border-gray-300  h-px '/>
  <h1 className='text-3xl mt-10  font-semibold'>Cloud Computing Cell</h1>
</div> 

<div className='mx-20 mb-10 flex flex-wrap'>
<div className='w-[30%] '>
<img src="../../Images/ccc1.jpg" alt="" />
</div>
<div className='w-[70%] '>
<p className=' mx-6 text-justify'>Cloud Computing Cell,the technical society, has been a part of Ajay Kumar Garg Engineering College since February 2016. The members are exposed to the latest Cloud Technologies that enable them to be market ready thereby increasing their opportunities in placements and research. It provides a platform to the students to compute, manage and deploy the cloud. The Cell is coordinated by Mr.Santosh Kumar Mishra and Mr, Sundeep Raj, faculty members, IT department.
Cloud computing is a growing computing technology that provides almost unlimited computing resources on demand. It connects a number of other technologies like IoT, Big Data, Fog etc. The users of cloud can access data, applications and storage etc. with least management of local environment. It can be understood as a delivery system that delivers computing in the same way as a power grid delivers electricity. The Cloud Computing Cell, has successfully installed private cloud using Apache Cloudstack. Cloudstack works on the IaaS model of cloud where the services are the complete virtual computers that are able to do the computation as on local machine.

</p>
</div>

</div>

    </>
  )
} 

export default Society