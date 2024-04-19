import React from 'react'
import Masonry,{ ResponsiveMasonry } from 'react-responsive-masonry'


const Hostel = () => {
  return (
    <div className='bg-customWhite flex justify-center items-center flex-col'> 
        <h1 className='text-4xl font-semibold text-center pt-10 pb-12'>Hostels</h1>
        <p className='px-20 pb-4'>The college provides well furnished hostel accommodation to its students. The six campus hostels are spread over four complexes namely, 
            the Junior Girls Hostel Complex, the Girls Hostel Complex, the Junior Boys Hostel Complex and the Senior Boys Hostel Complex. The three girls 
            hostel have double and triple seater rooms and accommodate about 600 students. The Junior Boys Hostel having double occupancy rooms can accommodate 
            about 300 students and is reserved for first year students. 
            The Senior Boys Hostel Complex has two hostels with single and triple seater accommodation and houses about 600 students.</p>
       
       <p className='px-20'>Each hostel complex has its separate mess with well equipped kitchen and dining area
         providing hygienic, nutritious and wholesome meals. Hostels have gymnasium as well as indoor 
         and outdoor sports facilities. The hostels also have a TV room and library with magazines and
          fiction / general reading books. Hostels are equipped with eco-friendly solar water heating systems. 
          Hostels also have canteens and provision stores for minor item of daily requirement. The hostels thus
           provide reasonable levels of comfort, hygienic food, recreation facilities and an environment conducive 
           for pursuit of academic and all round development.
</p>

       <h2 className='text-2xl text-center mt-10 font-semibold mb-4 '>List of Amenities at a Glance</h2>
       <ul  style={{ listStyleType: 'disc' }}>
        <li className='mx-6'>Furnished rooms including Curtains, Mattress, Pillow, Bed Sheets</li>
        <li className='mx-6'>Clean and Hygienic – Mess & Dining</li>
        <li className='mx-6'>Indoor and Outdoor Sports Facilities</li>
        <li className='mx-6'>Internet Facility (wi fi)</li>
        <li className='mx-6'>Solar Water Heaters</li>
        <li className='mx-6'>Gymnasium</li>
        <li className='mx-6'>TV Room</li>
        <li className='mx-6'>Library</li>
        <li className='mx-6'>Utility Store</li>
        <li className='mx-6'>Canteen</li>
       </ul>

       <div className='w-full flex flex-col items-center  mt-14'>
        <h2 className='text-2xl text-center  font-semibold mb-6'>Girls Hostel</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}} className='w-[90%] pb-6'>
        <Masonry gutter='1rem'className=''>
         
                 <img src='/Images/gh7.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                 <img src='/Images/gh2.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/gh8.jpeg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/gh4.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/gh5.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/gh6.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/gh1.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/gh3.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />

                 </Masonry>
    </ResponsiveMasonry>

        <h2 className='text-2xl text-center  font-semibold mt-10 mb-6 '>Boys Hostel</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}} className='w-[90%] pb-10'>
        <Masonry gutter='1rem'className=''>
                <img src='/Images/bh1.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                 <img src='/Images/bh2.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/bh3.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/bh4.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/bh5.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/bh6.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/gh1.jpg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
                  <img src='/Images/bh7.jpeg' alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
            </Masonry>
    </ResponsiveMasonry>

        
       </div>
    </div>

  )
}

export default Hostel
