import { Route,BrowserRouter as Router, Routes } from "react-router-dom";

import Mynavbar from "./Mycomponents/Mynavbar";
import Home from "./React_Routing/Home";
import About from "./React_Routing/About";
import Service from "./React_Routing/Service";
import Contact from "./React_Routing/Contact";
import Login from "./Mycomponents/LOGIN/Login";
import Register from "./Mycomponents/LOGIN/Register";
import Common from "./React_Routing/COMMON/Common";

function App() {
  return (
    <div className="App">      
          <Router>
            <Mynavbar/>
              <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/home" element={<Home/>}/> 
                <Route path="/about" element={<About/>}/> 
                <Route path="/service" element={<Service/>}/> 
                <Route path="/contact" element={<Contact/>}/> 
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
              </Routes>
              <Common/>
          </Router>
    </div>
  );}

export default App;
