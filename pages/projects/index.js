import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import './styles.css';

// import required modules
import { EffectCards } from "swiper";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";

import Bulbs from "../../components/Bulb";
export default function Works() {
  return (
    <>
      <div className="h-full w-full md:w-[100%] bg-primary/30 lg:pr-[10rem] flex items-center md:justify-around flex-col md:flex-row overflow-auto pt-[9rem] md:pt-0 justify-start bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat bg-blend-color-dodge -z-[10] ">
        <Bulbs />

       
        <div className=" h-min md:h-full w-full md:w-[50%]   flex items-center justify-center ">
          <motion.h2
            className=" text-[25px] leading-tight md:text-[45px] md:leading-[1.3] mb-4 font-semibold pb-[3rem] md:pb-0 z-10 md:pl-20 px-3"
            variants={fadeIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <span className="md:text-[50px] text-[30px]"> E</span>
            xplore the depths of my project showcase, where innovation meets
            execution.
          </motion.h2>
        </div>
        <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}
