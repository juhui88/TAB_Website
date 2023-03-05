import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
