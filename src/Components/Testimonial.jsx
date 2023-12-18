import React from 'react';

function Testimonial() {
  return (
    <div className="bg-customblue w-full h-auto md:h-70 p-4 md:p-8 box-border">
      <h1 className="text-center text-white font-semibold text-3xl sm:text-4xl mb-7">Testimonials</h1>
      <div className="flex flex-col md:flex-row md:mb-2 gap-4 box-border">
        <div className="border-white border-2 w-full md:w-1/2 font-normal p-4 ">
          <p className="text-white text-sm">
          Exciting to see the face of UPTU in many ways. Wish all the best for further spiralling ups, Excellent in all respects and aspect, Impressive performance by the institute and the students academically and otherwise, Best of luck to all !
          </p>
          <p className="text-center mt-4 text-customYellow">PROF. KRIPA SHANKER</p>
          <p className="text-sm text-center text-customYellow font-normal">
          Vice Chancellor
          </p>
        </div>
        <div className="border-white border-2 w-full md:w-1/2 font-normal p-4">
          <p className="text-white text-sm">
          Excellent Organization & Hospitality! Nice vibrant function, excellent academic achievements. My all the best for all your future endeavours 
          </p>
          <p className="text-center mt-4 text-customYellow">DR. ROB REILLY</p>
          <p className="text-sm text-center text-customYellow font-normal">
            MIT, USA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

