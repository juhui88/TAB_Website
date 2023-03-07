import { Link, Route, Routes } from "react-router-dom";
import Bar from "./components/Bar";
import Header from "./components/Header";
import ProgramDetail from "./ProgramDetail";
import ProgramItem from "./components/program/ProgramItem";
import data from "./api/2022TAB_semina.json"

export default function Program() {
    return(<div>
        <Header/>
        <div className="mx-auto  w-full lg:w-[1024px] p-7">
            <span className="text-3xl font-extrabold">지난 TAB의 활동들, 함께 보실까요?</span>
            <div className="py-10 text-center text- mb-10">
                설레는 새 학기, 내 흥미분야는 뭘까?<br/>
                TAB에서 선후배/동기들과 함께 공부하고 성장해보세요. <br/>
                다양한 스터디, 세미나가 준비되어있습니다.
            </div>
            <div className="grid md:grid-cols-2 gap-12 pb-40">
                {data.map((d,i)=>
                <Link to = {`${i}`}>
                    <ProgramItem imgSrc = {d.imgSrc[0]} title = {d.title}/>
                </Link>
                )}
                
            </div>
        </div>
        <Bar/>
    </div>)
}