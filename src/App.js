import React, { useState } from "react";
import "./App.css";
import SideBar from "./Components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard/Dashboard";
import Login from "./Pages/login/Login";
import "./Components/sidebar/SideBar.css"
import Registration from "./Pages/registration/Registration";
// import Maindashboard from "./Pages/dashboard/Maindashboard";


function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div>
       
        <SideBar onCollapse={(inactive)=> {
          // console.log(inactive);
          setInactive(inactive);
        }}/>
       <div className={`container ${inactive ? "inactive" : ""}`}>
       <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
       </div>
    </div>
  );
}

export default App;
