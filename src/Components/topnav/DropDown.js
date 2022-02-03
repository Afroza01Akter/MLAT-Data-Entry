import React from "react";
import "./TopNav.css";
import { NavLink } from "react-router-dom";

const DropDown = ({ show }) => {
  // for topnav tooltip
  if (!show) {
    return null;
  }
  return (
    <div>
      <div className="modal">
        <div className="modal-head">
          <h4>Afroza Akter</h4>
          <p>afroza@asl.aero</p>
        </div>
        <hr className="modal-divider" />
        <div className="modal-body">
          <ul>
            <li>
              <i class="bi bi-house-door-fill"></i>Home
            </li>
            <li>
              <i class="bi bi-person-fill"></i>Profile
            </li>
            <li>
              <i class="bi bi-gear-fill"></i>Settings
            </li>
          </ul>
        </div>
        <NavLink to="/">
          <div className="modal-footer">
            <button>Logout</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default DropDown;
