import Bar from "../components/Bar";
import tw from "tailwind-styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation } from "swiper";
import data_2022 from "../api/2022TAB_semina.json";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import data_2023 from "../api/2023TAB_semina.json";

const Item = tw.div`
    flex
    flex-col
    space-y-3
`;
const ItemTitle = tw.span`
    text-xl
    font-bold
`;
const ItemDetail = tw.span`
    ml-5
`;
export default function ProgramDetail() {
  const { programId } = useParams();
  const data =
    programId >= 20 ? data_2023[Number(programId) - 20] : data_2022[programId];
  return (
    <div>
      <Header />
      <div className="mx-auto  w-full lg:w-[1024px] p-7 ">
        <span className="text-2xl sm:text-3xl font-extrabold ">
          {data.title}
        </span>
        <img src={data.imgSrc[0]} className="rounded-3xl w-full my-5" />
        <div className="bg-[#F3F3F3] p-5 rounded-3xl mb-5 text-xs sm:text-base">
          {data.intro}
        </div>
        <div className=" space-y-10 text-xs sm:text-base">
          <Item className="flex flex-col">
            <ItemTitle>🚩 목표</ItemTitle>
            <ItemDetail>{data.goal}</ItemDetail>
            {Number(programId) - 20 === 0 ? (
              <div className="pl-5">
                <Link
                  className="text-blue-400 hover:font-bold"
                  to="https://ian-react-project-emotiondiary.web.app/"
                >
                  감성 일기장 구경하러 가기
                </Link>
              </div>
            ) : null}
          </Item>
          <Item>
            <ItemTitle>🗓️ 활동기간</ItemTitle>
            <ItemDetail>{data.period}</ItemDetail>
          </Item>
          <Item>
            <ItemTitle>👩‍💻 활동내용</ItemTitle>
            <div className="ml-5">
              {data.content.split("\n").map((i) => (
                <span>
                  {i}
                  <br />
                </span>
              ))}
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
              {data.imgSrc.map((i) => (
                <SwiperSlide>
                  <img src={i} className="h-96 object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Item>
        </div>
      </div>
      <Bar />
    </div>
  );
}
