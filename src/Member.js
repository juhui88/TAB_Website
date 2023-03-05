import Bar from "./components/Bar";
import Header from "./components/Header";
import MemberItem from "./components/member/MemberItem";

const memberdata = [
  {
    id: 1,
    name: "김민서",
    generation: "38",
    class: "20",
    nickname: "하르방",
    github: "kimwest00",
    link: "https://github.com/kimwest00",
    image: "https://avatars.githubusercontent.com/u/71765938?v=4",
  },
  {
    id: 2,
    name: "김민서",
    generation: "38",
    class: "20",
    nickname: "하르방",
    github: "kimwest00",
    link: "https://github.com/kimwest00",
    image: "https://avatars.githubusercontent.com/u/71765938?v=4",
  },
  {
    id: 3,
    name: "김민서",
    generation: "38",
    class: "20",
    nickname: "하르방",
    github: "kimwest00",
    link: "https://github.com/kimwest00",
    image: "https://avatars.githubusercontent.com/u/71765938?v=4",
  },
  {
    id: 4,
    name: "김민서",
    generation: "38",
    class: "20",
    nickname: "하르방",
    github: "kimwest00",
    link: "https://github.com/kimwest00",
    image: "https://avatars.githubusercontent.com/u/71765938?v=4",
  },
  {
    id: 5,
    name: "김민서",
    generation: "38",
    class: "20",
    nickname: "하르방",
    github: "kimwest00",
    link: "https://github.com/kimwest00",
    image: "https://avatars.githubusercontent.com/u/71765938?v=4",
  },
];

export default function Member() {
  return (
    <div>
      <Header />
      <div className="mx-auto  w-full lg:w-[1024px] p-7">
        <span className="text-3xl font-extrabold">TAB 학회원을 소개합니다</span>

        <div className="grid grid-cols-4 gap-7 pb-40 mt-12">
          {memberdata.map((i) => (
            <MemberItem image={i.image} name={i.name} />
          ))}
        </div>
      </div>
      <Bar />
    </div>
  );
}
