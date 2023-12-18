
import React from 'react';

function Belowtext() {
  return (
    <>
      <div className='w-full item-center'>
        <h1 className='text-center font-semibold text-3xl sm:text-4xl text-customblue mb-7'>Accredited. Respected. Trusted.</h1>
        <p className='flex flex-wrap text-center px-4 md:px-20 font-normal text-sm mb-10'>The college has been consistently maintaining excellent academic results and placements. The college has the distinction of being the first and only college in UP to receive the Acedemic Excellence Award for the Best Engineering College in UPTU from H.E. the Governor of UP for two successive years.</p>
        <p className='flex flex-wrap text-center px-4 md:px-20 font-normal text-sm '>The college strives for excellence and has been consistently maintaining excellent academic results and placements. The college has the distinction of being the first and only college in UP to receive the Academic Excellence Award for the Best Engineering College in UPTU (now AKTU) from H.E. the Governor of UP for two successive years. </p>
      </div>

      <div className="w-full flex  flex-col sm:flex-row items-center justify-center p-4 shadow-lg bg-customWhite mt-4 md:mt-20">
  <div className="overflow-hidden  md:w-40 bg-white mb-4 md:mr-10">
    <img className="w-full h-32 object-cover max-w-full" src="../../Images/naac.png" alt="" />
  </div>
  <div className="overflow-hidden  md:w-40 bg-white mb-4 md:mr-10">
    <img className="w-full h-32 object-cover max-w-full" src="../../Images/edu.webp" alt="" />
  </div>
  <div className="overflow-hidden  md:w-40 bg-white mb-4 md:mr-10">
    <img className="w-full h-32 object-cover max-w-full" src="../../Images/book_1.webp" alt="" />
  </div>
  <div className="overflow-hidden  md:w-40 bg-white mb-4 md:mr-10">
    <img className="w-full h-32 object-cover max-w-full" src="../../Images/as.webp" alt="" />
  </div>
  <div className="overflow-hidden  md:w-40 bg-white mb-4 md:mr-10">
    <img className="w-full h-32 object-cover max-w-full" src="../../Images/logo.webp" alt="" />
  </div>
</div>

    </>
  );
}

export default Belowtext;

