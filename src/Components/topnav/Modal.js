import React from "react";
import "./TopNav.css";

const Modal = ({ show }) => {
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
        <hr className="modal-divider"/>
        <div className="modal-body">
          <ul>
            <li><i class="bi bi-house-door-fill"></i>Home</li>
            <li><i class="bi bi-person-fill"></i>Profile</li>
            <li><i class="bi bi-gear-fill"></i>Settings</li>
          </ul>
        </div>

        <div className="modal-footer">
           <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
