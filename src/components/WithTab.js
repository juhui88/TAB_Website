import tw from "tailwind-styled-components"
const Item = tw.div`
    flex 
    flex-col 
    space-y-2
`
const ItemTitle = tw.span`
    text-xl
    font-bold
`
export default function WithTab() {
    return(<div className="my-16">
        <span className="text-2xl font-extrabold">
            TAB과 함께
        </span>
        <div className="flex justify-center">
            <img src="TAB_logo_textBlack.png"></img>
        </div>
        
        <div className="mt-4 space-y-6">
            <Item>
                <ItemTitle>공부하고 성장해요</ItemTitle>
                <span>관심있는 분야의 스터디에 참가해 선배, 동기들과 공부하다보면 어느새 실력이 자라있을거예요! 자유롭게 스터디를 주최하고 책 스터디를 진행해도 좋아요.</span>
            </Item>
            <Item>
                <ItemTitle>즐겁게 네트워킹해요</ItemTitle>
                <span>최신 정보를 자유롭게 공유하고, 관심있는 개발 컨퍼런스/세미나가 있다면 함께 참여해봐요! 재학생들을 위한 카카오톡 채팅방과, 졸업생 선배분들과의 교류를 위한 디스코드 커뮤니티가 마련되어 있어요. </span>
            </Item>
            <Item>
                <ItemTitle>공부하고 성장해요</ItemTitle>
                <span>관심있는 분야의 스터디에 참가해 선배, 동기들과 공부하다보면 어느새 실력이 자라있을거예요! 자유롭게 스터디를 주최하고 책 스터디를 진행해도 좋아요.</span>
            </Item>
        </div>
    </div>)
}