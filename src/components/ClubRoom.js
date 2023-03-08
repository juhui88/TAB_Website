import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import tw from "tailwind-styled-components";
import styled from "styled-components";

function ClubRoom() {
  return (
    <div>
      <span className="text-2xl font-extrabold">모여봐요 TAB 학회방 🏠</span>
      <Swiper
        className="mt-5 bg-[#F3F3F3] rounded-3xl"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="rounded-3xl object-contain h-96" src="ClubRoom/TAB_불빛.gif"></img>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl object-contain h-96" src="ClubRoom/room2.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl object-contain h-96" src="ClubRoom/TAB_문패.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl object-contain h-96" src="ClubRoom/학회방.jpg"></img>
        </SwiperSlide>
      </Swiper>
      <div className="grid bg-[#F3F3F3] rounded-3xl	 p-5 mt-5">
        <span className="ml-3">
          📌 TAB 학회원을 위한 전용 학회방은 한국외국어대학교 글로벌캠퍼스
          공학관 106호에 위치합니다. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;학회원들이 공강시간에 자유롭게 공부할 수
          있고 휴식할 수 있는 공간이에요!
        </span>
      </div>
    </div>
  );
}

export default ClubRoom;
