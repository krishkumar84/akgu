import React from 'react'
import Masonry,{ ResponsiveMasonry } from 'react-responsive-masonry'
//  import galleryImages from './galleryImages'


const galleryImages = [
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2022/12/TEDx7.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2023/12/Fresher6.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2023/12/Fresher18.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2024/04/Alumni_2024_3.jpg'
},{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2022/12/Poster_5.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2023/11/Kite2023_4.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2019/10/faculty_4.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2024/04/Convocation2024_1.jpg'
},
{
  url :' https://www.akgec.ac.in/wp-content/uploads/2024/03/AKTUState_12-scaled.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2019/06/euphony_4.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2019/06/verve_1.jpg'
},
{
  url : 'https://www.akgec.ac.in/wp-content/uploads/2023/02/Varchasv2.jpg'
},
]

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
<div className='w-full flex justify-center items-center mb-8'>
<ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}} className='w-[90%]'>
  <Masonry gutter='1rem'className=''>
     {
        galleryImages.map((item,index) => (
            <img className='masonry__img' src={item.url} key={index} alt=""
             style={{'width':'100%','display':'block','borderRadius':'10px'}} />
        ))
     }
  </Masonry>
</ResponsiveMasonry>
</div>
    </div>

  );
}

export default LifeAkgec