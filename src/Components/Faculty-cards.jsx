import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Autoplay,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./CSS/Faculty-card.css"

const Facultycards = () => {
  return (
    <div className="main-faculty-carousel mb-24">
         <h1 className='mb-[3vh] ml-[14vw] text-4xl font-bold'>Lorem ipsum</h1>
        <hr  className='mb-[9vh]'/>
      <Swiper
          spaceBetween={0}
        slidesPerView={1}
        // centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   // disableOnInteraction: false,
        // }}
        cssMode={true}
        sticky={false}
        freeMode={{ enable: true }}
        mousewheel={{
          mousewheel: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1/2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
      >
        <SwiperSlide>
          <div className="container ml-[0.9vw]">
            <div className="card">
              <div className="imgBx">
                <img src="../../Images/ruchi-ma'am.png" />
              </div>
              <div className="contentBx">
                <h2>Assistant Profesor</h2>
                
                <div className="color">
                    <h1>DR. RUCHI GUPTA</h1>
                </div>
                  <a href="#">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container ml-[0.7vw]">
            <div className="card">
              <div className="imgBx">
                <img src="../../Images/chairman.png" />
              </div>
              <div className="contentBx">
                <h2>Chairman</h2>
                
                <div className="color">
                    <h1>Ashok Pal</h1>
                </div>
                  <a href="#">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container ml-[0.7vw]">
            <div className="card">
              <div className="imgBx">
                <img src="../../Images/director.png" />
              </div>
              <div className="contentBx">
                <h2>Director General</h2>
                
                <div className="color">
                    <h1>DR. R.K Agrawal</h1>
                </div>
                  <a href="#">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container ml-[0.7vw]">
            <div className="card">
              <div className="imgBx">
                <img src="../../Images/sarvachan-sir.png" />
              </div>
              <div className="contentBx">
                <h2>Assistant Profesor</h2>
                
                <div className="color">
                    <h1>SARVACHAN VERMA</h1>
                </div>
                  <a href="#">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container ml-[0.7vw]">
            <div className="card">
              <div className="imgBx">
                <img src="../../Images/ruchi-ma'am.png" />
              </div>
              <div className="contentBx">
                <h2>Assistant Profesor</h2>
                
                <div className="color">
                    <h1>DR. RUCHI GUPTA</h1>
                </div>
                  <a href="#">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Facultycards