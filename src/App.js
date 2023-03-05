import './App.css';
import Achievement from './components/Achievement';
import MainaAtivity from './components/MainActivity';
import TabCommunity from './components/TabCommunity';
import TabRecruit from './components/TabRecruit';
import TabPhoto from "./components/TabPhoto";
import ClubRoom from "./components/ClubRoom";
import WithTab from './components/WithTab';


function App() {
  return (
    <div>

      <div className='bg-[#865DFF] flex flex-col items-center justify-center py-3'>
        <img src='TAB_logo_textWhite.png' className='h-52'/>
        <div className='bg-[#E384FF] rounded-xl p-2 px-3'>
          <span className='text-white font-extrabold  '>
            Recruitment of new members for the 41st TAB
          </span>
          </div>
      </div>

      <div className="mx-auto  w-full lg:w-[1024px] p-7 space-y-20 ">
        <TabRecruit/>
        <WithTab/>
        <TabCommunity/>
        <MainaAtivity/>
        <Achievement/>
        <TabPhoto />
        <ClubRoom />
      </div>  

    </div>
  );
}

export default App;
