import React from "react";
import { Link } from "react-router-dom";

function IT() {
  return (
    <div>
      <div className="header flex justify-center items-center text-white h-20 w-full bg-black">
        <h1 className="font-bold text-2xl">INFORMATION TECHNOLOGY</h1>
      </div>
      <div className="btn flex gap-3 flex-wrap justify-evenly mt-10 ">
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
      <div className="p-10">
      <div className="blue-text font-medium text-blue-600">
        <h3>B. Tech. Information Technology 180</h3>
        <h3>B Tech. Computer Science and Information Technology 90</h3>
      </div>
      <div className="para font-medium">
        <p>
          Information Technology has changed the way of our life and the pace of change is very
          fast. This scenario is giving us new opportunity as well as new
          challenges. Information Technology has enhanced the efficiency and effectiveness of
          business processes dramatically. ERP solutions have further empowered
          the organizations to do multi-location, multilingual and multicurrency
          operation in the global business environment. New ways of marketing,
          making friends, communication and socialization have come up in the
          form of blogs, forums, chats, emails etc.
        </p>
        <p className="mt-3">
          Information Technology is working as a hub to drive the businesses to new heights. Information Technology jobs
          are more paying as well as more demanding. To continuously learn and
          grasp new technologies is a real challenge for IT professionals.
          Creating such professionals to take this challenge and rise to the
          apex of Information Technology profession is our goal. At AKGEC excellence is the way of
          life. We are committed to give students an environment to nurture
          their talent in to its fullest potential. This is achieved by learned
          faculty members, year round conduction of numerous seminars, guest
          lectures, and industry academia interaction, co-curricular &
          extracurricular activities. We strive to transform the students not
          only into good professionals but a good human being and a dutiful
          citizen.
        </p>
      </div>
      </div>
    </div>
  );
}

export default IT;
