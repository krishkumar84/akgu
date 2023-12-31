import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Autoplay,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./CSS/Carousel-cards.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const CarousalCards = () => {
      
  return (
    <>
      <div className="main-carousel-cards mb-24 mt-24">
        <h1 className="mb-[2vh] sm:ml-[9vw] p-3 text-4xl font-bold">
          Explore Our Degree Programs
        </h1>
        <hr className="mb-[3vh] sm:w-[82%] sm:ml-32" />

        <div className="bg-black sm:h-[85vh] w-[100%] overflow-hidden">
          <Swiper
            className="bg-black sm:block hidden h-[81vh] w-[93%] relative pb-10 overflow-hidden"
            spaceBetween={30}
            slidesPerView={3 / 2}
            centeredSlides={true}
            // loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            //   autoplay={{
            //     delay: 2500,
            //     // disableOnInteraction: false,
            //   }}
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
                spaceBetween: 250,
              },
              640: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          >
            <SwiperSlide className="">
              <div className=" boxes sm:w-[100%] w-[65vw]  ">
                <img
                  src="https://www.krmangalam.edu.in/Uploads/blogs/346bs_BlogBanner2.webp"
                  alt="AirMax Pro"
                  className="z-0 h-[100%] w-[100%]"
                />
                <div className="absolute w-[100%] inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">B.TECH</h1>
                  <p className=" text-sm text-gray-300">
                    Embark on a transformative journey with our Bachelor of
                    Technology (B.Tech) degree program.
                  </p>
                  <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className=" boxes sm:w-[100%] w-[65vw]  ">
                <img
                  src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/23151218/BA-Courses.png"
                  alt="AirMax Pro"
                  className="z-0 h-[50vh] w-[100%]"
                />
                <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white uppercase">Bachelors Of Arts</h1>
                  <p className=" text-sm text-gray-300">
                  Unleash your creativity, critical thinking, and communication skills with our Bachelor of Arts (BA) degree program.
                  </p>
                  <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className=" boxes  sm:w-[100%] w-[65vw]  ">
                <img
                  src="https://www.ncertbooks.guru/wp-content/uploads/2022/03/Diploma-Course-After-Ba.png"
                  alt="AirMax Pro"
                  className="z-0 h-[100%] w-[100%]"
                />
                <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">DIPLOMA</h1>
                  <p className=" text-sm text-gray-300">
                  Embark on a focused and hands-on educational journey with our <br /> Diploma program. 
                  </p>
                  <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className=" boxes  sm:w-[100%] w-[65vw]  ">
                <img
                  src="https://cdn.dribbble.com/users/1063514/screenshots/6868241/advadv.jpg"
                  alt="AirMax Pro"
                  className="z-0 h-[50vh] w-[100%] object-cover"
                />
                <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">MASTERS</h1>
                  <p className="text-sm text-gray-300">
                  Advance your career with our Master's program, designed for professionals seeking to excel in their chosen field.
                  </p>
                  <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className=" boxes  sm:w-[100%] w-[65vw]  ">
                <img
                  src="https://images.shiksha.com/mediadata/images/articles/1693301376phpAQDwXC.jpeg"
                  alt="AirMax Pro"
                  className="z-0 h-[100%] w-[100%] object-cover"
                />
                <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">BACHELOR OS SCIENCE</h1>
                  <p className=" text-sm text-gray-300">
                  Embark on a journey of scientific discovery with our Bachelor of Science (BSc) program.
                  </p>
                  <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className=" boxes  sm:w-[100%] w-[65vw]  ">
                <img
                  src="https://media.istockphoto.com/id/1278019267/vector/mba-school-students.jpg?s=612x612&w=0&k=20&c=pfBUN2rUcvgsos7GL-ZQX2Dm3ukNQQ1tFCMXOwMBAsI="
                  alt="AirMax Pro"
                  className="z-0 h-[49.8vh] w-[100%] object-cover"
                />
                <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">MBA</h1>
                  <p className=" text-sm text-gray-300">
                  Prepare for leadership excellence and strategic thinking with our Master of Business Administration (MBA) program.
                  </p>
                  <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className=" boxes boxes sm:w-[100%] w-[65vw]  ">
                <img
                  src="https://www.shutterstock.com/image-illustration/conceptual-business-illustration-words-bachelor-260nw-1013206882.jpg"
                  alt="AirMax Pro"
                  className="z-0 h-[49.8vh] w-[100%] object-cover"
                />
                <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">BACHELOR OF COMMERCE (BCom)</h1>
                  <p className=" text-sm text-gray-300">
                  Unleash your potential in the world of commerce with our Bachelor of Commerce (BCom) program.
                  </p>
                  <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <Carousel
            showArrows={true}
            // autoPlay={true}
            // infiniteLoop={true}
            className="block sm:hidden degree"
          >
            <div className=" boxes h-[70vh] sm:w-[100%]  ">
              <img
                  src="https://i.pinimg.com/564x/2e/f0/0e/2ef00e15b491ea75b73d228dca4596e4.jpg"
                  alt="AirMax Pro"
                className=" h-[86%] w-[100%]"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg mb-2 font-semibold text-white">B.TECH</h1>
                
                <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
              </div>
            </div>
            <div className=" boxes h-[70vh] sm:w-[100%]  ">
              <img
                  src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/23151218/BA-Courses.png"
                  alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg mb-2 font-semibold text-white">BACHELOR OF ARTS</h1>
                
                <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
              </div>
            </div>
            <div className=" boxes h-[70vh] sm:w-[100%]  ">
              <img
                  src="https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%]"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg mb-2 font-semibold text-white">DIPLOMA</h1>
                
                <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
              </div>
            </div>
            <div className=" boxes h-[70vh] sm:w-[100%]  ">
              <img
                  src="https://cdn.dribbble.com/users/1063514/screenshots/6868241/advadv.jpg"
                  alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg mb-2 font-semibold text-white">MASTERS</h1>
                
                <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
              </div>
            </div>
            <div className=" boxes h-[70vh] sm:w-[100%]  ">
              <img
                  src="https://i.pinimg.com/564x/9c/6c/8d/9c6c8d65c57cfb431861737d7f3b6e62.jpg"
                  alt="AirMax Pro"
                className="z-0 h-[96%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg mb-2 font-semibold text-white">BACHELOR OF SCIENCE</h1>
              
                <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
              </div>
            </div>
            <div className=" boxes h-[70vh] sm:w-[100%]  ">
              <img
                  src="https://media.istockphoto.com/id/1278019267/vector/mba-school-students.jpg?s=612x612&w=0&k=20&c=pfBUN2rUcvgsos7GL-ZQX2Dm3ukNQQ1tFCMXOwMBAsI="
                  alt="AirMax Pro"
                className="z-0 h-[77%] w-[100%]"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg mb-2 font-semibold text-white">MBA</h1>
                
                <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
              </div>
            </div>
            <div className=" boxes h-[70vh] sm:w-[100%]  ">
              <img
                  src="https://www.shutterstock.com/image-illustration/conceptual-business-illustration-words-bachelor-260nw-1013206882.jpg"
                  alt="AirMax Pro"
                className="z-0 h-[84%] w-[100%] "
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg mb-2 font-semibold text-white">BACHELOR OF COMMERCE</h1>
                
                <a className="ml-56 bg-red-500 p-4 rounded-lg hover:bg-red-700 h-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href="https://www.akgec.ac.in/courses-offered/">
                    Explore Degree &rarr;
                  </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default CarousalCards