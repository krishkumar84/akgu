import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Autoplay,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./CSS/Faculty-card.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Facultycards = () => {
  return (
    <div className="main-faculty-carousel mb-24">
         <h1 className='mb-[3vh] ml-[9vw] text-4xl font-bold'>Our Top-Ranked Faculty</h1>
        <hr  className='mb-[9vh] w-[82%] ml-32'/>
      <Swiper
      className='sm:block hidden'
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
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 5,
          },
        }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
      >
        <SwiperSlide>
          <div className="container ml-[0.9vw]">
            <div className="card">
              <div className="imgBx">
                <img className='sm:block hidden' src="../../Images/ruchi-ma'am.png" />
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
                <img className='sm:block hidden' src="../../Images/chairman.png" />
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
                <img className='sm:block hidden' src="../../Images/director.png" />
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
                <img className='sm:block hidden' src="../../Images/sarvachan-sir.png" />
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
                <img className='sm:block hidden' src="../../Images/ruchi-ma'am.png" />
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

      <Carousel
              showArrows={true}
              // autoPlay={true}
              // infiniteLoop={true}
              className="block sm:hidden"
            >
          <div className="container  ml-[4vw]  sm:ml-[4vw]">
            <div className="card">
              <div className="imgBx">
                <img className='' src="../../Images/ruchi-ma'am.png" />
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
          <div className="container ml-[13vw] sm:ml-[4vw]">
          <div className="card">
              <div className="imgBx">
                <img className='sm:block hidden' src="../../Images/chairman.png" />
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
          <div className="container ml-[13vw] sm:ml-[4vw]">
          <div className="card">
              <div className="imgBx">
                <img className='sm:block hidden' src="../../Images/director.png" />
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
          <div className="container ml-[13vw] sm:ml-[4vw]">
          <div className="card">
              <div className="imgBx">
                <img className='sm:block hidden' src="../../Images/sarvachan-sir.png" />
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
          <div className="container ml-[13vw] sm:ml-[4vw]">
            <div className="card">
              <div className="imgBx">
                <img className='' src="../../Images/ruchi-ma'am.png" />
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
      </Carousel>
    </div>
  );
}

export default Facultycards