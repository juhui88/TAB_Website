export default function TabCommunity(){
    return(<div>
        <span className="text-2xl font-extrabold ">TAB만의 커뮤니티가 존재한다고?</span>
        <div className="bg-[#F3F3F3] rounded-2xl p-10 mt-2 space-y-10 sm:space-y-5  ">
            <div className="sm:flex sm:space-x-5">
                <div className="flex flex-col">
                    <span className="text-center font-bold">TAB Discord</span>
                    <img className="rounded-2xl w-96" src="Discord.svg"/>
                </div>
                <div className="mt-6">
                    <div className="bg-white p-5 rounded-2xl">
                        졸업생, 재학생, 휴학생 간의 소통 및 교류를 위한 커뮤니티예요!<br/>
                        채용정보/정보-홍보/공모전-대회 와 같은 정보를 공유하고 스터디를 진행하기도 해요!
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:space-x-5">
                <div className="mt-6 flex-1">
                    <div className="bg-white p-5 rounded-2xl">
                        학교에 재학중인 학회원들의 주요 소통 창구!<br/>
                        중요 공지나 학회 활동진행이 이루어져요.<br/>
                        자유로운 정보공유도 환영입니다 👍
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-center font-bold">TAB 카카오톡 채팅방</span>
                    <img className="rounded-2xl w-96" src="KaKaoTalk.svg"/>
                </div>
                
            </div>
        </div>
    </div>)
}