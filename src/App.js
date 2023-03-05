import "./App.css";
import TabRecruit from "./components/tabRecruit";
import TabPhoto from "./components/TabPhoto";
import ClubRoom from "./components/ClubRoom";

function App() {
  return (
    <div>
      <div className="bg-[#865DFF] h-64 flex items-center justify-center text-3xl text-white">
        TAB
      </div>

      <div className="mx-auto  w-full lg:w-[1024px] p-7">
        <TabRecruit />
        <TabPhoto />
        <ClubRoom />
      </div>
    </div>
  );
}

export default App;
