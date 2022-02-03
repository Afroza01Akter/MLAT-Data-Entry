import React from 'react';
import "./SideBar.css";
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  const {name, iconName, to} = props; // props store in variable
  return <div>
       <ul>
            <li>
              <NavLink to={to} className="side-menu__main-menu--menu-item">
              <div className="side-menu__main-menu--menu-item__menu-icon">
              <i className={iconName}></i>
              </div>
              <span>{name}</span>
              </NavLink>
            </li>
          </ul>
  </div>;
};

export default MenuItem;
