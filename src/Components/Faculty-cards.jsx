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
    <div className="main-faculty-carousel mt-24 mb-24">
      <h1 className="mb-[3vh] ml-[9vw] text-4xl font-bold">
        Our Top-Ranked Faculty
      </h1>
      <hr className="mb-[9vh] w-[82%] sm:ml-32" />
      <Swiper
        className="sm:block hidden"
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
          <div className="container ml-[0.7vw] ">
            <div className="card">
              <div className="imgBx">
                <img
                  className="w-16"
                  src="../../Images/director.png"
                />
              </div>
              <div className="contentBx">
                <h2>DR. R.K Agrawal</h2>

                <div className="color">
                  <h1>Director General</h1>
                </div>
                <a href="https://www.akgec.ac.in/about/director/">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container ">
            <div className="card">
              <div className="imgBx">
                <img
                  className="sm:block hidden"
                  src="../../Images/chairman.png"
                />
              </div>
              <div className="contentBx">
                <h2>Dr. Ashok Pal</h2>

                <div className="color">
                  <h1>Chairman</h1>
                </div>
                <a href="https://www.akgec.ac.in/about/management/">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container ">
            <div className="card">
              <div className="imgBx">
                <img
                  className="sm:block hidden"
                  src="../../Images/hod1.png"
                />
              </div>
              <div className="contentBx">
                <h2>DR. Rahul Sharma</h2>

                <div className="color">
                  <h1>IT HOD</h1>
                </div>
                <a href="https://www.akgec.ac.in/it-faculty/">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container ]">
            <div className="card">
              <div className="imgBx">
                <img
                  className="sm:block hidden"
                  src="../../Images/ruchi-ma'am.png"
                />
              </div>
              <div className="contentBx">
                <h2>DR. RUCHI GUPTA</h2>

                <div className="color">
                  <h1>Assistant Profesor</h1>
                </div>
                <a href="https://www.akgec.ac.in/it-faculty/">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container ">
            <div className="card">
              <div className="imgBx">
                <img
                  className="sm:block hidden"
                  src="../../Images/sarvachan-sir.png"
                />
              </div>
              <div className="contentBx">
                <h2>SARVACHAN VERMA</h2>

                <div className="color">
                  <h1>Assistant Profesor</h1>
                </div>
                <a href="https://www.akgec.ac.in/it-faculty/">View Profile</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
          
        
      </Swiper>

      <Carousel
        showArrows={true}
        // autoPlay={true}
        // infiniteLoop={true}
        className="block sm:hidden faculty-middle"
      >
        <div className="container ml-[4vw]">
          <div className="card">
            <div className="imgBx">
              <img
                className="sm:block hidden"
                src="../../Images/director.png"
              />
            </div>
            <div className="contentBx">
              <h2>DR. R.K Agrawal</h2>

              <div className="color">
                <h1>Director General</h1>
              </div>
              <a href="https://www.akgec.ac.in/about/director/">View Profile</a>
            </div>
          </div>
        </div>
        <div className="container ml-[4vw]">
          <div className="card">
            <div className="imgBx">
              <img
                className="sm:block hidden"
                src="../../Images/chairman.png"
              />
            </div>
            <div className="contentBx">
              <h2>Dr.Ashok Pal</h2>

              <div className="color">
                <h1>Chairman AKGIM</h1>
              </div>
              <a href="https://www.akgec.ac.in/about/management/">View Profile</a>
            </div>
          </div>
        </div>
        <div className="container ml-[4vw]">
          <div className="card">
            <div className="imgBx">
              <img className="" src="../../Images/hod1.png" />
            </div>
            <div className="contentBx">
              <h2>DR. Rahul Sharma</h2>

              <div className="color">
                <h1>IT HOD</h1>
              </div>
              <a href="https://www.akgec.ac.in/it-faculty/">View Profile</a>
            </div>
          </div>
        </div>
        <div className="container ml-[4vw]">
          <div className="card">
            <div className="imgBx">
              <img className="" src="../../Images/ruchi-ma'am.png" />
            </div>
            <div className="contentBx">
                <h2>DR. RUCHI GUPTA</h2>

                <div className="color">
                  <h1>Assistant Profesor</h1>
                </div>
                <a href="https://www.akgec.ac.in/it-faculty/">View Profile</a>
              </div>
          </div>
        </div>

        <div className="container ml-[4vw]">
          <div className="card">
            <div className="imgBx">
              <img
                className="sm:block hidden"
                src="../../Images/sarvachan-sir.png"
              />
            </div>
            <div className="contentBx">
              <h2>SARVACHAN VERMA</h2>

              <div className="color">
                <h1>Assistant Profesor</h1>
              </div>
              <a href="https://www.akgec.ac.in/it-faculty/">View Profile</a>
            </div>
          </div>
        </div>
        
      </Carousel>
    </div>
  );
}

export default Facultycards