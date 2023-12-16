import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Autoplay,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./CSS/Carousel-cards.css"


const CarousalCards = () => {
      
  return (
    <>
      <div className="main-carousel-cards mb-24 mt-24">
        <h1 className='mb-[5vh] ml-[14vw] text-4xl font-bold'>Explore Our Online Degree Programs</h1>
        <hr  className='mb-[5vh]'/>
        <Swiper className='bg-black h-[80vh] pt-9 w-[100%] relative  overflow-hidden'
            spaceBetween={70}
          // slidesPerView={3/2}
          centeredSlides={true}
          loop={true}
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
              spaceBetween:270,
              slidesPerView: 1,
              
            },
            640: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Pagination, Navigation, Mousewheel]}
        >
          <SwiperSlide className='transition-transform transform hover:scale-105'>
          <div className=" boxes h-[64vh] mr-[100vw] sm:w-[100%] w-[100vw] transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='transition-transform transform hover:scale-105'>
          <div className=" boxes h-[64vh] sm:w-[100%] w-[80vw] transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='transition-transform transform hover:scale-105'>
          <div className=" boxes h-[64vh] sm:w-[100%] w-[80vw] transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='transition-transform transform hover:scale-105'>
          <div className=" boxes h-[64vh] sm:w-[100%] w-[80vw] transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='transition-transform transform hover:scale-105'>
          <div className=" boxes h-[64vh] sm:w-[100%] w-[80vw] transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='transition-transform transform hover:scale-105'>
          <div className=" boxes h-[64vh] sm:w-[100%] w-[80vw] transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='transition-transform transform hover:scale-105'>
          <div className=" boxes h-[64vh] sm:w-[100%] w-[80vw] transition-transform transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-[100%] w-[100%] object-cover"
              />
              <div className="absolute w-[100%]  inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
        {/* <div className="h-24"></div> */}
      </div>
    </>
  );
}

export default CarousalCards