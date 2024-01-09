import React from 'react'

const Vision = ()=>{
  return (
    <div>
      <div className="header flex justify-center items-center text-white h-20 w-full bg-black">
        <h1 className="font-bold text-2xl underline-offset-4">
          Vision & Mission
        </h1>
      </div>
      <div className="flex text-center flex-col sm:flex-col gap-12 px-8 w-full py-8">
        <div className="left w-[full] ">
          <h1 className="text-2xl text-center underline mb-2 font-bold">
            Vision
          </h1>
          <p className="text-justify">
            The vision of IT department is to produce highly competent and
            socially sensitive IT professionals and innovators, capable to excel
            in the multicultural and challenging industry scenario and to
            integrate and leverage technology to empower education, foster
            innovation, maintain a secure IT infrastructure, drive digital
            transformation, enable data-driven decision-making, support
            collaborative research, enhance administrative efficiency, and
            prioritize cybersecurity and information privacy.
          </p>
        </div>
        <div className="right w-full">
          <h1 className="text-2xl text-center underline mb-2 font-bold">
            Mission
          </h1>
          <p className="text-justify">
            To establish a truly professional academic environment where sound
            and transparent teaching-learning processes are practiced by all
            stakeholders of the organization that helps in producing all around
            competent, humane and socially responsible industry-ready engineers
            who are capable of taking challenges from ever- demanding
            multi-cultural industrial environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision