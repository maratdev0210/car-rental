// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css';

export default function Swipe({children}) {
  return (
    <Swiper
      
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      navigation={false}
      loop={true}
      autoplay={{
        delay: 1500, 
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className='mySwiper'
    >
    {children}
    {
        /*
        images.map((image) => {
            return <SwiperSlide>
                <img src={image}></img>
            </SwiperSlide>
        }) */
    }
    {
        /*<SwiperSlide>
        <img width="250" height="119" src="./public/mercedes/car0.png">

        </img>
      </SwiperSlide>
      <SwiperSlide>
      <img width="250" height="119" src="./public/mercedes/car1.png">
            
     </img>
      </SwiperSlide>
      <SwiperSlide>
      <img width="250" height="119" src="./public/mercedes/car2.png">
            
            </img>
      </SwiperSlide> */
    }
      
      
    </Swiper>
  );
};