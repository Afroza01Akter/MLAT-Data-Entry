import React from 'react';
import "./SideBar.css";
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  const {name, iconName, to} = props;
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

            {/* <li>
              <NavLink to="/main/datainsert" className="side-menu__main-menu--menu-item">
              <div className="side-menu__main-menu--menu-item__menu-icon">
              <i class="bi bi-pie-chart"></i>
              </div>
              <span>Data Insert</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/main/dataview" className="side-menu__main-menu--menu-item">
              <div className="side-menu__main-menu--menu-item__menu-icon">
              <i class="bi bi-eye"></i>
              </div>
              <span>Data View</span>
              </NavLink>
            </li> */}
          </ul>
  </div>;
};

export default MenuItem;
