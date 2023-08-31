
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../Components/SectionTitel/SectionTitle';


const SwaiperSlider = () => {
  return (
    <>
      <section>
        <SectionTitle heading={'Order Online'}
        subHeading={'From 10am to 11pm'}
        ></SectionTitle>

      </section>

      <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper" my-4
        >

          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='uppercase text-center -mt-12 text-yellow-100'>Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='uppercase text-center -mt-12 text-yellow-100'>barger</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='uppercase text-center -mt-12 text-yellow-100'>Soup</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='uppercase text-center -mt-12 text-yellow-100'>cake</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='uppercase text-center -mt-12 text-yellow-100'>Pizza</h3>
          </SwiperSlide>

        </Swiper>
      </section>
    </>
  );
};

export default SwaiperSlider;