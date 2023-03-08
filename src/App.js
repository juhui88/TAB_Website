import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProgramDetail from "./route/ProgramDetail";
import Home from './Home';
import Member from "./route/Member";
import Program from "./route/Program";
import { Helmet, HelmetProvider } from "react-helmet-async";


function App() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>TAB</title>
        </Helmet>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/program" element={<Program/>}/>
        <Route path="/member" element={<Member/>}/>
        <Route path="/program/:programId" element={<ProgramDetail/>}/>
      </Routes>
      </BrowserRouter>  
      </HelmetProvider>
      
    </div>
  );
}

export default App;
