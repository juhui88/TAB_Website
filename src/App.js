import './App.css';
import TabRecruit from './components/TabRecruit';

function App() {
  return (
    <div>
      <div className='bg-[#865DFF] h-64 flex items-center justify-center text-3xl text-white'>
        TAB
      </div>

      <div className="mx-auto bg-red-300 w-full lg:w-[1024px] p-7">
        <TabRecruit/>
        <div className='text-xl font-normal'>TAB 41기 신입부원 모집!  </div>
        <div className='text-xl font-bold'>TAB 41기 신입부원 모집!  </div>
        <div className='text-xl font-extrabold'>TAB 41기 신입부원 모집!  </div>
        <div className='bg-gray-300 p-3 flex flex-col'>
          <span>
            📌  TAB은 어떤 곳인가요?
          </span>
          <span>
            TAB은 키보드의 Tab키와 'Talk About Bug'의 약자로 '프로그래밍 개발 지식 공유'라는 의미를 두고 있는 1982년에 설립된 컴퓨터공학부 소속 학회입니다. <br/>
함께 프로그래밍 지식에 대한 대화를 나누고, 자신이 관심있는 분야를 함께 공부하며 전공 수업 이외의 부분들을 함께 공유하여 학회원들의 실력 향상을 도모하고 있습니다. <br/>
저희는 보다 한 분야에 국한되지 않아 다양한 공부를 접할 수 있는 기회를 제공합니다. <br/>
또한, 선후배간의 친목을 도모하고, 재학생들 뿐만 아니라 졸업생들과의 네트워킹할 수 있는 다양한 활동들을 진행하고 있습니다.
          </span>
        </div>
      </div>  
    </div>
    
  );
}

export default App;
