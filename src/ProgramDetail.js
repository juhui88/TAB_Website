import Bar from "./components/Bar";
import Header from "./components/Header";
import tw from "tailwind-styled-components"
import Img from "./programImg/flutter.svg"
import logo from "./programImg/TAB_logo_textWhite.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation } from "swiper";
import json from "./api/2022TAB_semina.json"
import { useParams } from "react-router-dom";

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
    const {programId} = useParams();
    const data = json[programId]
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
                <span className="text-3xl font-extrabold">{data.title}</span>
                <img src ={data.imgSrc[0]} className="rounded-3xl w-full my-5"/>
                <div className="bg-[#F3F3F3] p-5 rounded-3xl mb-5">{data.intro}</div>
                <div className=" space-y-10">
                    <Item className="flex flex-col">
                        <ItemTitle>🚩 목표</ItemTitle>
                        <ItemDetail >{data.goal}</ItemDetail>
                    </Item>
                    <Item>
                        <ItemTitle>🗓️ 활동기간</ItemTitle>
                        <ItemDetail>{data.period}</ItemDetail>
                    </Item>
                    <Item>
                        <ItemTitle>👩‍💻 활동내용</ItemTitle>
                        <div className="ml-5">
                            {data.content.split("\n").map(i=><span>{i}<br/></span>)}
                        </div>
                    </Item>
                    <Item>
                        <ItemTitle>✨ 활동사진</ItemTitle>
                        <Swiper
                            className="mt-5 w-full h-96 bg-[#F3F3F3] rounded-3xl"
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                       {data.imgSrc.map(i=><SwiperSlide><img src = {i} className="h-96 object-contain"/></SwiperSlide>)}
                        </Swiper>
                    </Item>
                </div>
            </div>
            <Bar/>
        </div>
    )
}