import React, { useState } from "react";
import "./SideBar.css";
import logo from "../../Assets/Images/logo/logo.svg";
import MenuItem from "./MenuItem";
import TopNav from "../topnav/TopNav";
import Sidebardata from "./Sidebardata.json";


const SideBar = (props) => {
  const [inactive, setInactive] = useState(false); // for active and inactive

  props.onCollapse(inactive); // for expand sidebar

  return (
    <div>
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="side-menu__top--section">
          <div className="side-menu__top--section__logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            onClick={() => setInactive(!inactive)}
            className="side-menu__top--section__toggle-menu-arrow"
          >
            {inactive ? (
              <i className="bi bi-arrow-right-circle"></i>
            ) : (
              <i className="bi bi-arrow-left-circle"></i>
            )}
          </div>
        </div>
        <div className="divider"></div>
        <div className="side-menu__main-menu">
          {Sidebardata.map((sidedata, index) => (
            <MenuItem
              key={index}
              name={sidedata.name}
              to={sidedata.to}
              iconName={sidedata.iconName}
            />
          ))}
        </div>
      </div>
      <TopNav />
    </div>
  );
};

export default SideBar;
