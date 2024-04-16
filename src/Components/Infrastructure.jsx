import React from 'react'

import Masonry,{ ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './galleryImages'

const Infrastructure = () => {
  return (
    <>
    <h1 className='text-4xl font-semibold text-center pt-10 pb-14'>Our Infrastructure</h1>
    <div className='w-full flex justify-center items-center mb-8'>
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}} className='w-[90%]'>
      <Masonry gutter='1rem'className=''>
         {
            galleryImages.map((item,index) => (
                <img className='masonry__img' src={item} key={index} alt=""
                 style={{'width':'100%','display':'block','borderRadius':'10px'}} />
            ))
         }
      </Masonry>
    </ResponsiveMasonry>
    </div>
    </>
    

  )
}

export default Infrastructure
