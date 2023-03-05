import Bar from "./components/Bar";
import Header from "./components/Header";
import tw from "tailwind-styled-components"
import Img from "./programImg/flutter.svg"
import logo from "./programImg/TAB_logo_textWhite.png";
import activity from "./programImg/flutterActivity.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation } from "swiper";

const Item = tw.div`
    flex
    flex-col
    space-y-3
`
const ItemTitle = tw.span`
    text-xl
    font-bold
`
const ItemDetail = tw.span`
    ml-5
`
export default function ProgramDetail() {
    return(
        <div>
            <div className='bg-[#865DFF] flex flex-col items-center justify-center py-3'>
                <img src={logo} className='h-52'/>
                <div className='bg-[#E384FF] rounded-3xl p-2 px-3'>
                    <span className='text-white font-extrabold  '>
                        Recruitment of new members for the 41st TAB
                    </span>
                </div>
            </div>

            <div className="mx-auto  w-full lg:w-[1024px] p-7 ">
                <span className="text-3xl font-extrabold">flutter session - flutter로 인스타그램 만들기</span>
                <img src ={Img} className="rounded-3xl w-full mb-5"/>
                <div className="bg-[#F3F3F3] p-5 rounded-3xl mb-5">💙 ️최근 많은 관심을 받는 flutter! 인스타그램 뷰를 만들어보면서 같이 찍먹해볼래? </div>
                <div className=" space-y-10">
                    <Item className="flex flex-col">
                        <ItemTitle>🚩 목표</ItemTitle>
                        <ItemDetail >Flutter가 무엇인지 알아보고, 기초를 공부해보자</ItemDetail>
                    </Item>
                    <Item>
                        <ItemTitle>🗓️ 활동기간</ItemTitle>
                        <ItemDetail>2022.05.10 ~ </ItemDetail>
                    </Item>
                    <Item>
                        <ItemTitle>👩‍💻 활동내용</ItemTitle>
                        <div className="ml-5">
                            플러터 세션은 google meet을 통해 온라인으로 진행되었습니다.<br/>
                            공부한 내용은 다음과 같습니다.
                            <ul className="list-decimal py-7 ml-6">
                                <li>
                                    Flutter의 UI
                                </li>
                                <li>
                                    Flutter 위젯 생성 및 위젯 데이터 변경 적용
                                </li>
                                <li>
                                    StatelessWidget
                                </li>
                                <li>
                                    StatefulWidget , State
                                </li>
                                <li>
                                    라우터
                                </li>
                            </ul>
                            기초 개념을 배우고 인스타그램 뷰를 예시로 페이지를 구현해보았어요!<br/>
                            구현한 페이지는 Discord에 제출하고 서로 피드백을하는 시간을 가졌습니다.
                        </div>
                    </Item>
                    <Item>
                        <ItemTitle>✨ 활동사진</ItemTitle>
                        <Swiper
                            className="mt-5 w-full"
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <img src = {activity} className="rounded-3xl "/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src = {activity} className="rounded-3xl"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src = {activity} className="rounded-3xl"/>
                            </SwiperSlide>
                        </Swiper>
                    </Item>
                </div>
            </div>
            <Bar/>
        </div>
    )
}