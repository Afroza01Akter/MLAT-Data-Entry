import React from 'react';
import "./SideBar.css";
import { NavLink } from 'react-router-dom';

const MenuItem = () => {
  return <div>
       <ul>
            <li>
              <NavLink to="/" className="side-menu__main-menu--menu-item">
              <div className="side-menu__main-menu--menu-item__menu-icon">
              <i className="bi bi-speedometer2"></i>
              </div>
              <span>DashBoard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="registration" className="side-menu__main-menu--menu-item">
              <div className="side-menu__main-menu--menu-item__menu-icon">
              <i className="bi bi-people"></i>
              </div>
              <span>Registration</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="login" className="side-menu__main-menu--menu-item">
              <div className="side-menu__main-menu--menu-item__menu-icon">
              <i className="bi bi-file-earmark-lock2"></i>
              </div>
              <span>Login</span>
              </NavLink>
            </li>
          </ul>
  </div>;
};

export default MenuItem;
