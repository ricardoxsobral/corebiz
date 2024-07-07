import { Swiper, SwiperSlide } from 'swiper/react';

import useMedia from '../../hooks/CustomHokkie';

import './Hero.css'
import 'swiper/css';
import 'swiper/css/pagination';

import bannerMobile from '../../assets/Banner.png'
import bannerWeb from '../../assets/BannerWeb.jpg'

import { Pagination } from 'swiper/modules';

function Hero() {

  const isMobileDevice = useMedia('mobile');
  const isWebDevice = useMedia('web');

  return (
    <>
    {isMobileDevice ? (
        <div className='Hero'>
            <Swiper
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={bannerMobile} alt="img-slider" /></SwiperSlide>
                <SwiperSlide><img src={bannerMobile} alt="img-slider" /></SwiperSlide>
                <SwiperSlide><img src={bannerMobile} alt="img-slider" /></SwiperSlide>
                <SwiperSlide><img src={bannerMobile} alt="img-slider" /></SwiperSlide>
            </Swiper>
        </div>
      ) : isWebDevice ? (
        <div className="Hero">
            <Swiper
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={bannerWeb} alt="img-slider" /></SwiperSlide>
                <SwiperSlide><img src={bannerWeb} alt="img-slider" /></SwiperSlide>
                <SwiperSlide><img src={bannerWeb} alt="img-slider" /></SwiperSlide>
                <SwiperSlide><img src={bannerWeb} alt="img-slider" /></SwiperSlide>
            </Swiper>
        </div>
      ) : null}
    </>
  )
}

export default Hero
