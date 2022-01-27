import React, { useState } from "react";
import "./App.css";
import SideBar from "./Components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/login/Login";
import "./Components/sidebar/SideBar.css";
import Registration from "./Pages/registration/Registration";
import Main from "./Main";
// import Maindashboard from "./Pages/dashboard/Maindashboard";

function App() {
  // const [inactive, setInactive] = useState(false);
  return (
    <div>
      {/* <SideBar onCollapse={(inactive)=> {
          // console.log(inactive);
          setInactive(inactive);
        }}/> */}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="main/*" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
