import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@mui/material/Container';


import useMedia from '../../hooks/CustomHokkie';

import './Hero.css'
import 'swiper/css';
import 'swiper/css/pagination';

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
                <SwiperSlide>
                  <div className="bg-slider">
                    <Container>
                      <div className="text-slider">
                        <h3>Olá, o que você está <br /> buscando?</h3>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                      </div>
                    </Container>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slider">
                    <Container>
                      <div className="text-slider">
                        <h3>Olá, o que você está <br /> buscando?</h3>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                      </div>
                    </Container>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slider">
                    <Container>
                      <div className="text-slider">
                        <h3>Olá, o que você está <br /> buscando?</h3>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                      </div>
                    </Container>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slider">
                    <Container>
                      <div className="text-slider">
                        <h3>Olá, o que você está <br /> buscando?</h3>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                      </div>
                    </Container>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
      ) : isWebDevice ? (
        <div className="HeroWeb">
            <Swiper
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                  <div className="bg-slider">
                    <Container>
                      <div className="text-slider">
                        <h3>Olá, o que você está <br /> buscando?</h3>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                      </div>
                    </Container>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slider">
                    <Container>
                      <div className="text-slider">
                        <h3>Olá, o que você está <br /> buscando?</h3>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                      </div>
                    </Container>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slider">
                    <Container>
                      <div className="text-slider">
                        <h3>Olá, o que você está <br /> buscando?</h3>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                      </div>
                    </Container>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slider">
                    <Container>
                      <div className="text-slider">
                        <h3>Olá, o que você está <br /> buscando?</h3>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                      </div>
                    </Container>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
      ) : null}
    </>
  )
}

export default Hero
