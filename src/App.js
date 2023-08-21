// import List from './Pages/List';
// import { useState } from "react";

import "./App.css";
import { Routes,Route} from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"





function App() {
  
  // const Calc = () =>{
  //   let w = 61
  //   let h = 1.5
  //   let BMI = w / (h*h)  

  //   return {w,h,BMI}
  // }
//  const {w,h,BMI} = Calc()
// const [name,setName] = useState('kookie')
  return (
    <div className="App">
{/* 
<button onClick={()=>setName("Sunghoon")}> click me</button>
    {
      name ==="kookie"? <p>party party yeah</p>:<p>not shine</p>
    } */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
     
  
    </Routes>

    </div>
  );
}

export default App;
