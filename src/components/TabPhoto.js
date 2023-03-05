import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import tw from "tailwind-styled-components";
import styled from "styled-components";

function TabPhoto() {
  return (
    <div>
      <span className="text-2xl font-extrabold">TAB 사진첩 📷</span>
      <Swiper
        className="mt-5"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="엠티.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="엠티.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="엠티.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="엠티.jpg"></img>
        </SwiperSlide>
      </Swiper>
      <div className="grid bg-[#F3F3F3] rounded-3xl	 p-5 mt-5">
        <span className="ml-3">
          📌 TAB 학회원들과 잊지 못할 특별한 추억을 만들어가요!
        </span>
      </div>
    </div>
  );
}

export default TabPhoto;
