import React, { useState } from "react";
import Dashboard from "./Pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import "./Components/sidebar/SideBar.css";
import SideBar from "./Components/sidebar/SideBar";
import DataInsert from "./Pages/dataInsert/DataInsert";
import DataView from "./Pages/dashboard/component/dataview/DataView";
const Main = () => {
  const [inactive, setInactive] = useState(false);
  return (
    <div>
      <SideBar
        onCollapse={(inactive) => {
          // console.log(inactive);
          setInactive(inactive);
        }}
      />
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/datainsert" element={<DataInsert/>} />
          <Route path="/dataview" element={<DataView/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
