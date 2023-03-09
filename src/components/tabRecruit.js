import tw from "tailwind-styled-components";
import styled from "styled-components";

const Bubble = tw.li`
    rounded-full
    bg-[#5C5C5C]
    p-5
    inline-block
    w-auto
    my-3
    text-white
    relative
    ml-4
    text-xs
    sm:text-base
`;
const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 40px solid #5c5c5c;
  border-right: 40px solid transparent;
  position: absolute;
  left: -60px;
  transform: rotate(180deg);
  bottom: 20px;
`;
const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 40px solid #5c5c5c;
  border-right: 40px solid transparent;
  position: absolute;
  bottom: 20px;
  right: -56px;
`;

export default function TabRecruit() {
  return (
    <div className="overflow-hidden">
      <div className="pb-7">
        <span className="text-2xl sm:text-3xl font-extrabold">TAB 41기 신입부원 모집!</span>
      </div>

      <ul className="md:w-3/4">
        <Bubble>
          <span>
            코린이 탈출하고 싶다.
            <br />
            코딩은 처음인데 어떡하지?😢
          </span>
          <TriangleLeft />
        </Bubble>
        <div className="flex justify-end ">
          <Bubble className="ml-0 mr-4">
            <span>
              내 관심분야에 대해서 알아가고, 다른 사람들과 공부해보고싶어!
              <br />
              프로젝트도 해볼 수 있으면 좋을 텐데...🧑‍💻
            </span>
            <TriangleRight />
          </Bubble>
        </div>
        <Bubble>
          <span>
            과 선배들이랑 교류해보고싶다!
            <br />
            함께 성장할 사람들 어디없나?
          </span>
          <TriangleLeft />
        </Bubble>
      </ul>
      <div className="mt-20 mb-5">
        <span className="text-xl sm:text-2xl font-extrabold">
          위에 해당하는 컴퓨터공학부 학생이라면 주목📢
        </span>
      </div>
      <div className="grid bg-[#F3F3F3] rounded-3xl p-3 text-xs sm:text-base">
        <span className="mb-3">📌 TAB은 어떤 곳인가요?</span>
        <span className="ml-5 sm:ml-7">
          TAB은 키보드의 Tab키와 'Talk About Bug'의 약자로 '프로그래밍 개발 지식
          공유'라는 의미를 두고 있는 1982년에 설립된 컴퓨터공학부 소속
          학회입니다. <br />
          함께 프로그래밍 지식에 대한 대화를 나누고, 자신이 관심있는 분야를 함께
          공부하며 전공 수업 이외의 부분들을 함께 공유하여 학회원들의 실력
          향상을 도모하고 있습니다. <br />
          저희는 보다 한 분야에 국한되지 않아 다양한 공부를 접할 수 있는 기회를
          제공합니다. <br />
          또한, 선후배간의 친목을 도모하고, 재학생들 뿐만 아니라 졸업생들과의
          네트워킹할 수 있는 다양한 활동들을 진행하고 있습니다.
        </span>
      </div>
    </div>
  );
}
