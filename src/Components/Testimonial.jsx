import React from 'react';

function Testimonial() {
  return (
    <div className="bg-customblue w-full h-auto md:h-70 p-4 md:p-8 box-border">
      <h1 className="text-center text-white font-semibold text-3xl sm:text-4xl mb-7">Testimonials</h1>
      <div className="flex flex-col md:flex-row md:mb-2 gap-4 box-border">
        <div className="border-white border-2 w-full md:w-1/2 font-normal p-4 ">
          <p className="text-white text-sm">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quas voluptates ipsum? Veniam dolor reprehenderit vitae ullam incidunt, aliquam aperiam, beatae amet cum, culpa laudantium accusamus? Minus, ex laborum? Harum.
          </p>
          <p className="text-center mt-4 text-customYellow">Lorem ipsum .</p>
          <p className="text-sm text-center text-customYellow font-normal">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="border-white border-2 w-full md:w-1/2 font-normal p-4">
          <p className="text-white text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet saepe numquam itaque
            deserunt modi vitae blanditiis eaque recusandae. Autem maxime delectus minima debitis
            quas hic quod ex velit expedita amet?
          </p>
          <p className="text-center mt-4 text-customYellow">Lorem ipsum .</p>
          <p className="text-sm text-center text-customYellow font-normal">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

