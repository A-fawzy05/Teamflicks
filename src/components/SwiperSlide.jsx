import '../App.css'
import React from 'react';
import pic from '../assets/sonic.jpeg';
import marvel from '../assets/marvel.jpeg';
import spiderman from '../assets/spiderman.jpeg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SwiperSlider = () => {

    return (
        <Swiper
          modules={[ Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          effect="fade"
          className='w-full'
        >
          <SwiperSlide><img src= {pic} alt="sonic" className='m-auto w-[80%]'/></SwiperSlide>
          <SwiperSlide><img src= {marvel} alt="marvel" className='m-auto w-[80%]'/></SwiperSlide>
          <SwiperSlide><img src= {spiderman} alt="spiderman" className='m-auto w-[80%]'/></SwiperSlide>
        </Swiper>
      )



}

export default SwiperSlider;