import Bar from "./components/Bar";
import Header from "./components/Header";
import ProgramItem from "./components/program/ProgramItem";

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
            <div className="grid grid-cols-2 gap-12 pb-40">
                {[1,2,3,4,5,6,7,8].map(i=><ProgramItem imgSrc = {"flutter.svg"} title = {"💙 ️flutter session - flutter로 인스타그램 만들기"}/>)}
                
            </div>
        </div>
        <Bar/>
    </div>)
}