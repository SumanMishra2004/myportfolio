import React from "react";
import Bulbs from "../../components/Bulb";
import Circles from "../../components/Circles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Typewriter from "typewriter-effect";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const index = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <div className="w-full h-full z-10 flex items-center bg-black/60  ">
      <Bulbs />
      <Circles />
      <div className=" h-[75vh]  w-[100vw] mt-[5rem] lg:mt-0 flex flex-col md:flex-row justify-around items-center md:px-[7rem] px-0 absolute z-20">
        <div className="w-[95vw] md:w-[45%] h-[95%] hidden md:flex items-center justify-center min-w-[40%]">
          <span className="text-[51px] font-bold uppercase text-shadow">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Wellcome the world of Magic ! ')
                .start()
                
                
            }}
          />
          </span>
          
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default index;
