import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProgramDetail from "./ProgramDetail";
import Home from './Home';
import Member from "./Member";
import Program from "./Program";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/program" element={<Program/>}/>
        <Route path="/member" element={<Member/>}/>
        <Route path="/program/:programId" element={<ProgramDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
