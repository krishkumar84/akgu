import React from 'react'

const LifeAkgec = () => {
  return (
    <div className="flex flex-wrap w-full items-center  justify-center font-sans mb-4">
      <a href="home3/society">
        <div className="flex flex-wrap w-[250px] h-[150px] mx-4 my-2 bg-red-600   items-center justify-center p-10 transition-all rounded-md hover:cursor-pointer hover:scale-90">
          <p className=" text-white  text-xl  text-center">Socities</p>
        </div>
      </a>

      <div className=" flex flex-wrap w-[250px] h-[150px] mx-4 my-2 bg-yellow-400  items-center justify-center p-10 transition-all rounded-md hover:cursor-pointer hover:scale-90">
        <p className=" text-white  text-xl text-center">Events</p>
      </div>
      <div className="flex flex-wrap  w-[250px] h-[150px] mx-4 my-2 bg-orange-400  items-center justify-center p-10 transition-all rounded-md hover:cursor-pointer hover:scale-90">
        <p className=" text-white text-xl text-center">
          Social Responsibilities
        </p>
      </div>
      <a href="/home2/hostels">
        <div className=" flex flex-wrap w-[250px] h-[150px] mx-4 my-2  bg-violet-500  items-center justify-center p-10 transition-all rounded-md hover:cursor-pointer hover:scale-90">
          <p className=" text-white  text-xl text-center">Hostels</p>
        </div>
      </a>
    </div>
  );
}

export default LifeAkgec